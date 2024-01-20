import { db } from "~/server/db";
import NewsLayout from "./my_layout";
import { type articles as Article } from "@prisma/client"

export default async function NewsPage() {
    const articlesDB = await db.articles.findMany({
        orderBy: [
            {
                id: "asc",
            },
        ],
    });

    const articles: Article[] = [];

    for (const articleDB of articlesDB) {
        const article: Article = {
            id: articleDB.id,
            authors: articleDB.authors,
            clusterid: articleDB.clusterid,
            clustertopic: articleDB.clustertopic,
            content: articleDB.content,
            headline: articleDB.headline,
            imagedescription: articleDB.imagedescription,
            imageurl: articleDB.imageurl,
            scrapingtimestamp: articleDB.scrapingtimestamp,
            source: articleDB.source,
            topic: articleDB.topic,
            uploadtimestamp: articleDB.uploadtimestamp,
            urlid: articleDB.urlid,
        };

        articles.push(article);
    }

    return <NewsLayout articles={articles} />;
}
