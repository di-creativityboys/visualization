"use client";

import React from "react";
import { Button, CircularProgress } from "@mui/material";
import { useFormStatus } from "react-dom";
import { recluster } from "./actions";

type MyProps = {
    children?: React.ReactNode;
};

export const ReclusterButton = ({}: MyProps) => {
    return (
        <form action={recluster} style={{margin: "0 10px 0 5px"}}>
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
                    sx={{ backgroundColor: "#009688", mr: 10, px: 1 }}
                >
                    Cluster
                </Button>
            )}
        </>
    );
}
