"use client";

import * as React from "react";
import { Box, Grid } from "@mui/material";
import { type articles as Article } from "@prisma/client"
import { ArticleCard } from "./article_card";
import { useMyClientStore } from "~/client/client_store";

type MyProps = {
    children?: React.ReactNode;
    articles: Article[];
};

export default function ArticlesLayout({ articles }: MyProps) {
    const activeTopic = useMyClientStore((state) => state.activeTopic);

    let filteredArticles: Article[] = [];
    if (activeTopic != null) {
        filteredArticles = articles.filter((article) => article.clustertopic === activeTopic);
    }else {
        filteredArticles = articles;
    }
        

    return (
        <>
            <Box style={{ maxHeight: "82vh", overflow: "auto" }}>
                <Grid container spacing={2}>
                    {filteredArticles.map((myArticle, index) => {
                        return (
                            <Grid item key={index} xs={12}>
                                <ArticleCard
                                    article={myArticle}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </>
    );
}
