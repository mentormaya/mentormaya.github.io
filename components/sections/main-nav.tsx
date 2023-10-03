/* eslint-disable prettier/prettier */
import React from "react";

import { mainMenu, rightMenu } from "@/components/data/menus";

import { cn } from "@/helper/utils";

interface MainNavProps {
  className?: string;
}

function MainNav({ className }: MainNavProps) {
  return (
    <nav
      className={cn(
        "w-full flex flex-row justify-between content-center",
        className
      )}
    >
      <ul className="flex">
        {mainMenu.map(menu => (
          <li
            key={menu.name}
            className="inline-flex capitalize text-center p-4"
          >
            {menu.label}
          </li>
        ))}
      </ul>
      <ul className="flex">
        {rightMenu.map(menu => (
          <li
            key={menu.name}
            className="inline-flex capitalize text-center p-4"
          >
            {menu.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MainNav;
