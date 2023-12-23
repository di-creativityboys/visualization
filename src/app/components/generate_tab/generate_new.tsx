"use client";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { PromptTab } from "./prompt/prompt_tab";
import { useState } from "react";
import { SingletonStorage } from "~/client/SingletonStorage";
import { OutputTab } from "./output/output_tab";

export default function ControlledAccordions() {
    const [promptPreview, setPromptPreview] = useState("");

    const [expanded, setExpanded] = React.useState<string | false>("promptPanel");

    const handleChange =
        (panel: string) =>
        (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);

            const prompt =
                (SingletonStorage.getInstance().prompt.text0 ?? "") +
                (SingletonStorage.getInstance().prompt.news ?? "") +
                (SingletonStorage.getInstance().prompt.text1 ?? "") +
                (SingletonStorage.getInstance().prompt.tweets ?? "") +
                (SingletonStorage.getInstance().prompt.text2 ?? "");

            setPromptPreview(prompt);
        };

    return (
        <div>
            <Accordion
                expanded={expanded === "promptPanel"}
                onChange={handleChange("promptPanel")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                        Prompt
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                        {promptPreview.substring(0, 25)}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <PromptTab />
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === "outputPanel"}
                onChange={handleChange("outputPanel")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                        Recommendation
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                        t
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <OutputTab />
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
