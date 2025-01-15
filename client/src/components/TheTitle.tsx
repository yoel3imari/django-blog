import Link from "next/link";
import React from "react";

function TheTitle() {
  return (
    <Link href="/">
      <h1 className="text-6xl font-bold text-primary text-center">Blogon</h1>
    </Link>
  );
}

export default TheTitle;
