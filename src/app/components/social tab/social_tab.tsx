import { Stack } from "@mui/material";
import React, { Suspense } from "react";
import { TweetList } from "./tweets/tweet_list";
import { UserSelect } from "./user/user_select";

const SocialTab = ({userParam}:{userParam: string;}) => {
    return (
        <Stack spacing={1} sx={{ px: 1 }}>
            <UserSelect />
            <Suspense fallback={<div>Loading...</div>}>
                <TweetList userParam={userParam}/>
            </Suspense>
        </Stack>
    );
};

export default SocialTab;
