"use client";

import { Checkbox, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
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
        >
            <ListItemButton role={undefined} onClick={handleToggle()} dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={checked}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                    />
                </ListItemIcon>
                <ListItemText id={labelId} primary={tweetContent} />
            </ListItemButton>
        </ListItem>
    );
}
/*
secondaryAction={
                <IconButton edge="end" aria-label="comments">
                    <CommentIcon />
                </IconButton>
            }

<Card key={index} sx={{ minWidth: 275 }}>
    <CardActionArea>
        <CardContent>
        <Typography variant="body2">
            {tweet.body}
        </Typography>
        </CardContent>
    </CardActionArea>
</Card>

*/