export type Tweet = {
    id: bigint;
    rawcontent: string | null;
    publishdatetime: Date | null;
};

export type Prompt = {
    text0: string;
    text1: string;
    text2: string;
    news: string;
    tweets: string;
}

export type PromptTemplate = {
    id: bigint;
    name: string;
    text0: string;
    text1: string;
    text2: string;
}