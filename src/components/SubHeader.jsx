import React from "react";
import Link from "next/link";

export default function SubHeader() {
  return (
    <div className="flex gap-2">
      <Link href={"/blog"}>All</Link>
      <Link href={"/blog/design"}>Design</Link>
      <Link href={"/blog/travel"}>Travel</Link>
      {/* <Link>Fashion</Link>
      <Link>Technology</Link>
      <Link>Branding</Link> */}
    </div>
  );
}
