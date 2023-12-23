import { Grid } from "@mui/material";
import { Suspense } from "react";
import { ArticleFull } from "./components/article_full";

export default function Page() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
                <Suspense fallback={<div>Loading...</div>}>
                    <ArticleFull />
                </Suspense>
            </Grid>
            <Grid item xs={2}></Grid>
        </Grid>
    );
}
