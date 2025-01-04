import LatestPosts from "@/components/LatestPosts";
import PopularCategories from "@/components/PopularCategories";
import PostCard from "@/components/PostCard";
import { get } from "@/lib/api";
import Link from "next/link";

export default async function Home() {
  const posts = await get<any[]>("latest-articles");
  const categories = await get<any[]>("popular-categories");

  return (
    <div className="container mx-auto py-8">
      {/* 4 latest posts */}
      <div className="mb-8">
        <LatestPosts posts={posts} />
      </div>
      {/* Popular Categories */}
      <div className="mb-8">
        <PopularCategories categories={categories} />
      </div>
    </div>
  );
}
