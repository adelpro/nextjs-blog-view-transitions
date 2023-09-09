"use client";
import ArticleCard from "@/components/articleCard";
import { articles } from "@/articles";
export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          id={article.id}
          title={article.title}
          content={article.content}
          image={article.image}
        />
      ))}
    </main>
  );
}
