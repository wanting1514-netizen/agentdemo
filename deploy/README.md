# Server Deployment

For the current Tencent Cloud server workflow, the fastest repeatable update path is:

- [server-update-quickstart](/Users/wanting/Desktop/毕业论文最终代码文件/yanchang-demo/deploy/server-update-quickstart.md)

This project can be deployed in two common ways on your own cloud server.

## Option 1: Static frontend + external model API

Use this when your model service already has its own public URL.

1. Build and run the frontend container:

```bash
docker build -t yanchang-demo .
docker run -d \
  --name yanchang-demo \
  -p 8080:80 \
  -e YANCHANG_MODEL_API_URL="https://your-api.example.com/predict" \
  -e YANCHANG_PATIENT_API_URL="https://your-api.example.com/patient-chat" \
  yanchang-demo
```

2. Open `http://your-server-ip:8080`.

Notes:
- Your model API must allow CORS from the frontend origin.
- If you do not use the patient dialogue API, leave `YANCHANG_PATIENT_API_URL` empty.

## Option 2: Same-domain deployment behind Nginx

Use this when you want the frontend and API to appear under one domain.

1. Copy the site files to a web root such as `/var/www/yanchang-demo`.
2. Set `config.js` to:

```js
window.YANCHANG_CONFIG = {
  modelApiUrl: "/api/uc-model",
  patientApiUrl: "/api/patient-chat",
};
```

3. Use `deploy/nginx-site.example.conf` as your Nginx site template.

Notes:
- This avoids browser CORS issues.
- You can point `/api/uc-model` to any backend implementation as long as it accepts the frontend payload and returns JSON.

## Expected model API

The frontend sends a `POST` request with JSON like:

```json
{
  "caseKey": "high",
  "caseText": "...",
  "interview": [
    {
      "key": "stool",
      "label": "便次",
      "question": "最近一天大便几次？",
      "answer": "一天四五次"
    }
  ],
  "localAnalysis": {
    "score": 62,
    "risk": {
      "level": "高风险",
      "key": "high",
      "percent": 88
    },
    "hits": [
      {
        "key": "mucusBlood",
        "label": "黏液脓血便",
        "score": 24
      }
    ]
  }
}
```

The frontend can consume JSON responses containing fields such as:

```json
{
  "risk": "high",
  "probability": 0.82,
  "source": "custom-model-api"
}
```

Compatible aliases also work, for example `risk_level`, `risk_key`, `label`, `pred_prob`, or `prediction_probability`.
