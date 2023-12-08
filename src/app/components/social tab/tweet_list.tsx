import { List, Paper } from "@mui/material";
import React from "react";
import { db } from "~/server/db";
import TweetItem from "./tweet_item";
import { type Tweet } from "~/types";

export const TweetList = async () => {
    console.log("in tweet list");
    //console.log(SingletonStorage.getInstance().twitterUserName);
    const tweets = await db.tweets.findMany({
        // where: {
        //   tweetuser: {
        //     equals: SingletonStorage.getInstance().twitterUserName,
        //   }
        // },
        orderBy: [
            {
                publishdatetime: "desc",
            },
        ],
    });

    return (
        <Paper style={{ maxHeight: "85vh", overflow: "auto" }}>
            <List sx={{ width: "100%" }}>
                {tweets.map((tweetData) => {
                    const tweet: Tweet = tweetData;

                    return (
                        <TweetItem key={tweet.id} tweet={tweet} />
                    );
                })}
            </List>
        </Paper>
    );
};
