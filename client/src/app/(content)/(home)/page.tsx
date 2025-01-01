import LatestPosts from "@/components/LatestPosts";
import PostCard from "@/components/PostCard";
import { get } from "@/lib/api";
import Link from "next/link";

export default async function Home() {
  const posts = await get<any[]>("latest-articles");
  console.log(posts);

  return (
    <div>
      {/* 4 latest posts */}
      <LatestPosts posts={posts} />
      {/* Popular Categories */}
    </div>
  );
}
