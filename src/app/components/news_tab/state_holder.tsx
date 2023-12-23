"use client";

import { Grid } from "@mui/material";
import React from "react";
import { SingletonStorage } from "~/client/SingletonStorage";
import { type Article } from "~/types";
import { ArticleCard } from "./article_card";

type NewsStateHolderProps = {
    articles: [];
};

export const NewsStateHolder = ({ articles }: NewsStateHolderProps) => {
    const storage = SingletonStorage.getInstance();

    const [checkedNewsId, setCheckedNewsId] = React.useState(
        storage.selectedArticle?.urlid ?? ""
    );
    return (
        <>
            {articles.map((myArticle, index) => {
                return (
                    <Grid item key={index} xs={12}>
                        <ArticleCard article={myArticle} />
                    </Grid>
                );
            })}
        </>
    );
};
