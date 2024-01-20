"use client";

import { useWebSocketStore } from "~/client/client_store";
import { type LanguageModel, WebSocketState } from "~/types";

let webSocket: WebSocket;

const setWebSocketState = useWebSocketStore.getState().setWebSocketState;
const setResponse = useWebSocketStore.getState().setResponse;

export const openWebSocket = () => {
    "use client";

    if (webSocket != null) return;

    webSocket = new WebSocket("ws://asdufsfd.dynv6.net:5000");

    webSocket.onopen = (_) => {
        console.log("Connected to web socket");
        setWebSocketState(WebSocketState.Ready);
    };
    webSocket.onclose = (_) => {
        console.log("web socket closed");
        setWebSocketState(WebSocketState.Disconnected);
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
        const response: string = data.response;

        setResponse(response);
        setWebSocketState(WebSocketState.Ready);
    };
};

type queryLLMType = {
    prompt: string;
    languageModel: LanguageModel;
};

export const queryLLM = ({ prompt, languageModel }: queryLLMType) => {
    "use client";

    setWebSocketState(WebSocketState.Calculating);

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
