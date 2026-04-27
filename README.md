# 问衡 - 中西医结合病例推理教学智能体

面向医学教育的临床推理训练 SPA，以溃疡性结肠炎（UC）复发预测为示范病种，融合中西医双轨证据链，支撑"问诊→解析→评判→反馈→图谱"完整教学闭环。

## 学生端 · 6 步推理流程

| 步骤 | 页面 | 说明 |
|------|------|------|
| 1 | 病例选择 | 高风险 / 边界 / 低风险三种脱敏教学病例 |
| 2 | 问诊训练 | 自由输入追问，可选预设追问芯片，系统返回脚本化患者应答 |
| 3 | 风险作答 | 低/中/高三档判断，支持键盘快捷键 1/2/3 |
| 4 | 智能解析 | 规则分层评分 + 可选 Ollama 本地 LLM 实时推理 |
| 5 | 量规反馈 | Canvas 七维雷达图 + 分级量规表 + 指南文献引用 |
| 6 | 特征图谱 | 可解释特征贡献图 + 中医辨证依据 + 证据链评估 |

## 教师端 · 5 模块

| 模块 | 路径 | 功能 |
|------|------|------|
| 工作台 | `teacher-home` | 班级考试进度概览，通知管理，快捷发布 |
| 班级管理 | `classes` | 分数分布柱状图、完成率环形图、**训练趋势折线图**、**薄弱点热力图**、学生明细表 |
| 建课建病例 | `builder` | 教学案例编辑器，跨专科模板（胸痛/慢性咳嗽/低血糖），临床依据与安全边界 |
| 考试发布 | `exam` | 定时考试，切屏/复制反作弊，自动收卷，教师开放答案后展示解析 |
| 教学复盘 | `teacher` | 选定学生查看详细训练记录、问诊对话、风险判断一致性 |

## 技术架构

```
纯前端 SPA（无构建工具）
├── index.html          # 单页入口，CSP 策略，骨架屏
├── app.js              # 全部业务逻辑（~5600 行）
│   ├── SPA 路由        # location.hash + setRoute() + afterRouteChange()
│   ├── 角色导航        # roleRoutes: student / teacher
│   ├── 规则引擎        # 中西医症状特征匹配 + 风险分层评分
│   ├── LLM 集成        # Ollama API (/api/generate)，JSON 自动纠错
│   ├── Canvas 可视化   # 雷达图、环形图、趋势折线图、成绩卡片、SHAP图
│   ├── 考试引擎        # 倒计时、切屏计数、到期自动提交
│   └── 一键演示        # 自动走完完整教学流程
├── styles.css          # 全部样式（~4600 行，含深色模式完整适配）
├── config.js           # 运行时配置（Ollama 模型/地址，远程 API）
└── deploy/             # Docker + Nginx + Cloudflare 多方案部署配置
```

## 快速开始

### 1. 静态文件部署（推荐）

直接将项目文件放入任意静态服务器或 GitHub Pages 即可运行。所有核心功能纯前端实现，无需后端。

```bash
# 本地预览
cd yanchang-demo
python3 -m http.server 8080
# 打开 http://localhost:8080
```

### 2. 接入 Ollama 本地大模型（可选）

```bash
# 下载模型（约 4.7GB）
ollama pull qwen2.5:7b

# 启动 Ollama 服务（默认 http://localhost:11434）
ollama serve
```

编辑 `config.js`：
```js
window.YANCHANG_CONFIG = {
  ollamaModel: "qwen2.5:7b",   // 留空则不使用 LLM
  ollamaBaseUrl: "",            // 留空使用默认 http://localhost:11434
};
```

Ollama 模式下的容错机制：
- LLM 返回非 JSON 时，自动从 markdown 代码块提取
- 提取失败时回退到本地规则引擎
- 所有模式均返回 risk_key + probability

### 3. Docker 部署

```bash
docker build -t yanchang-demo .
docker run -d --name yanchang-demo -p 8080:80 yanchang-demo
```

### 4. Cloudflare Workers

项目预设 `wrangler.toml` 和 `index.js` 入口，可作为 Worker 部署。

## 测试账号

| 角色 | 用户名 | 密码 |
|------|--------|------|
| 学生端 | `student_demo` | `ChangYu2026!` |
| 教学复盘 | `teacher_demo` | `ChangYu2026!` |

## 特色功能

### 可视化

- **七维雷达图**（Canvas）：医理正确、问诊顺序、关键检查、证据整合、信息表达、中医辨证、安全边界
- **训练趋势折线图**：双 Y 轴（累计训练次数 + 周均分），按最近 4 周自动分级
- **薄弱点热力图**：按频率着色，一眼定位班级共性短板
- **成绩卡片 PNG 导出**：520×640 Canvas 渲染，一键下载

### 教学辅助

- **一键演示模式**：从问诊到反馈全流程自动跑通，适合课堂展示
- **新手引导**：7 步遮罩引导，点对点说明功能
- **学习记录**：列表/时间线双视图，支持导出

### 安全设计

- CSP 策略：`default-src 'self'; connect-src *` 允许灵活接入 API
- 考试反作弊：`visibilitychange` 切屏监控 + `copy` 事件拦截
- 安全边界声明：系统多处标注"仅用于教学训练，不作为真实诊疗工具"

## 配置项

`config.js` 支持三个配置项：

| 字段 | 类型 | 说明 |
|------|------|------|
| `modelApiUrl` | string | 远程模型推理 API 地址，留空使用本地规则引擎 |
| `patientApiUrl` | string | 远程患者对话 API 地址，留空使用内置脚本应答 |
| `ollamaModel` | string | Ollama 模型名（如 `qwen2.5:7b`），留空不启用 |
| `ollamaBaseUrl` | string | Ollama 地址，默认 `http://localhost:11434` |

## 浏览器兼容性

- 支持所有现代浏览器（Chrome / Firefox / Safari / Edge）
- `roundRect()` 有 fallback 实现
- `IntersectionObserver` 用于子步骤滚动高亮
- 移动端自适应（flex-wrap + viewport-fit）

## 安全边界

本系统仅用于医学教育与临床推理训练：
- 所有演示病例为脱敏或虚拟数据
- 不替代真实诊疗判断
- 高风险提示引导学生就医与教师复核
- 不上传真实患者身份信息
- 不直接给出治疗方案，仅支持风险分层训练
