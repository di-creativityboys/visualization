import { db } from "~/server/db";
import NewsLayout from "./my_layout";
import { type articles as Article } from "@prisma/client";
import { type Cluster } from "~/types";

export default async function NewsPage() {
    const articlesDB: Article[] = await db.articles.findMany({
        orderBy: [
            {
                scrapingtimestamp: "desc",
            },
        ],
    });

    const clustersDB: Cluster[] = await db.articles.findMany({
        select: {
            clusterid: true,
            clustertopic: true,
            imageurl: true,
        },
    });

    return <NewsLayout articles={articlesDB} cluster={clustersDB} />;
}
