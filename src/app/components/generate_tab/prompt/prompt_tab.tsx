"use client";

import { Button, Card, Divider, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { SingletonStorage } from "~/client/SingletonStorage";
import { PromptTemplateDropDrown } from "./template_dropdown";

export const PromptTab = () => {
    const [text0, setText0] = useState("");
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    const [news, setNews] = useState("");
    const [tweetString, setTweetString] = useState("");

    const clientStorage = SingletonStorage.getInstance();    

    return (
        <Stack spacing={1}>
            <PromptTemplateDropDrown />
            <Button variant="contained" sx={{ backgroundColor: "#009688" }} onClick={() => {
                const tweets = clientStorage.selectedTweets;
                let tempString = ""
                if (tweets.size !== 0) {
                    for (const tweet of tweets) {
                        tempString = tempString + tweet?.rawcontent + ", ";
                        
                    }
                    tempString = tempString.slice(0, -2);
                }
                setTweetString(tempString);
                setNews(clientStorage.selectedNews);
                clientStorage.prompt.tweets = tempString;
            }}>
                Derive prompt
            </Button>
            <Divider />
            <TextField
                id="outlined-multiline-static"
                label="Prompt"
                multiline
                rows={4}
                value={text0}
                onChange={(e) => {
                    clientStorage.prompt.text0 = e.target.value ?? "";
                    setText0(e.target.value ?? "")
                }}
            />
            {news ? <Card>{news}</Card> : <p>No news selected</p>}

            <TextField
                id="outlined-multiline-static"
                label="Prompt"
                multiline
                rows={4}
                value={text1}
                onChange={(e) => {
                    clientStorage.prompt.text1 = e.target.value ?? "";
                    setText1(e.target.value ?? "")
                }}
            />
            {tweetString.length !== 0 ? <Card>{tweetString}</Card> : <p>No tweets selected</p>}
            <TextField
                id="outlined-multiline-static"
                label="Prompt"
                multiline
                rows={4}
                value={text2}
                onChange={(e) => {
                    clientStorage.prompt.text2 = e.target.value ?? "";
                    setText2(e.target.value ?? "")
                }}
            />
        </Stack>
    );
};
