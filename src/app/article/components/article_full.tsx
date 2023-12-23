/* eslint-disable @next/next/no-img-element */
import { Grid } from "@mui/material";
import React from "react";
import { db } from "~/server/db";

type ArticleFullProps = {
    articleId: string;
};

export const ArticleFull = async ({ articleId }: ArticleFullProps) => {
    const article = await db.articles.findFirst({
        where: {
            urlid: articleId,
        },
    });

    return (
        <>
            {article?.imageurl != null ? (
                <img
                    src={article?.imageurl}
                    alt={article?.headline ?? "No alt possible"}
                    style={{
                        width: "100%",
                        height: "500px",
                        objectFit: "cover",
                        position: "absolute",
                        zIndex: "-1",
                    }}
                />
            ) : null}
            <Grid
                container
                spacing={2}
                style={{ position: "relative", marginTop: "400px" }}
            >
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                    <h1 style={{ backgroundColor: "white" }}>{article?.headline}</h1>
                    <br />
                    <br />
                    <article style={{ backgroundColor: "white" }}>
                        <div style={{ display: "flex" }}>
                            <h2>{article?.authors}</h2>
                            <h3>{article?.source}</h3>
                            <h3>{article?.scrapingtimestamp.toString()}</h3>
                            <h3>{article?.uploadtimestamp?.toString()}</h3>
                        </div>
                        <h2>{article?.urlid}</h2>
                        <p>{article?.content}</p>
                    </article>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        </>
    );
};
