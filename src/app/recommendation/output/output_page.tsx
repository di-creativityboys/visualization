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
import { openWebSocket, queryLLM } from "./llm";
import { SingletonStorage } from "~/client/SingletonStorage";
import { LanguageModel, WebSocketState } from "~/types";
import { useWebSocketStore } from "~/client/client_store";
import { PingLLMServerPage } from "./ping_llm_server_page";
import { pingLLMServer } from "./ping";

export const OutputTab = () => {
    const response = useWebSocketStore((state) => state.response);
    const webSocketState = useWebSocketStore((state) => state.websocket_state);

    const [languageModel, setLanguageModel] = useState(
        LanguageModel.llama_7b_chat
    );

    function recommend() {
        const prompt =
            (SingletonStorage.getInstance().prompt.text0 ?? "") +
            (SingletonStorage.getInstance().prompt.news ?? "") +
            (SingletonStorage.getInstance().prompt.text1 ?? "") +
            (SingletonStorage.getInstance().prompt.tweets ?? "") +
            (SingletonStorage.getInstance().prompt.text2 ?? "");

        queryLLM({ prompt, languageModel });
    }

    openWebSocket();

    const setHomeServerStatus = useWebSocketStore.getState().setHomeServerStatus;
    const setUniServerStatus = useWebSocketStore.getState().setUniServerStatus;
    pingLLMServer({name: "home", statusFunction: setHomeServerStatus, address: "ws://asdufsfd.dynv6.net:5000"});
    pingLLMServer({name: "uni", statusFunction: setUniServerStatus, address: "ws://asdufsfd.dynv6.net:5001"});

    return (
        <Stack spacing={1}>
            <PingLLMServerPage />
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
                value={response}
            />
            <Button
                variant="contained"
                disabled={true}
                sx={{ backgroundColor: "#009688" }}
            >
                Post to X
            </Button>
        </Stack>
    );
};
