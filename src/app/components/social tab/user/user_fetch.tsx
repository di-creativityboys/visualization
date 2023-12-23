"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import { fetchUser } from "./actions";
import { Button, CircularProgress } from "@mui/material";

type UserFetchProps = {
    username: string;
};

export const UserFetch = ({ username }: UserFetchProps) => {
    return (
        <form action={fetchUser} style={{width: "50%"}}>
            <input
                style={{ display: "none" }}
                type="text"
                name="user"
                readOnly
                value={username}
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
