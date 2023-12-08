"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { SingletonStorage } from "~/client/SingletonStorage";
import { env } from "~/env.mjs";

export async function createUser(formData: FormData) {
    const schema = z.object({
        user: z.string(),
    });

    const data = schema.parse({
        user: formData.get("user"),
    });

    try {
        // host.docker.internal

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const response = await fetch(
            `${env.DATA_APP_URL}/twitter/${data.user}`,
            {
                method: "GET",
            }
        );
        SingletonStorage.getInstance().twitterUserName = data.user;
        console.log(data.user);
        console.log(SingletonStorage.getInstance().twitterUserName);

        revalidatePath("/");
        console.log("geschafft");
        return { message: "Added" };
    } catch (e) {
        console.log("gefailed");
        console.log(e);
        return { message: "Failed to fetch user" };
    }
}
