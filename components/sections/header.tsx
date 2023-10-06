import React from "react";
import Image from "next/image";

import MainNav from "@/components/sections/main-nav";
import TopBar from "./top-bar";
import Slider from "./slider";

const posts = [
  "This is the first Post",
  "This is the second Post",
  "This is the third Post",
  "This is the fourth Post",
  "This is the fifth Post",
  "This is the sixth Post",
  "This is the seventh Post",
];

function Header() {
  return (
    <header className="fixed top-0 w-full rounded shadow-md shadow-zinc-500">
      <TopBar />
      <div className="bg-zinc-300 dark:bg-zinc-700 shadow-sm shadow-zinc-500">
        <div className="container navigation flex content-center justify-start gap-4 py-1">
          <div className="brand mr-4 px-2 flex">
            <Image
              alt="Logo"
              src="/images/full_code.svg"
              width={128}
              height={128}
            />
          </div>
          <MainNav />
        </div>
      </div>
      <Slider type="text" content={posts} />
    </header>
  );
}

export default Header;
