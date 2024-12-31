import { get } from "@/lib/api";
import Link from "next/link";

export default async function Home() {
  const articles = await get<any[]>("articles");
  // console.log(articles);

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link href={`/post/${article.slug}`}>
              <h2>{article.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
