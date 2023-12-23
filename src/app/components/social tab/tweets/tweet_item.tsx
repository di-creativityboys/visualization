"use client";

import {
    Avatar,
    Checkbox,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    Typography,
} from "@mui/material";
import React from "react";
import { SingletonStorage } from "~/client/SingletonStorage";
import { type Tweet } from "~/types";

interface TweetItemProps {
    tweet: Tweet;
}

export default function TweetItem({ tweet }: TweetItemProps) {
    const storage = SingletonStorage.getInstance();

    const [checked, setChecked] = React.useState(storage.selectedTweets.has(tweet));

    const handleToggle = () => () => {
        
        const tweets = storage.selectedTweets;
        let newChecked = false;

        if (tweets.has(tweet)) {
            tweets.delete(tweet);
            newChecked = false;
        } else {
            tweets.add(tweet);
            newChecked = true;
        }

        setChecked(newChecked);
        console.log(storage.selectedTweets);
    };

    const labelId = `checkbox-list-label-${tweet.id}`;

    return (
        <ListItem
            key={tweet.id}
            disablePadding
            alignItems="flex-start"
            sx={{
                backgroundColor: checked ? "#607D8B" : "",
                transition: "300ms",
                color: checked ? "white" : "",
            }}
        >
            <ListItemButton
                role={undefined}
                onClick={handleToggle()}
                dense
                alignItems="flex-start"
                sx={{}}
            >
                <ListItemAvatar>
                    <Avatar src="images/woman.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                        <Typography
                            sx={{
                                color: checked ? "white" : "",
                                fontSize: "0.8rem",
                            }}
                        >
                            {tweet.rawcontent}
                        </Typography>
                    }
                    sx={{
                        color: checked ? "white" : "",
                        accentColor: "white",
                        textDecorationColor: "white",
                    }}
                />
                <Checkbox
                    edge="start"
                    checked={checked}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                    sx={{
                        color: "#009688",
                        "&.Mui-checked": {
                            color: "white",
                        },
                    }}
                />
            </ListItemButton>
        </ListItem>
    );
}
