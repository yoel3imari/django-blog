import { get } from "@/lib/api";
import { BlogPost } from "@/lib/definitions";
import dayjs from "dayjs";
import { remark } from "remark";
import html from "remark-html";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Post",
};

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const article = await get<BlogPost>(`articles/${slug}`);

  const text = await remark().use(html).process(article.content);
  const content = text.toString();

  return (
    <div className="container flex justify-center mx-auto py-8">
      <div className="w-[580px]">
        <h1 className="text-5xl font-bold mb-8">{article.title}</h1>
        <div className="mb-8">
          <p>{article.author.first_name + " " + article.author.last_name}</p>
          <p>
            Published{" "}
            {dayjs(article.published_at).format("dddd, MMMM D, YYYY h:mm")}{" "}
          </p>
        </div>

        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
}
