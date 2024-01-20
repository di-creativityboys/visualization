import { type prompttemplate as PromptTemplate } from "@prisma/client"
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    type SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { SingletonStorage } from "~/client/SingletonStorage";
import EditTemplate from "./edit";

type MyProps = {
    promptTemplates: PromptTemplate[];
};

export default function TemplatePage({ promptTemplates }: MyProps) {
    const [promptTemplateId, setPromptTemplateId] = useState(-1);

    function handleChange(event: SelectChangeEvent<number>) {
        const id = Number(event.target.value);

        setPromptTemplateId(id);

        SingletonStorage.getInstance().prompt = {
            ...SingletonStorage.getInstance().prompt,
            text0: promptTemplates.find((x) => x.id === id)?.text0 ?? "",
            text1: promptTemplates.find((x) => x.id === id)?.text1 ?? "",
            text2: promptTemplates.find((x) => x.id === id)?.text2 ?? "",
        };

        SingletonStorage.getInstance().templateName =
            promptTemplates.find((x) => x.id === id)?.name ?? "";
    }

    return (
        <>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Template</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={promptTemplateId}
                    label="Language Model"
                    onChange={(e) => handleChange(e)}
                >
                    {promptTemplates.map((promptTemplate) => {
                        return (
                            <MenuItem
                                key={"PromptTemplate" + promptTemplate.id}
                                value={promptTemplate.id}
                            >
                                {promptTemplate.name}
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl>
            <EditTemplate
                key={"PromptTemplateEdit" + promptTemplateId}
                promptTemplate={promptTemplates.find(
                    (x) => x.id === promptTemplateId
                )}
            />
        </>
    );
}
