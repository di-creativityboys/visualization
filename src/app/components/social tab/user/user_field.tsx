"use client";

import { Avatar, Stack, TextField } from "@mui/material";
import React from "react";
import { UserFetch } from "./user_fetch";
import { UserCached } from "./user_cached";
import { useMyClientStore } from "~/client/client_store";

export const UserField = () => {
    const activeUser = useMyClientStore((state) => state.activeUser);
    const setActiveUser = useMyClientStore((state) => state.setActiveUser);

    return (
        <>
            <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
            >
                <Avatar alt="Remy Sharp" src={activeUser?.avatar ?? "images/woman.jpg"}></Avatar>
                <TextField
                    id="user"
                    name="user"
                    type="text"
                    required
                    label="Twitter Username"
                    variant="outlined"
                    value={activeUser?.username}
                    onChange={(e) => {
                        setActiveUser({username: e.target.value, avatar: null});
                    }}
                    sx={{ flexGrow: 1 }}
                />
            </Stack>
            <Stack
                direction="row"
                alignItems="stretch"
                spacing={1}
            >
                <UserFetch username={activeUser?.username ?? ""} />
                <UserCached username={activeUser?.username ?? ""} />
            </Stack>
        </>
    );
};
