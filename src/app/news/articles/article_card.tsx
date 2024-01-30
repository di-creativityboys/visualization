import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import React from "react";
import { SingletonStorage } from "~/client/SingletonStorage";
import { type articles as Article } from "@prisma/client";
import { useMyClientStore } from "~/client/client_store";

type ArticleCardProps = {
    article: Article;
};

export const ArticleCard = ({ article }: ArticleCardProps) => {
    const activeArticle = useMyClientStore((state) => state.activeArticle);
    const setActiveArticle = useMyClientStore(
        (state) => state.setActiveArticle
    );

    const isActiveCard: boolean = activeArticle === article.urlid;

    let timestamp =
        article.uploadtimestamp?.toISOString() ??
        article.scrapingtimestamp.toISOString();
    try {
        timestamp = new Date(timestamp).toLocaleDateString("en-US", {
            // weekday: "long",
            year: "numeric",
            month: "long",
            day: "2-digit",
            hour: "numeric",
            minute: "numeric",
        });
    } catch (error) {
        timestamp =
            article.uploadtimestamp?.toISOString() ??
            article.scrapingtimestamp.toISOString() + "(scraped)";
    }

    return (
        <Card
            sx={{
                display: "flex",
                maxHeight: "10vh",
                backgroundColor: isActiveCard ? "#607D8B" : null,
                transition: "300ms",
                color: isActiveCard ? "white" : null,
            }}
        >
            <CardActionArea
                onClick={(_) => {
                    setActiveArticle(article.urlid);
                    SingletonStorage.getInstance().selectedArticle = article;
                }}
                sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "strecht",
                }}
            >
                {article.imageurl != null ? (
                    <CardMedia
                        component="img"
                        sx={{ width: 151, height: "100%" }}
                        image={article.imageurl}
                        alt="Image description"
                    />
                ) : (
                    ""
                )}

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <CardContent>
                        <Typography component="div" variant="h5">
                            {article.headline ?? ""}
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            sx={{
                                color: isActiveCard ? "white" : null,
                            }}
                        >
                            {timestamp} from {article.source ?? ""}
                        </Typography>
                    </CardContent>
                </Box>
            </CardActionArea>
        </Card>
    );
};
