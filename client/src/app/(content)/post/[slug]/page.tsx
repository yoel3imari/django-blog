import { get } from "@/lib/api";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const slug = (await params).slug
  const article = await get<any>(`articles/${slug}`);

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
}