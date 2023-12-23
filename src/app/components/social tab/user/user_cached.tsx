"use client";

import React from "react";
import { Button, CircularProgress } from "@mui/material";
import { getCachedUser } from "./actions";
import { useFormStatus } from "react-dom";

type UserCachedProps = {
    username: string;
};

export const UserCached = ({ username }: UserCachedProps) => {
    return (
        <form action={getCachedUser} style={{width: "50%"}}>
            <input
                style={{ display: "none" }}
                type="text"
                name="user"
                readOnly
                value={username}
            />
            <SubmitButtonCached />
        </form>
    );
};

function SubmitButtonCached() {
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
                    Get cached
                </Button>
            )}
        </>
    );
}
