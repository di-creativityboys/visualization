import {
    Button,
    CircularProgress,
    FormControl,
    InputLabel,
    Select,
    Stack,
    TextField,
    MenuItem,
} from "@mui/material";
import { useState } from "react";
import {
    openWebSocket,
    queryLLM,
    registerWebSocketStateFunction,
} from "../llm";
import { SingletonStorage } from "~/client/SingletonStorage";

export enum WebSocketState {
    Ready,
    Calculating,
    Disconnected,
}

export enum LanguageModel {
    llama_7b_chat = "llama_7b_chat",
    llama_13b_chat = "llama_13b_chat",
}

export const OutputTab = () => {
    const [output, setOutput] = useState("");
    const [webSocketState, setWebSocketState] = useState(
        WebSocketState.Disconnected
    );
    const [languageModel, setLanguageModel] = useState(
        LanguageModel.llama_7b_chat
    );

    function responseFunction(response: string) {
        console.log("RESPONSE!");
        setOutput(response);
    }

    function recommend() {
        const prompt =
            (SingletonStorage.getInstance().prompt.text0 ?? "") +
            (SingletonStorage.getInstance().prompt.news ?? "") +
            (SingletonStorage.getInstance().prompt.text1 ?? "") +
            (SingletonStorage.getInstance().prompt.tweets ?? "") +
            (SingletonStorage.getInstance().prompt.text2 ?? "");

        queryLLM(prompt, languageModel, responseFunction);

        return;
    }

    registerWebSocketStateFunction(setWebSocketState);
    openWebSocket();

    return (
        <Stack spacing={1}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                    Language Model
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={languageModel}
                    label="Language Model"
                    onChange={(e) =>
                        setLanguageModel(
                            e.target.value === "llama_7b_chat"
                                ? LanguageModel.llama_7b_chat
                                : LanguageModel.llama_13b_chat
                        )
                    }
                >
                    <MenuItem value={LanguageModel.llama_7b_chat}>
                        llama_7b_chat
                    </MenuItem>
                    <MenuItem value={LanguageModel.llama_13b_chat}>
                        llama_13b_chat
                    </MenuItem>
                </Select>
            </FormControl>
            <Button
                variant="contained"
                sx={{ backgroundColor: "#009688" }}
                onClick={recommend}
                disabled={webSocketState != WebSocketState.Ready}
            >
                Recommend Tweet
                {webSocketState == WebSocketState.Calculating ? (
                    <CircularProgress />
                ) : (
                    <span></span>
                )}
            </Button>
            <span>this may take a while</span>

            <TextField
                id="recommend_tweet_output"
                label="Your Tweet"
                multiline
                rows={10}
                value={output}
            />
            <Button variant="contained" sx={{ backgroundColor: "#009688" }}>
                Post to X
            </Button>
        </Stack>
    );
};
