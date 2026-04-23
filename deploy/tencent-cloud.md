# Tencent Cloud Deployment

This guide covers the two Tencent Cloud paths that fit this project best:

- Lighthouse or CVM with Docker
- Lighthouse or CVM with system Nginx (no Docker Hub dependency)

It is written to work for Ubuntu and for RHEL-compatible systems such as OpenCloudOS 9.

## 1. Open the firewall

Allow inbound traffic for:

- `TCP 22` for SSH
- `TCP 80` for HTTP
- `TCP 443` for HTTPS
- Optional: `TCP 8080` if you want to test the app before putting Nginx in front

For Lighthouse, edit the instance firewall. For CVM, edit the security group.

## 2. Upload or clone the project

```bash
git clone https://github.com/wanting1514-netizen/agentdemo.git yanchang-demo
cd yanchang-demo
```

## 3. Configure the model API

Copy the example file:

```bash
cp .env.example .env
```

If your model already has a public URL:

```bash
YANCHANG_MODEL_API_URL=https://your-api.example.com/predict
YANCHANG_PATIENT_API_URL=
```

If your model will be reverse-proxied on the same server:

```bash
YANCHANG_MODEL_API_URL=/api/uc-model
YANCHANG_PATIENT_API_URL=/api/patient-chat
```

## 4. Path A: Docker deployment

### Ubuntu 22.04 / 24.04

```bash
sudo apt update
sudo apt install -y ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo systemctl enable --now docker
```

### OpenCloudOS 9 / Rocky / Alma / CentOS Stream 9

Install Docker:

```bash
dnf -y install dnf-plugins-core git
dnf config-manager --add-repo https://mirrors.cloud.tencent.com/docker-ce/linux/centos/docker-ce.repo
sed -i 's#download.docker.com#mirrors.tencentyun.com/docker-ce#g' /etc/yum.repos.d/docker-ce.repo
dnf clean all
dnf makecache
dnf install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin --nobest
systemctl enable --now docker
```

If pulling images from Docker Hub is slow or times out, add the Tencent mirror:

```bash
mkdir -p /etc/docker
cat > /etc/docker/daemon.json <<'EOF'
{
  "registry-mirrors": [
    "https://mirror.ccs.tencentyun.com"
  ]
}
EOF
systemctl daemon-reload
systemctl restart docker
docker info | sed -n '/Registry Mirrors/,+3p'
```

### Build and run

```bash
docker compose up -d --build
docker ps
curl -I http://127.0.0.1:8080
```

Then visit:

```text
http://YOUR_SERVER_IP:8080
```

## 5. Path B: System Nginx deployment

Use this when Docker Hub is unreachable and you want the fastest static deployment path.

### Ubuntu

```bash
sudo apt update
sudo apt install -y nginx gettext-base
```

### OpenCloudOS 9 / Rocky / Alma / CentOS Stream 9

```bash
dnf install -y nginx gettext
systemctl enable --now nginx
```

### Publish the static files

```bash
mkdir -p /var/www/yanchang-demo
cp -r ./* /var/www/yanchang-demo/
envsubst '${YANCHANG_MODEL_API_URL} ${YANCHANG_PATIENT_API_URL}' \
  < /var/www/yanchang-demo/config.template.js \
  > /var/www/yanchang-demo/config.js
```

If you want to export variables in the current shell before running `envsubst`:

```bash
export YANCHANG_MODEL_API_URL=https://your-api.example.com/predict
export YANCHANG_PATIENT_API_URL=
```

### Add the Nginx site

Use [nginx-site.example.conf](/Users/wanting/Desktop/毕业论文最终代码文件/yanchang-demo/deploy/nginx-site.example.conf) as a template. For a frontend-only deployment, remove the `/api/...` blocks and point `root` to `/var/www/yanchang-demo`.

Minimal example:

```nginx
server {
  listen 80;
  server_name _;

  root /var/www/yanchang-demo;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

For OpenCloudOS 9:

```bash
cat > /etc/nginx/conf.d/yanchang-demo.conf <<'EOF'
server {
  listen 80;
  server_name _;

  root /var/www/yanchang-demo;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
EOF
nginx -t
systemctl reload nginx
curl -I http://127.0.0.1
```

Then visit:

```text
http://YOUR_SERVER_IP
```

## 6. Production recommendation

For this project, the most stable long-term Tencent Cloud setup is:

- Nginx on port `80/443`
- Static frontend from `/var/www/yanchang-demo`
- Model API reverse-proxied through `/api/uc-model`
- Optional patient chat API reverse-proxied through `/api/patient-chat`

That gives you:

- a public URL on your own server
- same-origin API requests
- no GitHub Pages CORS issues
- no runtime dependence on Docker Hub once Nginx is installed
