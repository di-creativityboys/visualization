"use client";

import { Stack } from "@mui/material";
import { useWebSocketStore } from "~/client/client_store";
import { WebSocketState } from "~/types";

export const PingLLMServerPage = () => {
    "use client";

    const homeServerStatus = useWebSocketStore(
        (state) => state.homeServerStatus
    );
    const uniServerStatus = useWebSocketStore((state) => state.uniServerStatus);

    return (
        <>
            <Stack spacing={1} direction="row">
                <p>Home Server</p>
                <p>{WebSocketState[homeServerStatus]}</p>
            </Stack>
            <Stack spacing={1} direction="row">
                <p>Uni Server</p>
                <p>{WebSocketState[uniServerStatus]}</p>
            </Stack>
            <br />
        </>
    );
};
