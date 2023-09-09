import { articles } from "@/articles";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type Props = { id: number; title: string; image: string; content: string };
export default function ArticleCard({ id, title, image, content }: Props) {
  const router = useRouter();
  let subtitle = "";
  if (typeof content == "string") {
    subtitle = content.slice(0, 50);
  }
  return (
    <div
      className="bg-white rounded-lg shadow-lg p-4 cursor-pointer"
      onClick={() => {
        router.push(`/articles/${id}`);
      }}
    >
      <Image
        src={image}
        alt={title}
        className="h-32 w-60 rounded-md"
        width={200}
        height={150}
      />

      <h2 className="text-xl font-semibold mt-2">{title}</h2>
      <p className="text-gray-600 mt-2">{subtitle}</p>
    </div>
  );
}
