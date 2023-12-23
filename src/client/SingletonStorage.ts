"use client";

import { type Article, type Prompt, type Tweet } from "../types";

/**
 * The Singleton class defines the `getInstance` method that lets clients access
 * the unique singleton instance.
 */
export class SingletonStorage {
    

    private static instance: SingletonStorage;

    tweets_downloaded: Set<Tweet>;
    selectedTweets: Set<Tweet>;
    selectedArticle: Article | null;
    twitterUserName: string;
    prompt: Prompt;

    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    private constructor() {
        this.selectedTweets = new Set();
        this.selectedArticle = null;
        this.twitterUserName = "";
        this.tweets_downloaded = new Set();
        this.prompt = {text0: "", text1: "", text2: "", news: "", tweets: ""}

        const isServer = typeof window === "undefined" ? true : false;

        if (isServer) {
            console.error("Storage executed on server!");
        } else {
            console.log("Storage executed on client. Everything is fine.");
        }
    }

    /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */
    public static getInstance(): SingletonStorage {
        if (!SingletonStorage.instance) {
            SingletonStorage.instance = new SingletonStorage();
        }

        return SingletonStorage.instance;
    }

    /**
     * Finally, any singleton should define some business logic, which can be
     * executed on its instance.
     */
    public someBusinessLogic() {
        // ...
    }
}
