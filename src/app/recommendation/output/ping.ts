import { useWebSocketStore } from "~/client/client_store";

const setHomeServerStatus = useWebSocketStore.getState().setHomeServerStatus;

export const pingLLMServer = () => {
    const webSocket: WebSocket = new WebSocket("ws://asdufsfd.dynv6.net:5000");

    webSocket.onopen = (_) => {
        console.log("Connected to web socket");
        webSocket.send("ping");
    };
    webSocket.onclose = (_) => {
        console.log("web socket closed");
        setHomeServerStatus("Offline");
    };
    webSocket.onerror = (event) => {
        console.log("web socket error");
        console.log(event);
        setHomeServerStatus("Error");

        webSocket.close();
    };

    webSocket.onmessage = (event) => {
        console.log(event);

        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const raw: string = event.data;

        if (raw === "ping") {
            setHomeServerStatus("Online");
        } else {
            setHomeServerStatus("Error");
        }

        webSocket.close();
    };
};
