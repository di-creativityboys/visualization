import { db } from "~/server/db";
import { type Cluster } from "~/types";
import TopicsLayout from "./my_layout";

export default async function TopicsPage() {
    const clustersDB = await db.articles.findMany({
        select: {
            clusterid: true,
            clustertopic: true,
            imageurl: true,
        },
    });

    const clusters: Cluster[] = [];

    for (const clust of clustersDB) {
        const cluster: Cluster = {
            clusterid: clust.clusterid,
            clustertopic: clust.clustertopic,
            imageurl: clust.imageurl,
        };

        clusters.push(cluster);
    }

    return <TopicsLayout cluster={clusters} />;
}
