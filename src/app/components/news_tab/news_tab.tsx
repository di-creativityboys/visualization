import {
    Grid,
    Box,
} from "@mui/material";
import React from "react";
import { db } from "~/server/db";
import { ArticleCard } from "./article_card";

export default async function NewsTab() {
    const articles = await db.articles.findMany({
        orderBy: [
            {
                uploadtimestamp: "desc",
            },
        ],
    });

    return (
        <Box style={{ maxHeight: "89vh", overflow: "auto" }}>
            <Grid container spacing={2}>
                {articles.map((myArticle, index) => {
                    return (
                        <Grid item key={index} xs={12}>
                            <ArticleCard article={myArticle} />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}
