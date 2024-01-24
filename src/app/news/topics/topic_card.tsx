import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import React from "react";
import { useMyClientStore } from "~/client/client_store";
import { type Cluster } from "~/types";

type MyProps = {
    cluster: Cluster;
};

export const TopicCard = ({ cluster }: MyProps) => {
    const activeTopic = useMyClientStore((state) => state.activeTopic);
    const setActiveTopic = useMyClientStore((state) => state.setActiveTopic);

    const isActive: boolean = activeTopic === cluster.clustertopic;

    return (
        <Card
            sx={{
                display: "flex",
                // maxHeight: "10vh",
                backgroundColor: isActive ? "#607D8B" : null,
                transition: "300ms",
                color: isActive ? "white" : null,
            }}
        >
            <CardActionArea
                onClick={(_) => {
                    if (activeTopic === cluster.clustertopic) {
                        setActiveTopic(null);
                        return;
                    }

                    setActiveTopic(cluster.clustertopic);
                }}
                sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "strecht",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <CardContent>
                        {cluster.imageurl != null ? (
                            <CardMedia
                                component="img"
                                sx={{ width: "auto", height: 100 }}
                                image={cluster.imageurl}
                                alt="Image description"
                            />
                        ) : null}
                        <Typography component="div" variant="h5">
                            {cluster.clustertopic ?? ""}
                        </Typography>
                    </CardContent>
                </Box>
            </CardActionArea>
        </Card>
    );
};
