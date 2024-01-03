import { db } from "~/server/db";
import RecommendationLayout from "./my_layout";
import { type PromptTemplate } from "~/types";

export default async function RecommendationPage() {
    const promptTemplatesDb = await db.prompttemplate.findMany({
        orderBy: [
            {
                id: "asc",
            },
        ],
    });

    const promptTemplates: PromptTemplate[] = [];

    for (const promptTemplate of promptTemplatesDb) {
        const template: PromptTemplate = {
            id: promptTemplate.id,
            name: promptTemplate.name ?? "No name",
            text0: promptTemplate.text0,
            text1: promptTemplate.text1,
            text2: promptTemplate.text2,
        };

        promptTemplates.push(template);
    }

    return <RecommendationLayout promptTemplates={promptTemplates} />;
}
