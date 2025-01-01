import { BlogPost } from "@/lib/definitions";
import Link from "next/link";
import React from "react";

const MEDIA_URL = process.env.NEXT_PUBLIC_MEDIA_URL;

function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/post/${post.slug}`}>
      <div className="rounded-2xl m-2 shadow-lg bg-card text-card-foreground max-w-96">
        <div className="flex flex-col">
          <div className="flex-1">
            <img
              src={`${MEDIA_URL + post.cover}`}
              alt={post.title}
              className="rounded-t-2xl max-w-96"
            />
          </div>
          <div className="p-4">
            <div>
              <Link href={`/category/${post.category.slug}`}>
                <span className="text-xs truncate bg-lime-200 text-lime-600 font-bold bg-opacity-50 text-md border border-lime-600 px-2 py-1 rounded-full">
                  {post.category.name}
                </span>
              </Link>
            </div>
            <h2 className="text-xl underline font-bold line-clamp-2">
              {post.title}
            </h2>
            <p className="font-light line-clamp-3">{post.content}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
