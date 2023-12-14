"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import { fetchUser } from "./actions";
import { CircularProgress } from "@mui/material";
import { SingletonStorage } from "~/client/SingletonStorage";

export const UserFetchForm = () => {
    return (
        <form action={fetchUser}>
            <input
                style={{display: "none"}}
                type="text"
                id="user"
                name="user"
                required
                value={SingletonStorage.getInstance().twitterUserName}
                onChange={(e) => {
                    SingletonStorage.getInstance().twitterUserName =
                        e.target.value;
                    console.log(SingletonStorage.getInstance().twitterUserName);
                }}
            />
            <SubmitButton />
        </form>
    );
};

export function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <>
            <button type="submit" aria-disabled={pending} disabled={pending}>
                Fetch
            </button>
            {pending ? <CircularProgress /> : <span></span>}
        </>
    );
}
