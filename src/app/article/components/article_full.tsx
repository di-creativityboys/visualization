import React from "react";
import { db } from "~/server/db";

type ArticleFullProps = {
    articleId: string;
};

export const ArticleFull = async ({ articleId }: ArticleFullProps) => {
    const article = await db.articles.findFirst({
        where: {
            urlid: articleId,
        },
    });

    return (
        <>
            <article>
                <h1>{article?.headline}</h1>
                <h2>{article?.authors}</h2>
                <h2>{article?.source}</h2>
                <h2>{article?.scrapingtimestamp.toString()}</h2>
                <h2>{article?.uploadtimestamp?.toString()}</h2>
                <h2>{article?.urlid}</h2>
                <p>{article?.content}</p>
            </article>
        </>
    );
};
