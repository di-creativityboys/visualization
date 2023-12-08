import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    Paper,
    Typography,
} from "@mui/material";
import React from "react";
import { db } from "~/server/db";

export default async function NewsTab() {
    const articles = await db.articles.findMany({
        orderBy: [
            {
                uploadtimestamp: "desc",
            },
        ],
    });

    return (
        <Paper style={{ maxHeight: "89vh", overflow: "auto" }}>
            <Grid container spacing={2}>
                {articles.map((myArticle, index) => {
                    myArticle.headline =
                        myArticle.headline?.substring(0, 125) + "..." ?? "";
                    myArticle.content =
                        myArticle.content?.substring(0, 200) + "..." ?? "";
                    const timestamp =
                        myArticle.uploadtimestamp?.toISOString() ??
                        myArticle.scrapingtimestamp.toISOString() + "(scraped)";
                    return (
                        <Grid item key={index} xs={12}>
                            <Card sx={{ display: "flex" }}>
                                <CardActionArea
                                    sx={{
                                        display: "flex",
                                        justifyContent: "flex-start",
                                        alignItems: "strecht",
                                    }}
                                >
                                    {myArticle.imageurl != null ? (
                                        <CardMedia
                                            component="img"
                                            sx={{ width: 151, height: "100%" }}
                                            image={myArticle.imageurl}
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
                                            <Typography
                                                component="div"
                                                variant="h5"
                                            >
                                                {myArticle?.headline ?? ""}
                                            </Typography>
                                            <Typography
                                                variant="subtitle1"
                                                color="text.secondary"
                                                component="div"
                                            >
                                                {myArticle?.content ?? ""}
                                            </Typography>
                                            <Typography
                                                variant="subtitle2"
                                                color="text.secondary"
                                            >
                                                {timestamp} from{" "}
                                                {myArticle?.source ?? ""}
                                            </Typography>
                                        </CardContent>
                                    </Box>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </Paper>
    );
}
