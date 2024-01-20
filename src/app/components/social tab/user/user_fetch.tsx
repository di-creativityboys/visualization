"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import { fetchUser } from "./actions";
import { Button, CircularProgress } from "@mui/material";
import { useMyClientStore } from "~/client/client_store";

type UserFetchProps = {
    username: string;
};

export const UserFetch = ({ username }: UserFetchProps) => {

    const apiVersion = useMyClientStore((state) => state.apiVersion);

    return (
        <form action={fetchUser} style={{width: "50%"}}>
            <input
                style={{ display: "none" }}
                type="text"
                name="user"
                readOnly
                value={username}
            />
            <input
                style={{ display: "none" }}
                type="number"
                name="apiVersion"
                readOnly
                value={apiVersion}
            />
            <SubmitButtonFetch />
        </form>
    );
};

function SubmitButtonFetch() {
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
                    fullWidth
                    sx={{ backgroundColor: "#009688" }}
                >
                    Fetch
                </Button>
            )}
        </>
    );
}
