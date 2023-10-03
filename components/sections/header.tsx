import React from "react";
import Image from "next/image";

import MainNav from "@/components/sections/main-nav";

function Header() {
  return (
    <header className="container grid content-center justify-start gap-4 p-2 shadow-md rounded">
      <div className="brand mr-4 p-4">
        <Image
          alt="Logo"
          src="/images/full_code.svg"
          width={128}
          height={128}
        />
      </div>
      <MainNav />
    </header>
  );
}

export default Header;
