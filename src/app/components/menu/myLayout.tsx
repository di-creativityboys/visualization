"use client";

import * as React from "react";
import { Stack, Switch } from "@mui/material";
import { SingletonStorage } from "~/client/SingletonStorage";
import { teal } from '@mui/material/colors';
import { alpha, styled } from '@mui/material/styles';

type MyProps = {
    children?: React.ReactNode;
};

export default function ApiSwitchLayout({}: MyProps) {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        if(event.target.checked){
            SingletonStorage.getInstance().apiVersion = 2;
        }else {
            SingletonStorage.getInstance().apiVersion = 1;
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
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
            />
            <p>v2</p>
        </Stack>
    );
}

const MySwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: teal[600],
      '&:hover': {
        backgroundColor: alpha(teal[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: teal[600],
    },
  }));