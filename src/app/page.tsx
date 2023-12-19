import { Grid } from "@mui/material";
// import styles from "./index.module.css";

import SocialTab from "./components/social tab/social_tab";
import NewsTab from "./components/news_tab";
import GenerateTab from "./components/generate_tab/generate_tab";
import ControlledAccordions from "./components/generate_tab/generate_new";

export const dynamic = "force-dynamic";

export default function Home() {

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <SocialTab />
                </Grid>
                <Grid item xs={6}>
                    {/* <NewsTab /> */}
                </Grid>
                <Grid item xs={3}>
                    {/* <GenerateTab /> */}
                    <ControlledAccordions />
                </Grid>
            </Grid>
        </>
    );
}
