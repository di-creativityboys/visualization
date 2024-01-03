"use client";

import {
    Button,
    Card,
    CircularProgress,
    Divider,
    Stack,
    TextField,
} from "@mui/material";
import { useState } from "react";
import { SingletonStorage } from "~/client/SingletonStorage";
import { type Prompt } from "~/types";
import { addPromptTemplate } from "./action";
import { useFormStatus } from "react-dom";

type MyProps = {
    prompt: Prompt;
};

export const PromptTab = ({ prompt }: MyProps) => {
    const [text0, setText0] = useState(prompt.text0);
    const [text1, setText1] = useState(prompt.text1);
    const [text2, setText2] = useState(prompt.text2);
    const [article, setArticle] = useState(prompt.news);
    const [tweetString, setTweetString] = useState(prompt.tweets);

    const [newTemplateName, setNewTemplateName] = useState("");

    const clientStorage = SingletonStorage.getInstance();

    return (
        <Stack spacing={1}>
            <Button
                variant="contained"
                sx={{ backgroundColor: "#009688" }}
                onClick={() => {
                    const tweets = clientStorage.selectedTweets;
                    let tempString = "";
                    if (tweets.size !== 0) {
                        for (const tweet of tweets) {
                            tempString = tempString + tweet?.rawcontent + ", ";
                        }
                        tempString = tempString.slice(0, -2);
                    }
                    setTweetString(tempString);
                    setArticle(clientStorage.selectedArticle?.content ?? "");
                    clientStorage.prompt.tweets = tempString;
                }}
            >
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
                    setText0(e.target.value ?? "");
                }}
            />
            {article ? <Card>{article}</Card> : <p>No news selected</p>}

            <TextField
                id="outlined-multiline-static"
                label="Prompt"
                multiline
                rows={4}
                value={text1}
                onChange={(e) => {
                    clientStorage.prompt.text1 = e.target.value ?? "";
                    setText1(e.target.value ?? "");
                }}
            />
            {tweetString.length !== 0 ? (
                <Card>{tweetString}</Card>
            ) : (
                <p>No tweets selected</p>
            )}
            <TextField
                id="outlined-multiline-static"
                label="Prompt"
                multiline
                rows={4}
                value={text2}
                onChange={(e) => {
                    clientStorage.prompt.text2 = e.target.value ?? "";
                    setText2(e.target.value ?? "");
                }}
            />

            <form action={addPromptTemplate}>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="stretch"
                >
                    <TextField
                        id="outlined-multiline-static-template"
                        label="New Template Name"
                        multiline
                        value={newTemplateName}
                        name="name"
                        onChange={(e) => {
                            setNewTemplateName(e.target.value ?? "");
                        }}
                        required
                    />
                    <input
                        style={{ display: "none" }}
                        type="text"
                        name="text0"
                        readOnly
                        value={text0}
                    />
                    <input
                        style={{ display: "none" }}
                        type="text"
                        name="text1"
                        readOnly
                        value={text1}
                    />
                    <input
                        style={{ display: "none" }}
                        type="text"
                        name="text2"
                        readOnly
                        value={text2}
                    />
                    <SubmitButton />
                </Stack>
            </form>
        </Stack>
    );
};

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <>
            {pending ? (
                <CircularProgress />
            ) : (
                <Button
                    variant="contained"
                    type="submit"
                    aria-disabled={pending}
                    disabled={pending}
                    sx={{ backgroundColor: "#009688" }}
                >
                    Create template
                </Button>
            )}
        </>
    );
}
