export type Prompt = {
    text0: string;
    text1: string;
    text2: string;
    news: string;
    tweets: string;
};

export enum WebSocketState {
    Ready,
    Calculating,
    Disconnected,
    Error,
}

export enum LanguageModel {
    llama_7b_chat = "llama_7b_chat",
    llama_13b_chat = "llama_13b_chat",
}

export type Cluster = {
    clusterid: number | null;
    clustertopic: string | null;
    imageurl: string | null;
};

export type User = {
    username: string | null;
    avatar: string | null;
}
