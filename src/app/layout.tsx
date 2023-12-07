import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
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
        <Box sx={{ flexGrow: 1, mb: 1}}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
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
