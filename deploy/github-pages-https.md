# GitHub Pages + HTTPS 发布速查

适用仓库：
`wanting1514-netizen/agentdemo`

适用场景：
- 前端是静态页面
- 后端模型接口继续使用 Railway
- 目标是尽快拿到一个稳定、可分享、带 HTTPS 的比赛演示地址

## 推荐发布形态

优先使用：
- GitHub Pages 托管前端
- `www` 子域名做正式地址
- 根域名跳转到 `www`

推荐正式地址示例：
- `https://www.wenhengmed.com`

在自定义域名还没买好前，可先用 GitHub Pages 默认地址测试：
- `https://wanting1514-netizen.github.io/agentdemo/`

## 仓库当前状态

本仓库已经具备 GitHub Pages 工作流：
- `.github/workflows/static.yml`

当前默认前端配置已经指向 Railway 模型服务：
- `config.js`

## 第一步：开启 GitHub Pages

1. 打开仓库：
   `https://github.com/wanting1514-netizen/agentdemo`
2. 进入 `Settings -> Pages`
3. 在 `Build and deployment` 中选择：
   - `Source: GitHub Actions`
4. 等待 Actions 跑完

成功后，默认地址通常会是：
- `https://wanting1514-netizen.github.io/agentdemo/`

## 第二步：买域名

建议买一个短一点、正式一点的域名。

可参考：
- `wenhengmed.com`
- `wenhengai.com`
- `wenhengedu.com`

## 第三步：优先绑定 `www`

以 `wenhengmed.com` 为例，推荐正式站点使用：
- `www.wenhengmed.com`

原因：
- 对 GitHub Pages 更省心
- HTTPS 证书签发通常更顺
- 后续做根域名跳转更清晰

## 第四步：配置 DNS

如果正式地址使用：
- `www.wenhengmed.com`

则 DNS 里加一条：

- 类型：`CNAME`
- 主机记录：`www`
- 记录值：`wanting1514-netizen.github.io`

根域名 `wenhengmed.com` 有两种做法。

### 做法 A：根域名跳转到 `www`

这是最推荐的。

在你的域名服务商后台设置 URL 转发：
- `wenhengmed.com` -> `https://www.wenhengmed.com`

### 做法 B：根域名也直接给 GitHub Pages

如果你不做跳转，可以给根域名配置 GitHub Pages 官方 A 记录：

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

如果服务商支持，也可以配 `AAAA` 记录。

## 第五步：在 GitHub Pages 里填自定义域名

1. 回到仓库 `Settings -> Pages`
2. 在 `Custom domain` 填入：
   - `www.wenhengmed.com`
3. 保存
4. 等待 GitHub 自动校验 DNS 和签发证书

## 第六步：开启 HTTPS

当 DNS 校验完成后：
- 勾选 `Enforce HTTPS`

如果一开始不能勾选，通常是证书还没签发完，等几分钟到几十分钟再看。

## 第七步：可选安全增强

建议做域名验证，避免被别人抢绑定：
- GitHub `Settings -> Pages` 对应文档里有 `Verify domain`

## 发布后的检查清单

确认以下 6 件事：

1. `https://wanting1514-netizen.github.io/agentdemo/` 可打开
2. `https://www.wenhengmed.com` 可打开
3. 地址栏显示 HTTPS
4. 登录页标题显示：
   `问衡｜中西医结合病例推理教学智能体`
5. 模型接口可正常返回结果
6. 手机浏览器也能正常打开

## 当前已知注意点

1. GitHub Pages 只能托管静态前端，不能替代你的 Railway 模型服务
2. 本仓库当前 `config.js` 已默认指向 Railway 模型接口
3. 如果后续更换模型地址，只需要改：
   - `config.js`

## 官方文档

- GitHub Pages 总览：
  https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages
- GitHub Pages 自定义域名：
  https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- GitHub Pages HTTPS：
  https://docs.github.com/articles/securing-your-github-pages-site-with-https
- GitHub Pages 域名验证：
  https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages
