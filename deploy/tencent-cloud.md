# Tencent Cloud CVM Deployment

This guide assumes:

- You have a Tencent Cloud CVM with Ubuntu 22.04 or 24.04.
- The server has a public IP.
- You can log in with `root` or a `sudo` user.

## 1. Open the security group

In the Tencent Cloud console, add inbound rules for:

- `TCP 22` for SSH
- `TCP 80` for HTTP
- `TCP 443` for HTTPS
- Optional: `TCP 8080` if you want to test the container directly before adding Nginx

## 2. Install Docker

On the CVM server:

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

## 3. Upload the project

Example:

```bash
scp -r ./yanchang-demo ubuntu@YOUR_SERVER_IP:/home/ubuntu/
```

Or clone it on the server:

```bash
git clone https://github.com/wanting1514-netizen/agentdemo.git yanchang-demo
cd yanchang-demo
```

## 4. Configure your model API

If your model service already has a public URL:

```bash
cp .env.example .env
```

Then edit `.env`:

```bash
YANCHANG_MODEL_API_URL=https://your-api.example.com/predict
YANCHANG_PATIENT_API_URL=
```

If your model service runs on the same CVM and will be reverse-proxied by Nginx, you can instead use:

```bash
YANCHANG_MODEL_API_URL=/api/uc-model
YANCHANG_PATIENT_API_URL=/api/patient-chat
```

## 5. Start the frontend container

```bash
docker compose up -d --build
```

Then visit:

```text
http://YOUR_SERVER_IP:8080
```

## 6. Optional: Put Nginx in front

If you want a domain name and same-origin API routing:

1. Install Nginx on the CVM.
2. Use `deploy/nginx-site.example.conf` as the site config.
3. Point your domain DNS to the CVM public IP.
4. Later, add HTTPS with Certbot.

## Recommended Tencent Cloud path

For your current project, the simplest production path is:

- Tencent Cloud CVM
- Docker for the frontend
- Your model API on the same server or another server
- Nginx reverse proxy on port 80/443

That gives you:

- stable public access
- control over your own model service
- no GitHub Pages CORS headaches if you use same-origin `/api/...`
