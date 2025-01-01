import React from "react";

function Tags({ tags }: { tags: string }) {
  return (
    <div className="flex items-center gap-2">
      {tags.split(",").map((t) => (
        <span
          key={t}
          className="truncate text-xs bg-lime-200 text-lime-600 font-bold bg-opacity-50 text-md border border-lime-600 rounded px-2 py-1 rounded-full"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

export default Tags;
