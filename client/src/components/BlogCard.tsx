import { BlogPost } from "@/lib/definitions";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MEDIA_URL = process.env.NEXT_PUBLIC_MEDIA_URL;

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
        <div className="flex items-center  space-x-4">
          <div className="flex-grow">
            <h2 className="text-xl font-bold line-clamp-1">{blog.title}</h2>

            <p className="mb-4 text-sm font-sans text-secondary-foreground line-clamp-2">
              {blog.content.slice(0, 200)}
            </p>
            <p className="text-sm text-accent-foreground font-sans">
              {dayjs(blog.published_at).format("MMM DD, YYYY")}
            </p>
          </div>
          <div className="flex-shrink-0 h-[120px] w-[250px] relative">
            <Image
              src={MEDIA_URL + blog.cover}
              alt={blog.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Link>
      <hr className="my-8" />
    </div>
  );
}

export default BlogCard;
