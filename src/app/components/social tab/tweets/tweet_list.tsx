import React from "react";
import { db } from "~/server/db";
import TweetsLayout from "./my_layout";

export const TweetList = async ({ userParam }: { userParam: string }) => {
    const tweets = await db.tweets.findMany({
        take: 150,
        where: {
            tweetuser: {
                equals: userParam,
                mode: "insensitive",
            },
        },
        distinct: ["rawcontent"],
        orderBy: [
            {
                publishdatetime: "desc",
            },
        ],
    });

    return <TweetsLayout tweets={tweets} />;
};
