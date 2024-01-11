import { Grid } from "@mui/material";
// import styles from "./index.module.css";

import SocialTab from "./components/social tab/social_tab";
import RecommendationPage from "./recommendation/recommendation";
import { Suspense } from "react";
import NewsPage from "./news/news";

export const dynamic = "force-dynamic";

export default function Home() {
    return (
        <Grid container spacing={2} mt={1} alignItems="stretch">
            <Grid item xs={3}>
                <SocialTab />
            </Grid>
            <Grid item xs={6}>
                <Suspense fallback={<div>Loading...</div>}>
                    <NewsPage />
                </Suspense>
            </Grid>
            <Grid item xs={3}>
                <RecommendationPage />
            </Grid>
        </Grid>
    );
}
