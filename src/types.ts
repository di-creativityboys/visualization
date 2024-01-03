export type Tweet = {
    id: bigint;
    rawcontent: string | null;
    publishdatetime: Date | null;
};

export type Article = {
    urlid: string;
    headline: string | null;
    content: string | null;
    authors: string[];
    uploadtimestamp: Date | null;
    imageurl: string | null;
    imagedescription: string | null;
    scrapingtimestamp: Date;
    source: string | null;
    topic: string | null;
    clusterid: number | null;
    clustertopic: string | null;
}

export type Prompt = {
    text0: string;
    text1: string;
    text2: string;
    news: string;
    tweets: string;
}

export type PromptTemplate = {
    id: number;
    name: string;
    text0: string | null;
    text1: string | null;
    text2: string | null;
}