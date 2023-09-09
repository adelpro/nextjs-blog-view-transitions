"use client";
import React from "react";
import { articles } from "@/articles";
import Image from "next/image";
import { useParams } from "next/navigation";
export default function ArticlePage() {
  const params = useParams();
  const { id } = params;
  const currentArticle = articles.find(
    (article) => article.id === parseInt(id as string)
  );
  if (!currentArticle) {
    return <div>404 - Article not found</div>;
  }
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="relative w-full h-48">
        <Image
          src={currentArticle.image}
          alt={currentArticle.title}
          layout="fill"
          objectFit="cover"
          className="rounded-md max-w-lg mx-auto"
        />
      </div>
      <h2 className="text-xl font-semibold mt-2">{currentArticle.title}</h2>
      <p className="text-gray-600 mt-2">{currentArticle.content}</p>
    </div>
  );
}
