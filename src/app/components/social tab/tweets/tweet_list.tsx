import { List, Paper } from "@mui/material";
import React from "react";
import { db } from "~/server/db";
import TweetItem from "./tweet_item";
import { type tweets as Tweet } from "@prisma/client";
import { singletonServer } from "~/server/SingletonServer";

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

    return (
        <Paper style={{ maxHeight: "80vh", overflow: "auto" }}>
            <List sx={{ width: "100%" }}>
                {tweets.map((tweetData) => {
                    const tweet: Tweet = tweetData;

                    return <TweetItem key={tweet.id} tweet={tweet} />;
                })}
            </List>
        </Paper>
    );
};
