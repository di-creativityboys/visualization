import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { type ReactNode } from "react";
import ApiSwitchLayout from "./components/menu/myLayout";
import { FetchBBCButton } from "./components/menu/fetchbuttons/fetch_bbc_button";
import { ReclusterButton } from "./components/menu/fetchbuttons/fetch_cluster_button";
import { FetchCNNButton } from "./components/menu/fetchbuttons/fetch_cnn_button";

const inter = Inter({
    subsets: ["latin"],
});

export const metadata = {
    title: "Tweet Recommender",
    description: "Data Integration WT2324",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
    
};

export default function RootLayout({
    children,
}: {
    children: ReactNode,
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Box sx={{ flexGrow: 1}}>
                    <AppBar
                        position="static"
                        sx={{ backgroundColor: "#607D8B" }}
                    >
                        <Toolbar>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1 }}
                            >
                                Tweet Recommender
                            </Typography>
                            <FetchBBCButton />
                            <FetchCNNButton />
                            <ReclusterButton />
                            <ApiSwitchLayout />
                        </Toolbar>
                    </AppBar>
                </Box>
                {children}
            </body>
        </html>
    );
}
