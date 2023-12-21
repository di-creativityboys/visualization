"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import { fetchUser } from "./actions";
import { Button, CircularProgress, Stack } from "@mui/material";
import { SingletonStorage } from "~/client/SingletonStorage";

export const UserFetchForm = () => {
    return (
        <form action={fetchUser}>
            <Stack
                direction="row"
                justifyContent="stretch"
                alignItems="center"
                spacing={2}
            >
                <input
                    style={{ display: "none" }}
                    type="text"
                    id="user"
                    name="user"
                    required
                    value={SingletonStorage.getInstance().twitterUserName}
                    onChange={(e) => {
                        SingletonStorage.getInstance().twitterUserName =
                            e.target.value;
                        console.log(
                            SingletonStorage.getInstance().twitterUserName
                        );
                    }}
                />
                <SubmitButton />
            </Stack>
        </form>
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
                >
                    Fetch
                </Button>
            )}
        </>
    );
}
