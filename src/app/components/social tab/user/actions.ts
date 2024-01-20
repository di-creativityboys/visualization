"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { env } from "~/env.mjs";
import { singletonServer } from "~/server/SingletonServer";

// eslint-disable-next-line @typescript-eslint/require-await
export async function getCachedUser(formData: FormData) {
    "use server";

    const schema = z.object({
        user: z.string(),
    });

    const data = schema.parse({
        user: formData.get("user"),
    });

    singletonServer.twitterUserName = data.user;
    console.log("1 " + singletonServer.twitterUserName);
    revalidatePath("/");
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

    singletonServer.twitterUserName = data.user;
    console.log("1 " + singletonServer.twitterUserName);

    try {
        // host.docker.internal

        if(data.apiVersion === "1") {
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
        console.log("geschafft");
        return { message: "Added" };
    } catch (e) {
        console.log("gefailed");
        console.log(e);
        return { message: "Failed to fetch user" };
    }
}