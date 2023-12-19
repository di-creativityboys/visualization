import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";

export const PromptTemplateDropDrown = () => {
    const [promptTemplate, setPromptTemplate] = useState("");

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
                Template
            </InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={promptTemplate}
                label="Language Model"
                onChange={(e) => setPromptTemplate(e.target.value)}
            >
                <MenuItem value={"No Template"}> </MenuItem>
                <MenuItem value={"Template 1"}>Template 1</MenuItem>
                <MenuItem value={"Template 2"}>Template 2</MenuItem>
            </Select>
        </FormControl>
    );
};
