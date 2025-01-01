import { BlogPost } from "@/lib/definitions";
import React from "react";

function LatestPosts({posts}: {posts: BlogPost[]}) {
  return (
    <div className="grid grid-rows-3 grid-cols-4">
      <div className="col-span-3 row-span-3"></div>
      <div></div>
    </div>
  );
}

export default LatestPosts;
