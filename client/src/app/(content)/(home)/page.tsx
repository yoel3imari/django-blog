import BlogCard from "@/components/BlogCard";
import CategoryTag from "@/components/CategoryTag";
import TheTitle from "@/components/TheTitle";
import { get } from "@/lib/api";
import { Category } from "@/lib/definitions";
import Link from "next/link";

export default async function Home() {
  const posts = await get<any[]>("latest-articles");
  const categories = await get<Category[]>("popular-categories");

  return (
    <div className="container mx-auto">
      <div className="mt-4 mb-20 flex items-center justify-between">
        <div></div>
        <TheTitle />
        <div className="flex gap-2 font-sans text-secondary-foreground text-sm">
          <Link href="/connect" className="hover:underline">Connect</Link>
          <Link href="/register" className="hover:underline">Register</Link>
        </div>
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
