import React from "react";
import { Category } from "../lib/definitions";
import Link from "next/link";

function CategoryTag({ categ }: { categ: Category }) {
  return (
    <Link href={`/categories/categ.slug`}>
      <div className="py-2 px-3 border border-primary rounded-full min-w-16 text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all">
        <span className="font-sans font-bold text-sm">{categ.name}</span>
      </div>
    </Link>
  );
}

export default CategoryTag;
