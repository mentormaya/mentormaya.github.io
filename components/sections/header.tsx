import React from "react";
import Image from "next/image";

import MainNav from "@/components/sections/main-nav";
import TopBar from "./top-bar";
import FlashMessages from "./flash-messages";

function Header() {
  return (
    <header className="shadow-md rounded">
      <TopBar />
      <div className="container navigation flex content-center justify-start gap-4 p-2">
        <div className="brand mr-4 px-4">
          <Image
            alt="Logo"
            src="/images/full_code.svg"
            width={128}
            height={128}
          />
        </div>
        <MainNav />
      </div>
      <FlashMessages />
    </header>
  );
}

export default Header;
