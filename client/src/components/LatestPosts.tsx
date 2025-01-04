import { BlogPost } from "@/lib/definitions";
import React from "react";
import dayjs from "dayjs";
import { formatDistanceToNow } from "date-fns";
import CategoryTag from "./CategoryTag";
import Link from "next/link";

const MEDIA_URL = process.env.NEXT_PUBLIC_MEDIA_URL;

function LatestPosts({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="">
      <div className="grid grid-rows-3 grid-cols-5 gap-4">
        <div className="col-span-3 row-span-3">
          <div
            style={{
              background: `linear-gradient(to top, black, transparent), url(${
                MEDIA_URL + posts[0].cover
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className={`flex flex-col justify-end text-primary-foreground pb-4 h-full bg-cover bg-center p-4 shadow-lg rounded-xl mb-4 bg-card`}
          >
            <div className="mb-4">
              <Link href={`/category/${posts[0].category.slug}`}>
                <CategoryTag cat={posts[0].category.name} />
              </Link>
            </div>

            <Link className="hover:underline" href={`/post/${posts[0].slug}`}>
              <h2 className="text-6xl mb-4 font-bold">{posts[0].title}</h2>
              <p className="line-clamp-2 text-lg">{posts[0].content}</p>
            </Link>

            <div className="flex justify-between gap-4 text-sm  font-sans font-bold mt-4">
              <div>
                <span className="mr-2">By</span>
                <Link
                  className="hover:underline"
                  href={`/author/${posts[0].author.username}`}
                >
                  <span className="ms-1 italic">
                    {posts[0].author.first_name +
                      " " +
                      posts[0].author.last_name}
                  </span>
                </Link>
              </div>
              <span className="text-gray-300">
                {formatDistanceToNow(new Date(posts[0].published_at), {
                  addSuffix: true,
                })}
              </span>
            </div>
          </div>
        </div>

        <div className="col-span-2 row-span-3 flex flex-col gap-4">
          {posts.slice(1).map((post) => (
            <div
              key={post.id}
              className={`h-32 bg-cover bg-center p-2 pr-4 shadow-lg rounded-xl bg-card`}
            >
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                  <img
                    src={MEDIA_URL + post.cover}
                    alt=""
                    className="w-56 h-28 rounded-lg"
                  />
                </div>
                <div className="col-span-2 flex flex-col gap-1">
                  <h2 className="text-xl font-bold line-clamp-2">
                    {post.title}
                  </h2>
                  <div className="">
                    <Link href={`/category/${post.category.slug}`}>
                      <CategoryTag cat={post.category.name} />
                    </Link>
                  </div>
                  <div className="font-sans font-semibold flex justify-between gap-4 text-sm">
                    <span>
                      <span className="mr-2">By</span>
                      <span className="italic">
                        {post.author.first_name + " " + post.author.last_name}
                      </span>
                    </span>
                    <span className="text-gray-300">
                      {/* {dayjs(post.published_at).format("YYYY-MM-DD HH:mm")} */}
                      {formatDistanceToNow(new Date(post.published_at), {
                        addSuffix: true,
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LatestPosts;
