import { db } from "~/server/db";
import NewsLayout from "./my_layout";
import { type articles as Article } from "@prisma/client";
import { type Cluster } from "~/types";

export default async function NewsPage() {
    const articlesDB = await db.articles.findMany({
        orderBy: [
            {
                id: "asc",
            },
        ],
    });

    const clustersDB = await db.articles.findMany({
        select: {
            clusterid: true,
            clustertopic: true,
            imageurl: true,
        },
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

    const clusters: Cluster[] = [];
    const clusterSet = new Set<string>();

    for (const clust of clustersDB) {
        const cluster: Cluster = {
            clusterid: clust.clusterid,
            clustertopic: clust.clustertopic,
            imageurl: clust.imageurl,
        };

        if (clusterSet.has(cluster.clustertopic ?? "")) {
            continue;
        }

        clusters.push(cluster);
        clusterSet.add(cluster.clustertopic ?? "");
    }

    return <NewsLayout articles={articles} cluster={clusters} />;
}
