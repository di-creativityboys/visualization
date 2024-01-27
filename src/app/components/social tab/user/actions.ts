"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { env } from "~/env.mjs";

// eslint-disable-next-line @typescript-eslint/require-await
export async function getCachedUser(formData: FormData) {
    "use server";

    const schema = z.object({
        user: z.string(),
    });

    const data = schema.parse({
        user: formData.get("user"),
    });

    revalidatePath("/");
    redirect(`/?user=${data.user}`);
}

export async function fetchUser(formData: FormData) {
    "use server";

    const schema = z.object({
        user: z.string(),
        apiVersion: z.string(),
    });

    const data = schema.parse({
        user: formData.get("user"),
        apiVersion: formData.get("apiVersion"),
    });

    try {
        if (data.apiVersion === "1") {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const response = await fetch(
                `${env.DATA_APP_URL}/twitter/${data.user}`,
                {
                    method: "GET",
                }
            );
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const response = await fetch(
                `${env.DATA_APP_URL}/twitter/v2/${data.user}`,
                {
                    method: "GET",
                }
            );
        }

        revalidatePath("/");
        redirect(`/?user=${data.user}`);
    } catch (e) {
        console.log("gefailed");
        console.log(e);
        return { message: "Failed to fetch user" };
    }
}
