"use client";

import * as React from "react";
import { List, Paper } from "@mui/material";
import { type tweets as Tweet } from "@prisma/client";
import TweetItem from "./tweet_item";
// import { useMyClientStore } from "~/client/client_store";

type MyProps = {
    children?: React.ReactNode;
    tweets: Tweet[];
};

export default function TweetsLayout({ tweets }: MyProps) {


    return (
        <Paper style={{ maxHeight: "79vh", overflow: "auto" }}>
            <List sx={{ width: "100%" }}>
                {tweets.map((tweetData) => {
                    const tweet: Tweet = tweetData;

                    return <TweetItem key={tweet.id} tweet={tweet} />;
                })}
            </List>
        </Paper>
    );
}
