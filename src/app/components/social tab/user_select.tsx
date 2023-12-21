"use client";

import React, { useState } from "react";
import { useFormStatus } from "react-dom";
import { getCachedUser, fetchUser } from "./actions";
import {
    Button,
    CircularProgress,
    TextField,
    Stack,
    Avatar,
} from "@mui/material";
import { SingletonStorage } from "~/client/SingletonStorage";

export const UserSelectForm = () => {
    const [username, setUsername] = useState("");

    return (
        <>
            <form action={getCachedUser} id="getCachedUserForm">
                <input
                    style={{ display: "none" }}
                    type="text"
                    // id="user"
                    name="user"
                    value={username}
                />
                <form action={fetchUser} id="fetchUserForm">
                    <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={2}
                    >
                        <Avatar
                            alt="Remy Sharp"
                            src="images/woman.jpg"
                        ></Avatar>
                        <TextField
                            id="user"
                            name="user"
                            type="text"
                            required
                            label="Twitter Username"
                            variant="outlined"
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value);
                                SingletonStorage.getInstance().twitterUserName =
                                    e.target.value;
                                console.log(
                                    SingletonStorage.getInstance()
                                        .twitterUserName
                                );
                            }}
                            sx={{ flexGrow: 1}}
                        />
                    </Stack>
                    
                    <Stack
                        direction="row"
                        justifyContent="space-evenly"
                        alignItems="center"
                        spacing={1}
                        mt="8px"
                    >
                        <SubmitButtonCached />
                        <SubmitButtonFetch />
                    </Stack>
                </form>
            </form>
        </>
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
                    form="getCachedUserForm"
                    aria-disabled={pending}
                    disabled={pending}
                    fullWidth
                >
                    Get cached
                </Button>
            )}
        </>
    );
}

function SubmitButtonFetch() {
    const { pending } = useFormStatus();

    return (
        <>
            {pending ? (
                null
            ) : (
                <Button
                    variant="contained"
                    type="submit"
                    form="fetchUserForm"
                    aria-disabled={pending}
                    disabled={pending}
                    fullWidth
                >
                    Fetch
                </Button>
            )}
        </>
    );
}
