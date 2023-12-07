import { Divider, Stack } from '@mui/material'
import React from 'react'
import TweetList from './tweet_list'
import { UserSelectForm } from './user_select';

const SocialTab = () => {
  return (
    <Stack spacing={1} sx={{ px: 1 }}>
      <UserSelectForm />
      <Divider />
      <TweetList/>
      {/*
      <Stack spacing={1} sx={{ pl: 4 }}>
        {tweets.map((tweet, index) => (
          <Card key={index} sx={{ minWidth: 275 }}>
            <CardActionArea>
              <CardContent>
                <Typography variant="body2">
                  {tweet.body}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
        </Stack>**/}
    </Stack>
  )
}

export default SocialTab