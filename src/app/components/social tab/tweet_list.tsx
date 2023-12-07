import { Divider, List, Paper } from '@mui/material';
import React from 'react'
import { db } from '~/server/db'
import TweetItem from './tweet_item';
import { SingletonStorage } from '~/client/SingletonStorage';

export default async function TweetList() {
  console.log("in tweet list")
  console.log(SingletonStorage.getInstance().twitterUserName)
  const tweets = await db.tweets.findMany({
    // where: {
    //   tweetuser: {
    //     equals: SingletonStorage.getInstance().twitterUserName,
    //   }
    // },
    orderBy: [
      {
        publishdatetime: 'desc',
      },
    ],
  });

  return (
    <Paper style={{ maxHeight: "85vh", overflow: "auto" }}>
      <List sx={{ width: '100%' }}>
        {tweets.map((tweet) => {
          const myId = Number(tweet.id);
          return (
            <>
              <TweetItem key={tweet.id} tweetId={myId} tweetContent={tweet.rawcontent ?? "no content"} />
              <Divider variant="inset" component="li" />
            </>
          );
        })}
      </List>
    </Paper>
  );
}