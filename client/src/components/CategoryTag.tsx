import React from "react";

function CategoryTag({ cat }: { cat: string }) {
  return (
    <div className="">
      <span className="truncate text-xs bg-amber-200 text-amber-900 font-sans font-bold bg-opacity-50 text-md border border-amber-600 px-2 py-1 rounded-full">
        {cat}
      </span>
    </div>
  );
}

export default CategoryTag;
