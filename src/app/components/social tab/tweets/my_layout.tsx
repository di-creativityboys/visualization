"use client";

import * as React from "react";
import { List, Paper } from "@mui/material";
import { type tweets as Tweet } from "@prisma/client";
import TweetItem from "./tweet_item";
import { useMyClientStore } from "~/client/client_store";

type MyProps = {
    children?: React.ReactNode;
    tweets: Tweet[];
};

export default function TweetsLayout({ tweets }: MyProps) {
    const activeUser = useMyClientStore((state) => state.activeUser);
    const setActiveUser = useMyClientStore((state) => state.setActiveUser);

    if (activeUser?.avatar == null) {
        //|| activeUser?.username?.toLowerCase() !== tweets[0]?.tweetuser?.toLowerCase()
        if (
            tweets[0]?.profileimageurl === undefined ||
            activeUser?.username === undefined
        ) {
        } else {
            setActiveUser({
                username: activeUser?.username,
                avatar: tweets[0]?.profileimageurl,
            });
        }
    }

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
}
