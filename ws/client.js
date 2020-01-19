const WebSocket = require('ws');

const ws = new WebSocket('wss://localhost:9000', {
  origin: 'https://websocket.org:9000',
  rejectUnauthorized: false
});

ws.on('open', function open() {
  console.log('connected');
  ws.send(Date.now());
});

ws.on('message', function incoming(message) {
  console.log('received: %s', message);
});