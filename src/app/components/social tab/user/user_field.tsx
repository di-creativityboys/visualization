"use client";

import { Avatar, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { SingletonStorage } from "~/client/SingletonStorage";
import { UserFetch } from "./user_fetch";
import { UserCached } from "./user_cached";

export const UserField = () => {
    const [username, setUsername] = useState(
        SingletonStorage.getInstance().twitterUserName
    );

    return (
        <>
            <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
            >
                <Avatar alt="Remy Sharp" src="images/woman.jpg"></Avatar>
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
                            SingletonStorage.getInstance().twitterUserName
                        );
                    }}
                    sx={{ flexGrow: 1 }}
                />
            </Stack>
            <Stack
                direction="row"
                alignItems="stretch"
                spacing={1}
            >
                <UserFetch username={username} />
                <UserCached username={username} />
            </Stack>
        </>
    );
};
