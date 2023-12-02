"use client";

import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import React from 'react'

interface MyType {
    value: number;
    tweetContent: string;
}

export default function TweetItem({ value, tweetContent }: MyType) {

    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const labelId = `checkbox-list-label-${value}`;

    return (
        <ListItem
            key={value}
            disablePadding
        >
            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={checked.indexOf(value) !== -1}
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