import React from "react";
import Image from "next/image";

import MainNav from "@/components/sections/main-nav";
import { posts } from "@/constants/posts";
import TopBar from "./top-bar";
import Slider from "./slider";

interface Props {
  slider?: boolean;
}

function Header({ slider = true }: Props) {
  return (
    <header className="sticky top-0 w-full rounded shadow-md shadow-zinc-500">
      <TopBar />
      <div className="bg-primary-fill-light  shadow-sm shadow-zinc-500">
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
      {slider && <Slider type="post" content={posts} />}
    </header>
  );
}

export default Header;
