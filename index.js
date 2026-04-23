addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  let path = url.pathname.slice(1) || 'index.html';

  // Map paths to content types
  const contentTypes = {
    'index.html': 'text/html; charset=utf-8',
    'app.js': 'application/javascript; charset=utf-8',
    'styles.css': 'text/css; charset=utf-8',
  };

  const contentType = contentTypes[path] || 'text/plain; charset=utf-8';

  // For demo, return the HTML (in real deployment, you'd fetch from KV or R2)
  // This is a placeholder - actual deployment needs proper asset storage
  return new Response(`<!DOCTYPE html>
<html>
<head><title>Agent Demo</title></head>
<body>
<p>Please deploy via Dashboard or configure proper asset storage.</p>
</body>
</html>`, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' }
  });
}
