import { env } from "~/env.mjs";
import WebSocket from 'ws';

const ws = new WebSocket(env.NEXT_PUBLIC_LLM_WEBSOCKET_URL);

ws.on('open', () => {
  console.log('Connected to server');

  //ws.send('Hello, server!');
});

ws.on('message', (message: string) => {
  console.log(`Received message from server: ${message}`);
});

ws.on('close', () => {
  console.log('Disconnected from server');
});


//export const queryLLM = async () => {
//}