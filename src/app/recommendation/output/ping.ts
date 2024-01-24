"use client";

import { WebSocketState } from "~/types";

type pingLLMType = {
    name: string;
    statusFunction: (serverStatus: WebSocketState) => void;
    address: string;
};

export const pingLLMServer = ({ name, statusFunction, address }: pingLLMType) => {
    "use client";

    if (typeof window === "undefined") return;

    const webSocket: WebSocket = new WebSocket(address);

    webSocket.onopen = (_) => {
        console.log("Connected to web socket ping" + name);
        statusFunction(WebSocketState.Disconnected);
        webSocket.send("ping");
    };
    webSocket.onclose = (_) => {
        console.log("web socket closed ping" + name);
        //setHomeServerStatus(WebSocketState.Disconnected);
    };
    webSocket.onerror = (event) => {
        console.log("web socket error ping" + name);
        console.log(event);
        statusFunction(WebSocketState.Disconnected);

        webSocket.close();
    };

    webSocket.onmessage = (event) => {
        console.log("message recieved ping" + name);
        console.log(event);

        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const raw: string = event.data;

        if (raw === "ping") {
            statusFunction(WebSocketState.Ready);
        } else {
            statusFunction(WebSocketState.Disconnected);
        }

        webSocket.close();
    };
};
