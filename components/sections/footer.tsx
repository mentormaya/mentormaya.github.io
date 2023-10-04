import React from "react";

function Footer() {
  return (
    <footer className="container flex justify-center content-center border-t-2 fixed bottom-0">
      <div className="flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        &copy;copyright@{new Date().getFullYear()}. All the rights are reserved.
      </div>
    </footer>
  );
}

export default Footer;
