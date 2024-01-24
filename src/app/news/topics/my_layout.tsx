"use client";

import * as React from "react";
import { Box, Grid } from "@mui/material";
import { type Cluster } from "~/types";
import { TopicCard } from "./topic_card";

type MyProps = {
    children?: React.ReactNode;
    cluster: Cluster[];
};

export default function TopicsLayout({ cluster }: MyProps) {
    return (
        <>
            <Box style={{ maxHeight: "82vh", overflow: "auto" }}>
                <Grid container spacing={2}>
                    {cluster.map((myCluster, index) => {
                        return (
                            <Grid item key={index} xs={3}>
                                <TopicCard cluster={myCluster} />
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </>
    );
}
