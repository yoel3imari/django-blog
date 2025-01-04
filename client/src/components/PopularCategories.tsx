import { Category } from "@/lib/definitions";
import React from "react";

function PopularCategories({ categories }: { categories: Category[] }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {categories.map((category) => (
        <div
          key={category.id}
          className="bg-card font-bold h-20 flex items-center justify-center text-xl shadow-lg p-4 truncate text-center rounded-xl"
        >
          <span>{category.name.slice(0, 20)}</span>
        </div>
      ))}
    </div>
  );
}

export default PopularCategories;
