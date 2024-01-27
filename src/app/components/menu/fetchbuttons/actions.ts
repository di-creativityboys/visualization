"use server";

import { revalidatePath } from "next/cache";
import { env } from "~/env.mjs";

export async function scrapeBBC(_: FormData) {
    "use server";

    try {
        await fetch(`${env.DATA_APP_URL}/bbc`, {
            method: "GET",
        });

        revalidatePath("/");
    } catch (e) {
        console.log("gefailed");
        console.log(e);
        return { message: "Failed to fetch user" };
    }
}

export async function scrapeCNN(_: FormData) {
    "use server";

    try {
        await fetch(`${env.DATA_APP_URL}/cnn`, {
            method: "GET",
        });

        revalidatePath("/");
    } catch (e) {
        console.log("gefailed");
        console.log(e);
        return { message: "Failed to fetch user" };
    }
}

export async function recluster(_: FormData) {
    "use server";

    try {
        await fetch(`${env.DATA_APP_URL}/news/cluster`, {
            method: "GET",
        });

        revalidatePath("/");
    } catch (e) {
        console.log("gefailed");
        console.log(e);
        return { message: "Failed to fetch user" };
    }
}