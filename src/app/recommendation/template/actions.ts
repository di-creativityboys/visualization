"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { db } from "~/server/db";

export async function changePromptTemplateName(formData: FormData) {
    "use server";

    const schema = z.object({
        name: z.string(),
        id: z.number(),
    });

    const data = schema.parse({
        name: formData.get("name"),
        id: Number(formData.get("id")),
    });

    await db.prompttemplate.update({
        where: { id: data.id },
        data: { name: data.name },
    });

    revalidatePath("/");
}

export async function deletePromptTemplate(formData: FormData) {
    "use server";

    const schema = z.object({
        id: z.number(),
    });

    const data = schema.parse({
        id: Number(formData.get("id")),
    });

    await db.prompttemplate.delete({
        where: { id: data.id },
    });

    revalidatePath("/");
}
