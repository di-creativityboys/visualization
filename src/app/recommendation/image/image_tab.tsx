/* eslint-disable @next/next/no-img-element */
"use client";

import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { env } from "~/env.mjs";

export const ImageTab = () => {
    const [imageQuery, setImageQuery] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const [imageUser, setImageUser] = useState("");
    const [imageDescription, setImageDescription] = useState("");

    return (
        <Stack spacing={1}>
            <TextField
                id="outlined-multiline-static-image-query"
                label="Image Query"
                value={imageQuery}
                onChange={(e) => {
                    setImageQuery(e.target.value ?? "");
                }}
            />
            <Button
                variant="contained"
                sx={{ backgroundColor: "#009688" }}
                onClick={async () => {
                    const response = await fetch(
                        "https://api.unsplash.com/photos/random?" +
                            new URLSearchParams({
                                client_id: env.NEXT_PUBLIC_UNPLASH,
                                count: "1",
                                query: imageQuery,
                            }).toString()
                    );
                    try {
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                        const response_data = await response.json();
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
                        const first_item = response_data[0];

                        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
                        const urls = first_item.urls;

                        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
                        const regular = urls.regular;
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
                        const imageUser = first_item.user.name;
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
                        const imageDescription = first_item.alt_description;

                        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                        setImageUrl(regular);
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                        setImageUser(imageUser);
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                        setImageDescription(imageDescription);
                    } catch (e) {
                        console.log(e);
                    }
                }}
            >
                Query unplash image
            </Button>

            {imageUrl !== "" ? (
                <img src={imageUrl} alt="Your tweet image" />
            ) : null}
            {imageDescription !== "" && imageDescription !== null ? (
                <h2>{imageDescription}</h2>
            ) : null}
            {imageUser !== "" && imageUser !== null ? (
                <p>Image by: {imageUser}</p>
            ) : null}
        </Stack>
    );
};
