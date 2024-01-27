import { create } from "zustand";
import { type User, WebSocketState } from "~/types";

interface MyClientStore {
    apiVersion: number;
    setApiVersion2: () => void;
    setApiVersion1: () => void;
    activeTopic: string | null;
    setActiveTopic: (activeTopicId: string | null) => void;
    activeArticle: string | null;
    setActiveArticle: (activeArticleId: string | null) => void;
    activeUser: User | null;
    setActiveUser: (activeUser: User | null) => void;
}

export const useMyClientStore = create<MyClientStore>((set) => ({
    apiVersion: 2,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setApiVersion2: () => set((state: MyClientStore) => ({ apiVersion: 2 })),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setApiVersion1: () => set((state: MyClientStore) => ({ apiVersion: 1 })),
    activeTopic: null,
    setActiveTopic: (activeTopic: string | null) =>
        set((_: MyClientStore) => ({ activeTopic })),
    activeArticle: null,
    setActiveArticle: (activeArticle: string | null) =>
        set((_: MyClientStore) => ({ activeArticle })),
    activeUser: null,
    setActiveUser: (activeUser: User | null) =>
        set((_: MyClientStore) => ({ activeUser })),
}));

interface WebSocketStore {
    websocket_state: WebSocketState;
    setWebSocketState: (websocket_state: WebSocketState) => void;
    response: string;
    setResponse: (response: string) => void;
    homeServerStatus: WebSocketState;
    uniServerStatus: WebSocketState;
    setHomeServerStatus: (homeServerStatus: WebSocketState) => void;
    setUniServerStatus: (uniServerStatus: WebSocketState) => void;
}

export const useWebSocketStore = create<WebSocketStore>((set) => ({
    websocket_state: WebSocketState.Disconnected,
    setWebSocketState: (websocket_state: WebSocketState) =>
        set((_: WebSocketStore) => ({ websocket_state })),
    response: "",
    setResponse: (response: string) =>
        set((_: WebSocketStore) => ({ response })),
    homeServerStatus: WebSocketState.Disconnected,
    uniServerStatus: WebSocketState.Disconnected,
    setHomeServerStatus: (homeServerStatus: WebSocketState) =>
        set((_: WebSocketStore) => ({ homeServerStatus })),
    setUniServerStatus: (uniServerStatus: WebSocketState) =>
        set((_: WebSocketStore) => ({ uniServerStatus })),
}));
