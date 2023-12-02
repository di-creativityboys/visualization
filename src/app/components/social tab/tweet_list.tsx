import { List } from '@mui/material';
import React from 'react'
import { db } from '~/server/db'
import TweetItem from './tweet_item';

export default async function TweetList() {
  const tweets = await db.tweets.findMany({
    orderBy: [
      {
        publishdatetime: 'desc',
      },
    ],
  });

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {tweets.map((tweet) => {
        const myId = Number(tweet.id);
        return (
          <TweetItem key={tweet.id} value={myId} tweetContent={tweet.rawcontent ?? "no content"}/>
        );
      })}
    </List>
  );
}