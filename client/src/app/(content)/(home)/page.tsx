import BlogCard from "@/components/BlogCard";
import CategoryTag from "@/components/CategoryTag";
import { get } from "@/lib/api";
import { Category } from "@/lib/definitions";
import Link from "next/link";
import { post } from "../../../lib/api";

export default async function Home() {
  const posts = await get<any[]>("latest-articles");
  const categories = await get<Category[]>("popular-categories");

  return (
    <div className="container mx-auto">
      <div className="mt-4 mb-20">
        <h1 className="text-6xl font-bold text-primary text-center">
          Bloggers
        </h1>
      </div>
      <div className="mt-4 mb-12">
        <ul className="flex items-center gap-1 justify-center">
          {categories.map((categ) => (
            <li key={categ.id}>
              <CategoryTag categ={categ} />
            </li>
          ))}
        </ul>
      </div>
      <div className="my-4 flex flex-col items-center justify-center">
        <div className="flex flex-col">
          {posts.map((p) => (
            <BlogCard key={p.id} blog={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
