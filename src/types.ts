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
}

export enum LanguageModel {
    llama_7b_chat = "llama_7b_chat",
    llama_13b_chat = "llama_13b_chat",
}