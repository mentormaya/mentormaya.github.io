import React from "react";

function Footer() {
  return (
    <footer className="w-full border-t-2 border-primary-light border-opacity-60 bg-secondary-light bg-opacity-70 fixed bottom-0 shadow-inner shadow-zinc-400 italic text-primary-light">
      <div className="container flex justify-center content-center m-auto">
        <div className="flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          &copy;copyright@{new Date().getFullYear()}. All the rights are
          reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
