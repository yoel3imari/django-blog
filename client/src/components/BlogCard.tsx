import { BlogPost } from "@/lib/definitions";
import dayjs from "dayjs";
import Link from "next/link";
import React from "react";

function BlogCard({ blog }: { blog: BlogPost }) {
  return (
    <div className="">
      <div>
        <Link href={`/author/${blog.author.username}`}>
          <span className="font-sans text-sm">
            {`${blog.author.first_name} ${blog.author.last_name}`}
          </span>
        </Link>
      </div>
      <Link href={`/post/${blog.slug}`}>
        <h2 className="text-xl font-bold">{blog.title}</h2>
      </Link>
      <p className="mb-4 text-sm font-sans text-secondary-foreground line-clamp-2">
        {blog.content.slice(0, 200)}
      </p>
      <p className="text-sm text-accent-foreground font-sans">
        {dayjs(blog.published_at).format('MMM DD, YYYY')}
      </p>
      <hr className="my-8" />
    </div>
  );
}

export default BlogCard;
