import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

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
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Box sx={{ flexGrow: 1, mb: 1 }}>
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
                            <Button color="inherit">Data Integration</Button>
                        </Toolbar>
                    </AppBar>
                </Box>
                {children}
            </body>
        </html>
    );
}
