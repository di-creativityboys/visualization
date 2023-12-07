"use client";

import React from 'react'
import { useFormStatus } from 'react-dom';
import { createUser } from './actions';
import { CircularProgress } from '@mui/material';
import { SingletonStorage } from '~/client/SingletonStorage';

export const UserSelectForm = () => {

    return (
        <form action={createUser}>
            <label htmlFor="user">Enter Username</label>
            <input
                type="text"
                id="user"
                name="user"
                required 
                //value={username}
                onChange={(e) => {
                    SingletonStorage.getInstance().twitterUserName = e.target.value;
                    console.log(SingletonStorage.getInstance().twitterUserName)
                }}
                />
            <SubmitButton />
        </form>
    )
}

export function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <>
            <button type="submit" aria-disabled={pending} disabled={pending} >
                Add
            </button>
            {pending
                ? <CircularProgress />
                : <span></span>
            }
        </>
    )
}

/*
const [username, setUsername] = useState("");

    function scrapeTweets() {
        const storage = SingletonStorage.getInstance();
        storage.twitterUserName = username;
    }

return (
        <>
            <Stack direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}>
                <Avatar alt="Remy Sharp" src="images/woman.jpg"></Avatar>
                <TextField
                    id="outlined-basic"
                    label="Twitter Username"
                    variant="outlined"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    sx={{ flexGrow: 1 }} />
            </Stack>
            <Button variant="contained" onClick={scrapeTweets}>Scrape Tweets</Button>
        </>
    )
*/