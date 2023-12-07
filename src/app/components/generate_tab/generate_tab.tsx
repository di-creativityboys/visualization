"use client";

import { Button, CircularProgress, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { openWebSocket, queryLLM, registerWebSocketStateFunction } from './llm';

export enum WebSocketState {
    Ready,
    Calculating,
    Disconnected
}

export enum LanguageModel {
    llama_7b_chat = "llama_7b_chat",
    llama_13b_chat = "llama_13b_chat"
}

const GenerateTab = () => {

    const [prompt, setPrompt] = useState("");
    const [output, setOutput] = useState("");
    const [webSocketState, setWebSocketState] = useState(WebSocketState.Disconnected);
    const [languageModel, setLanguageModel] = useState(LanguageModel.llama_7b_chat);

    function responseFunction(response: string) {
        console.log("RESPONSE!");
        setOutput(response);
    }

    function recommend() {
        queryLLM(prompt, languageModel, responseFunction);

        return;
    }

    registerWebSocketStateFunction(setWebSocketState);
    openWebSocket();

    return (
        <Stack spacing={1} sx={{ px: 1 }}>
            <Button
                variant="contained"
                sx={{ backgroundColor: "#009688" }}>
                Derive prompt
            </Button>
            <TextField
                id="outlined-multiline-static"
                label="Prompt"
                multiline
                rows={12}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value ?? "")}
            />
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Language Model</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={languageModel}
                    label="Language Model"
                    onChange={(e) => setLanguageModel(e.target.value === "llama_7b_chat" ? LanguageModel.llama_7b_chat : LanguageModel.llama_13b_chat)}
                >
                    <MenuItem value={LanguageModel.llama_7b_chat}>llama_7b_chat</MenuItem>
                    <MenuItem value={LanguageModel.llama_13b_chat}>llama_13b_chat</MenuItem>
                </Select>
            </FormControl>
            <Button
                variant="contained"
                sx={{ backgroundColor: "#009688" }}
                onClick={recommend}
                disabled={webSocketState != WebSocketState.Ready}>
                Recommend Tweet
                {webSocketState == WebSocketState.Calculating

                    ? <CircularProgress />
                    : <span></span>
                }</Button>
            <span>this may take a while</span>

            <TextField
                id="recommend_tweet_output"
                label="Your Tweet"
                multiline
                rows={10}
                value={output}
            />
            <Button
                variant="contained"
                sx={{ backgroundColor: "#009688" }}
            >
                Post to X
            </Button>
        </Stack>
    )
}

export default GenerateTab