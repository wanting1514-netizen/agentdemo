window.YANCHANG_CONFIG = {
  // 留空使用本地规则分层，秒级响应
  // 如需接入远程模型服务，填写如 "https://your-api.example.com/predict"
  modelApiUrl: "",
  // Leave blank to use built-in scripted patient replies in the demo
  patientApiUrl: "",
  // Ollama 本地大模型配置：设置模型名称以启用，留空则不使用
  // 启用后，患者对话和病例分析均使用LLM动态生成，更贴近真实问诊体验
  // 示例: "qwen2.5:7b", "deepseek-r1:8b", "llama3.1:8b"
  // 需要先运行: ollama pull <模型名>
  ollamaModel: "qwen2.5:1.5b",
  // Ollama 服务地址，默认为 http://localhost:11434
  ollamaBaseUrl: "https://api.wenhengmed.cn",
  // 演示模式：启用后不调用远程API，使用本地预置回答，保证演示流畅
  // 比赛现场建议开启，日常开发/测试建议关闭
  demoMode: false,
};