"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { db } from "~/server/db";

export async function addPromptTemplate(formData: FormData) {
    "use server";

    const schema = z.object({
        name: z.string(),
        text0: z.string(),
        text1: z.string(),
        text2: z.string(),
    });

    const data = schema.parse({
        name: formData.get("name"),
        text0: formData.get("text0"),
        text1: formData.get("text1"),
        text2: formData.get("text2"),
    });

    await db.prompttemplate.create({
        data: {
            name: data.name,
            text0: data.text0,
            text1: data.text1,
            text2: data.text2,
        },
    });

    revalidatePath("/");
}
