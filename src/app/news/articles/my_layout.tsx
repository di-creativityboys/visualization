"use client";

import * as React from "react";
import { Box, Grid } from "@mui/material";
import { type articles as Article } from "@prisma/client"
import { ArticleCard } from "./article_card";

type MyProps = {
    children?: React.ReactNode;
    articles: Article[];
};

export default function ArticlesLayout({ articles }: MyProps) {
    const [activeCard, setActiveCard] = React.useState(0);

    return (
        <>
            <Box style={{ maxHeight: "82vh", overflow: "auto" }}>
                <Grid container spacing={2}>
                    {articles.map((myArticle, index) => {
                        return (
                            <Grid item key={index} xs={12}>
                                <ArticleCard
                                    article={myArticle}
                                    activeCard={activeCard}
                                    setActiveCard={setActiveCard}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </>
    );
}
