"use client";

import * as React from "react";
import { Stack, Switch } from "@mui/material";
import { teal } from "@mui/material/colors";
import { alpha, styled } from "@mui/material/styles";
import { useMyClientStore } from "~/client/client_store";

type MyProps = {
    children?: React.ReactNode;
};

export default function ApiSwitchLayout({}: MyProps) {
    const apiVersion = useMyClientStore((state) => state.apiVersion);

    const setApiVersion1 = useMyClientStore((state) => state.setApiVersion1);
    const setApiVersion2 = useMyClientStore((state) => state.setApiVersion2);

    const handleChange = (_: React.ChangeEvent<HTMLInputElement>) => {
        if (apiVersion === 1) {
            setApiVersion2();
        } else {
            setApiVersion1();
        }
    };

    return (
        <Stack
            direction="row"
            //justifyContent="flex-start"
            alignItems="center"
            spacing={2}
        >
            <p>API v1</p>
            <MySwitch
                checked={apiVersion === 2}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
            />
            <p>v2</p>
        </Stack>
    );
}

const MySwitch = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
        color: teal[600],
        "&:hover": {
            backgroundColor: alpha(
                teal[600],
                theme.palette.action.hoverOpacity
            ),
        },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
        backgroundColor: teal[600],
    },
}));
