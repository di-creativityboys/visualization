import { Grid, Box } from "@mui/material";
import React from "react";
import { db } from "~/server/db";
import { NewsStateHolder } from "./state_holder";

export default async function NewsTab() {
    const articles = await db.articles.findMany({
        orderBy: [
            {
                uploadtimestamp: "desc",
            },
        ],
    });

    return (
        <Box style={{ maxHeight: "90vh", overflow: "auto" }}>
            <Grid container spacing={2}>
                <NewsStateHolder articles={articles} />
            </Grid>
        </Box>
    );
}
