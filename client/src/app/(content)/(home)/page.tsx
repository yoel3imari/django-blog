import { get } from "@/lib/api";

export default async function Home() {

  const articles = await get<any[]>("articles");
  console.log(articles);

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <h2>{article.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
