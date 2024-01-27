import React from "react";
import { db } from "~/server/db";
import TweetsLayout from "./my_layout";

export const TweetList = async ({ userParam }: { userParam: string }) => {
    const tweets = await db.tweets.findMany({
        where: {
            tweetuser: {
                equals: userParam,
                mode: "insensitive",
            },
        },
        orderBy: [
            {
                publishdatetime: "desc",
            },
        ],
    });

    return <TweetsLayout tweets={tweets} />;
};
