import { Grid, } from "@mui/material";
// import styles from "./index.module.css";

import SocialTab from "./components/social_tab";
import NewsTab from "./components/news_tab";
import GenerateTab from "./components/generate_tab";


export default function Home() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        {/* Settings */}
        <SocialTab />
      </Grid>
      <Grid item xs={6}>
        <NewsTab />
      </Grid>
      <Grid item xs={3}>
        <GenerateTab />
      </Grid>
    </Grid>
  );
}
