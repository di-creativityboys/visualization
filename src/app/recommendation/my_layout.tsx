"use client";

import {
    Accordion,
    AccordionSummary,
    Typography,
    AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { type Prompt } from "~/types";
import { type prompttemplate as PromptTemplate } from "@prisma/client";
import { useState, type SyntheticEvent } from "react";
import { SingletonStorage } from "~/client/SingletonStorage";
import TemplatePage from "./template/template_page";
import { PromptTab } from "./prompt/prompt";
import { OutputTab } from "./output/output_page";
import { ImageTab } from "./image/image_tab";

type MyProps = {
    promptTemplates: PromptTemplate[];
};

export default function RecommendationLayout({ promptTemplates }: MyProps) {
    const [promptPreview, setPromptPreview] = useState("");
    const [expanded, setExpanded] = useState<string | false>("promptPanel");
    const [prompt, setPrompt] = useState<Prompt>(
        SingletonStorage.getInstance().prompt
    );
    const [templateName, setTemplateName] = useState("");

    const handleChange =
        (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);

            const prompt =
                (SingletonStorage.getInstance().prompt.text0 ?? "") +
                (SingletonStorage.getInstance().prompt.news ?? "") +
                (SingletonStorage.getInstance().prompt.text1 ?? "") +
                (SingletonStorage.getInstance().prompt.tweets ?? "") +
                (SingletonStorage.getInstance().prompt.text2 ?? "");

            setPromptPreview(prompt);
            setPrompt(SingletonStorage.getInstance().prompt);
            setTemplateName(SingletonStorage.getInstance().templateName);
        };

    return (
        <>
            <Accordion
                expanded={expanded === "templatePanel"}
                onChange={handleChange("templatePanel")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel0bh-content"
                    id="panel0bh-header"
                >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                        Template
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                        {templateName}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TemplatePage promptTemplates={promptTemplates} />
                </AccordionDetails>
            </Accordion>
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
                    <PromptTab prompt={prompt} key={promptPreview} />
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
                </AccordionSummary>
                <AccordionDetails>
                    <OutputTab />
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === "imagePanel"}
                onChange={handleChange("imagePanel")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                        Image
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ImageTab />
                </AccordionDetails>
            </Accordion>
        </>
    );
}
