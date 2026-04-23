# 云服务器更新速查

适用场景：

- 代码已经推到 GitHub
- 前端静态文件部署在 `/var/www/yanchang-demo`
- 服务器代码仓库在 `/opt/agentdemo`
- Nginx 对外提供 `http://129.211.9.250`
- 模型接口当前使用 Railway：
  `https://modest-miracle-production-6da8.up.railway.app/predict`

## 1. 日常更新

在服务器控制台执行：

```bash
git -C /opt/agentdemo pull --ff-only origin main

cat > /opt/agentdemo/config.js <<'EOF'
window.YANCHANG_CONFIG = {
  modelApiUrl: "https://modest-miracle-production-6da8.up.railway.app/predict",
  patientApiUrl: "",
};
EOF

mkdir -p /var/www/yanchang-demo/assets
cp /opt/agentdemo/index.html /opt/agentdemo/app.js /opt/agentdemo/styles.css /opt/agentdemo/config.js /var/www/yanchang-demo/
cp -r /opt/agentdemo/assets/* /var/www/yanchang-demo/assets/

nginx -t
systemctl reload nginx
```

## 2. 更新后检查

```bash
git -C /opt/agentdemo log -1 --oneline
curl -I http://127.0.0.1
curl -I http://129.211.9.250
```

正常情况下：

- `git log -1` 会显示最新提交
- `curl -I` 会返回 `HTTP/1.1 200 OK`

## 3. 如果要换模型地址

只改这段，再重新复制静态文件并重载 Nginx：

```bash
cat > /opt/agentdemo/config.js <<'EOF'
window.YANCHANG_CONFIG = {
  modelApiUrl: "新的模型接口地址",
  patientApiUrl: "",
};
EOF
```

## 4. 首次部署时的 Nginx 配置

如果 `/etc/nginx/conf.d/yanchang-demo.conf` 还没有创建，可写成：

```nginx
server {
  listen 80;
  server_name 129.211.9.250;

  root /var/www/yanchang-demo;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

写完后执行：

```bash
nginx -t
systemctl reload nginx
```

## 5. 你以后真正只需要记住的三步

```bash
git -C /opt/agentdemo pull --ff-only origin main
cp /opt/agentdemo/index.html /opt/agentdemo/app.js /opt/agentdemo/styles.css /opt/agentdemo/config.js /var/www/yanchang-demo/
systemctl reload nginx
```

如果这次代码里改了 `assets/`，记得补跑：

```bash
cp -r /opt/agentdemo/assets/* /var/www/yanchang-demo/assets/
```
