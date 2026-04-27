window.YANCHANG_CONFIG = {
  // 留空使用本地规则分层，秒级响应
  // 如需接入远程模型服务，填写如 "https://your-api.example.com/predict"
  modelApiUrl: "",
  // Leave blank to use built-in scripted patient replies in the demo
  patientApiUrl: "",
  // Ollama 本地大模型配置：设置模型名称以启用，留空则不使用
  // 示例: "qwen2.5:7b", "deepseek-r1:8b", "llama3.1:8b"
  // 需要先运行: ollama pull <模型名>
  ollamaModel: "qwen2.5:7b",
  // Ollama 服务地址，默认为 http://localhost:11434
  ollamaBaseUrl: "",
};
