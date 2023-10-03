import React from "react";
import { ModeToggle } from "@/components/mode-toggle";

function Footer() {
  return (
    <footer className="flex justify-between content-center p-20">
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        copyright@2023. All the rights are reserved.
      </div>

      <ModeToggle />
    </footer>
  );
}

export default Footer;
