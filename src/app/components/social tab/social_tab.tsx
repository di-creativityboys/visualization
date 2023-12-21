import { Stack } from "@mui/material";
import React from "react";
import { TweetList } from "./tweet_list";
import { UserSelectForm } from "./user_select";

const SocialTab = () => {
    return (
        <Stack spacing={1} sx={{ px: 1 }}>
            <UserSelectForm />
            <TweetList />
        </Stack>
    );
};

export default SocialTab;
