import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import React from "react";
import { type Article } from "~/types";

type ArticleCardProps = {
    article: Article;
};

export const ArticleCard = ({ article }: ArticleCardProps) => {
    const timestamp =
        article.uploadtimestamp?.toISOString() ??
        article.scrapingtimestamp.toISOString() + "(scraped)";

    return (
        <Card sx={{ display: "flex", maxHeight: "10vh" }}>
            <CardActionArea
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
                            variant="subtitle1"
                            color="text.secondary"
                            component="div"
                        >
                            {/* {article.content ?? ""} */}
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
