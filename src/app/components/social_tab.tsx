import { Avatar, Button, Card, CardActionArea, CardContent, Divider, Stack, TextField, Typography } from '@mui/material'
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

const SocialTab = () => {
  return (
    <Stack spacing={1} sx={{px: 1}}>
      <Stack direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}>
        <Avatar alt="Remy Sharp" src="images/woman.jpg"></Avatar>
        <TextField id="outlined-basic" label="Twitter Username" variant="outlined" sx={{flexGrow: 1}}/>
      </Stack>
      <Button variant="contained">Scrape Tweets</Button>
      <Divider />
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
      </Stack>
    </Stack>
  )
}

export default SocialTab