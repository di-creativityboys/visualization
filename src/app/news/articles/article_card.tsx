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

type ArticleCardProps = {
    article: Article;
    activeCard: number;
    setActiveCard: (newValue: number) => void;
};

export const ArticleCard = ({
    article,
    activeCard,
    setActiveCard,
}: ArticleCardProps) => {
    const isActiveCard = activeCard == article.id;

    const timestamp =
        article.uploadtimestamp?.toISOString() ??
        article.scrapingtimestamp.toISOString() + "(scraped)";

    return (
        <Card
            sx={{
                display: "flex",
                maxHeight: "10vh",
                backgroundColor: isActiveCard ? "#aaa" : null,
            }}
        >
            <CardActionArea
                onClick={(_) => {
                    setActiveCard(article.id);
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
                        <Typography variant="subtitle2" color="text.secondary">
                            {timestamp} from {article.source ?? ""}
                        </Typography>
                    </CardContent>
                </Box>
            </CardActionArea>
        </Card>
    );
};
