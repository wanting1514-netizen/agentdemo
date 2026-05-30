window.YANCHANG_CONFIG = {
  // 留空使用本地规则分层，秒级响应
  // 如需接入远程模型服务，填写如 "https://your-api.example.com/predict"
  modelApiUrl: "",
  // Leave blank to use built-in scripted patient replies in the demo
  patientApiUrl: "",
  // Ollama 大模型配置：设置模型名称以启用，留空则不使用
  // 启用后，患者对话和病例分析均使用LLM动态生成
  // 服务器上使用轻量模型 qwen2.5:0.5b（2GB内存可用）
  ollamaModel: "qwen2.5:0.5b",
  // Ollama 服务地址（通过 Nginx 反向代理）
  ollamaBaseUrl: "https://api.wenhengmed.cn",
  // 演示模式：启用后不调用远程API/Ollama，使用本地预置回答，保证演示流畅
  // 比赛现场建议开启，日常开发/测试建议关闭
  demoMode: false,
};