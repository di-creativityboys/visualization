import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

const tweets = [
  {
    "body": "Lorem hello ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores ",
    "published": "",
  },
  {
    "body": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores ",
    "published": "",
  },
]

const NewsTab = () => {
  return (
    <Grid container spacing={2}>
      {tweets.concat(tweets).concat(tweets).concat(tweets).concat(tweets).map((tweet, index) => (
        <Grid item key={index} xs={6}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/images/woman.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {tweet.body}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default NewsTab