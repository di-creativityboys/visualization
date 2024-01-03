import { Grid } from "@mui/material";
// import styles from "./index.module.css";

import SocialTab from "./components/social tab/social_tab";
// import NewsTab from "./components/news_tab/news_tab";
// import { Suspense } from "react";
import RecommendationPage from "./recommendation/recommendation";

export const dynamic = "force-dynamic";

export default function Home() {
    return (
        <Grid container spacing={2} mt={1} alignItems="stretch">
            <Grid item xs={3}>
                <SocialTab />
            </Grid>
            <Grid item xs={6}>
                {/* <Suspense fallback={<div>Loading...</div>}>
                    <NewsTab />
                </Suspense> */}
            </Grid>
            <Grid item xs={3}>
                <RecommendationPage />
            </Grid>
        </Grid>
    );
}
