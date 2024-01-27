"use client";

import React from "react";
import { Button, CircularProgress } from "@mui/material";
import { useFormStatus } from "react-dom";
import { scrapeCNN } from "./actions";

type MyProps = {
    children?: React.ReactNode;
};

export const FetchCNNButton = ({}: MyProps) => {
    return (
        <form action={scrapeCNN} style={{margin: "0 5px 0 5px"}}>
            <SubmitButtonCached />
        </form>
    );
};

function SubmitButtonCached() {
    const { pending } = useFormStatus();

    return (
        <>
            {pending ? (
                <CircularProgress />
            ) : (
                <Button
                    variant="contained"
                    type="submit"
                    aria-disabled={pending}
                    disabled={pending}
                    fullWidth
                    sx={{ backgroundColor: "#009688", mr: 1 }}
                >
                    Scrape CNN
                </Button>
            )}
        </>
    );
}
