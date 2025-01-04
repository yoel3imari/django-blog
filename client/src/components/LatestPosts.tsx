import { BlogPost } from "@/lib/definitions";
import React from "react";
import dayjs from "dayjs";
import CategoryTag from "./CategoryTag";

const MEDIA_URL = process.env.NEXT_PUBLIC_MEDIA_URL;

function LatestPosts({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="p-8">
      <div className="grid grid-rows-3 grid-cols-5 gap-4">
        <div className="col-span-3">
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
            <CategoryTag cat={posts[0].category.name} />
            <h2 className="text-6xl font-bold">{posts[0].title}</h2>
            <p className="truncate-2   text-lg">{posts[0].content}</p>
            <div className="flex gap-4 text-sm  font-sans font-bold mt-4 text-amber-500">
              <span>
                {posts[0].author.first_name + " " + posts[0].author.last_name}
              </span>
              <span>
                {dayjs(posts[0].published_at).format("YYYY-MM-DD HH:mm")}
              </span>
            </div>
          </div>
        </div>

        <div className="col-span-2 flex flex-col gap-4">
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
                <div className="col-span-2">
                  <h2 className="text-2xl font-bold truncate-2">{post.title}</h2>
                  <div className="flex flex-col text-sm">
                    <span>
                      {post.author.first_name +
                        " " +
                        post.author.last_name}
                    </span>
                    <span>{post.published_at}</span>
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
