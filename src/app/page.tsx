import { Button, Card, CardActionArea, CardContent, CardMedia, Grid,  Typography } from "@mui/material";
// import styles from "./index.module.css";

import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

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

export default function Home() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        {/* Settings */}
        <Stack spacing={1} sx={{ py: 1 }}>
          <Stack direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
            sx={{ p: 1 }}>
            <Avatar alt="Remy Sharp" src="images/woman.jpg"></Avatar>
            <TextField id="outlined-basic" label="Twitter Username" variant="outlined" />
          </Stack>
          <Divider />
          <Stack spacing={1} sx={{ p: 1 }}>
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
      </Grid>
      <Grid item xs={6}>
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
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained">Generate</Button>
      </Grid>
    </Grid>
  );
}
