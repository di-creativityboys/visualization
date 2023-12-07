"use client";

import { Avatar, Checkbox, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from '@mui/material';
import React from 'react'
import { SingletonStorage } from '~/client/SingletonStorage';

interface MyType {
    tweetId: number;
    tweetContent: string;
}

export default function TweetItem({ tweetId, tweetContent }: MyType) {

    const [checked, setChecked] = React.useState(false);

    const handleToggle = () => () => {
        const storage = SingletonStorage.getInstance();
        const tweets = storage.selectedTweets;
        let newChecked = false;

        if (tweets.has(tweetId)) {
            tweets.delete(tweetId);
            newChecked = false;
        } else {
            tweets.add(tweetId);
            newChecked = true;
        }

        setChecked(newChecked);
        console.log(storage.selectedTweets);
    };

    const labelId = `checkbox-list-label-${tweetId}`;

    return (
        <ListItem
            key={tweetId}
            disablePadding
            alignItems="flex-start"
            sx={{
                backgroundColor: checked ? "#607D8B" : "",
                transition: "300ms",
                color: checked ? "white" : ""
            }}
        >
            <ListItemButton
                role={undefined}
                onClick={handleToggle()}
                dense
                alignItems='flex-start'

                sx={{}}
            >

                <ListItemAvatar>
                    <Avatar src="images/woman.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                        <Typography
                            sx={{ color: checked ? "white" : "", fontSize: "0.8rem" }}>
                            {tweetContent}
                        </Typography>}
                    sx={{
                        color: checked ? "white" : "",
                        accentColor: "white",
                        textDecorationColor: "white"
                    }}

                />
                <Checkbox
                    edge="start"
                    checked={checked}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                    sx={{
                        color: "#009688",
                        '&.Mui-checked': {
                            color: "white",
                        },
                    }}
                />
            </ListItemButton>
        </ListItem>
    );
}