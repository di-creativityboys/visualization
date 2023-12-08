/*import WebSocket from 'ws';

const ws = new WebSocket("ws://asdufsfd.dynv6.net:5000");

ws.on('open', () => {
  console.log('Connected to server');

  //ws.send('Hello, server!');
});

ws.on('message', (message: string) => {
  console.log(`Received message from server: ${message}`);
});

ws.on('close', () => {
  console.log('Disconnected from server');
});*/

import { type LanguageModel, WebSocketState } from "./generate_tab";

// eslint-disable-next-line @typescript-eslint/ban-types
let responseFunction: Function;
// eslint-disable-next-line @typescript-eslint/ban-types
let webSocketStateFunction: Function;

let webSocket: WebSocket;

export const openWebSocket = () => {
    if (webSocket != null) return;

    webSocket = new WebSocket("ws://asdufsfd.dynv6.net:5000");

    webSocket.onopen = (_) => {
        console.log("Connected to web socket");
        webSocketStateFunction(WebSocketState.Ready);
    };
    webSocket.onclose = (_) => {
        console.log("web socket closed");
        webSocketStateFunction(WebSocketState.Disconnected);
    };
    webSocket.onerror = (event) => {
        console.log("web socket error");
        console.log(event);
    };

    webSocket.onmessage = (event) => {
        console.log(event);

        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const raw: string = event.data;

        let data;
        try {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            data = JSON.parse(raw);
        } catch (e) {
            console.log("message recieving failed");
            return;
        }

        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        const response = data.response;

        responseFunction(response);
        webSocketStateFunction(WebSocketState.Ready);
    };
};

// eslint-disable-next-line @typescript-eslint/ban-types
export const registerWebSocketStateFunction = (
    webSocketStateFunctionP: Function
) => {
    webSocketStateFunction = webSocketStateFunctionP;
};

// eslint-disable-next-line @typescript-eslint/ban-types
export const queryLLM = (
    prompt: string,
    languageModel: LanguageModel,
    responseFunc: Function
) => {
    responseFunction = responseFunc;
    webSocketStateFunction(WebSocketState.Calculating);

    const template = {
        task: "plain",
        options: {
            prompt: prompt,
            model: languageModel,
        },
    };

    const query = JSON.stringify(template);

    webSocket.send(query);

    console.log("websocket query sent!");
    console.log(query);
};
