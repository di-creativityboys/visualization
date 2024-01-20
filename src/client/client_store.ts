import { create } from "zustand";
import { WebSocketState } from "~/types";

interface MyClientStore {
    apiVersion: number;
    setApiVersion2: () => void;
    setApiVersion1: () => void;
}

export const useMyClientStore = create<MyClientStore>((set) => ({
    apiVersion: 2,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setApiVersion2: () => set((state: MyClientStore) => ({ apiVersion: 2 })),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setApiVersion1: () => set((state: MyClientStore) => ({ apiVersion: 1 })),
}));

interface WebSocketStore {
    websocket_state: WebSocketState;
    setWebSocketState: (websocket_state: WebSocketState) => void;
    response: string;
    setResponse: (response: string) => void;
    homeServerStatus: string;
    uniServerStatus: string;
    setHomeServerStatus: (homeServerStatus: string) => void;
    setUniServerStatus: (uniServerStatus: string) => void;
}

export const useWebSocketStore = create<WebSocketStore>((set) => ({
    websocket_state: WebSocketState.Disconnected,
    setWebSocketState: (websocket_state: WebSocketState) =>
        set((_: WebSocketStore) => ({ websocket_state })),
    response: "",
    setResponse: (response: string) =>
        set((_: WebSocketStore) => ({ response })),
    homeServerStatus: "Offline",
    uniServerStatus: "Offline",
    setHomeServerStatus: (homeServerStatus: string) =>
        set((_: WebSocketStore) => ({ homeServerStatus })),
    setUniServerStatus: (uniServerStatus: string) =>
        set((_: WebSocketStore) => ({ uniServerStatus })),
}));
