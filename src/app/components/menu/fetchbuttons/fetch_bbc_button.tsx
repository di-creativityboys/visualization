"use client";

import React from "react";
import { Button, CircularProgress } from "@mui/material";
import { useFormStatus } from "react-dom";
import { scrapeBBC } from "./actions";

type MyProps = {
    children?: React.ReactNode;
};

export const FetchBBCButton = ({}: MyProps) => {
    return (
        <form action={scrapeBBC} style={{margin: "0 5px 0 5px"}}>
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
                    sx={{ backgroundColor: "#009688", mr: 1}}
                    
                >
                    Scrape BBC
                </Button>
            )}
        </>
    );
}
