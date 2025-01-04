import React from "react";

function CategoryTag({ cat }: { cat: string }) {
  return (
    <div className="">
      <span className="truncate text-xs bg-gray-900 text-white font-sans font-bold text-md px-3 py-1 rounded-full">
        {cat.slice(0, 20)}
      </span>
    </div>
  );
}

export default CategoryTag;
