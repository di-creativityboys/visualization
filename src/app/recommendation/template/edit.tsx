import { Button, CircularProgress, Stack, TextField } from "@mui/material";
import { useFormStatus } from "react-dom";
import { type PromptTemplate } from "~/types";
import { useState } from "react";
import { changePromptTemplateName, deletePromptTemplate } from "./actions";

type MyProps = {
    promptTemplate: PromptTemplate | undefined | null;
};

export default function EditTemplate({ promptTemplate }: MyProps) {
    const [name, setName] = useState(promptTemplate?.name ?? "");

    if (promptTemplate === undefined || promptTemplate === null) {
        return <></>;
    }

    console.log(promptTemplate?.name);
    console.log(name)

    return (
        <>
            <Stack spacing={2} mt={2}>
                <form action={changePromptTemplateName}>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="stretch"
                    >
                        <TextField
                            id="outlined-multiline-static-template"
                            label="Template Name"
                            multiline
                            value={name}
                            name="name"
                            onChange={(e) => {
                                setName(e.target.value ?? "");
                            }}
                            required
                        />
                        <input
                            style={{ display: "none" }}
                            type="number"
                            name="id"
                            readOnly
                            value={promptTemplate?.id ?? -1}
                        />
                        <SubmitButton />
                    </Stack>
                </form>
                <form action={deletePromptTemplate}>
                    <input
                        style={{ display: "none" }}
                        type="number"
                        name="id"
                        readOnly
                        value={promptTemplate?.id ?? -1}
                    />
                    <DeleteButton />
                </form>
            </Stack>
        </>
    );
}

function SubmitButton() {
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
                    sx={{ backgroundColor: "#009688" }}
                >
                    Change name
                </Button>
            )}
        </>
    );
}

function DeleteButton() {
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
                    sx={{ backgroundColor: "red" }}
                >
                    Delete
                </Button>
            )}
        </>
    );
}
