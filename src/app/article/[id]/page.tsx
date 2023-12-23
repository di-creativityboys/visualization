import { Suspense } from "react";
import { ArticleFull } from "../components/article_full";

type ArticleProps = {
    params: {
        id: string
    };
};

export default function Page({ params }: ArticleProps) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ArticleFull articleId="https://www.bbc.com/news/in-pictures-67800653"/>
        </Suspense>
    );
}
