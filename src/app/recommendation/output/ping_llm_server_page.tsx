import { Stack } from "@mui/material";
import { useWebSocketStore } from "~/client/client_store";
import { pingLLMServer } from "./ping";

export const PingLLMServerPage = () => {
    const homeServerStatus = useWebSocketStore.getState().homeServerStatus;
    const uniServerStatus = useWebSocketStore.getState().uniServerStatus;

    pingLLMServer();

    return (
        <>
            <Stack spacing={1} direction="row">
                <p>Home Server</p>
                <p>{homeServerStatus}</p>
            </Stack>
            <Stack spacing={1} direction="row">
                <p>Uni Server</p>
                <p>{uniServerStatus}</p>
            </Stack>
        </>
    );
};
