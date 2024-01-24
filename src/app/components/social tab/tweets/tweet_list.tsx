import React from "react";
import { db } from "~/server/db";
import { singletonServer } from "~/server/SingletonServer";
import TweetsLayout from "./my_layout";

export const TweetList = async () => {
    const tweets = await db.tweets.findMany({
        where: {
            tweetuser: {
                equals: singletonServer.twitterUserName,
            },
        },
        orderBy: [
            {
                publishdatetime: "desc",
            },
        ],
    });

    return <TweetsLayout tweets={tweets}/>
};
