/* eslint-disable prettier/prettier */
import React from "react";

import { rightMenu } from "@/components/data/menus";

import { cn } from "@/helper/utils";
import Link from "next/link";
import { getProjects } from "@/actions/projects";
import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";
import NavMenu from "./navigation-menu";

interface MainNavProps {
  className?: string;
}

async function MainNav({ className }: MainNavProps) {
  const projects = await getProjects(
    "https://api.github.com/users/mentormaya/repos"
  );

  console.log(projects);

  return (
    <div
      className={cn(
        "w-full flex flex-row justify-between content-center py-1",
        className
      )}
    >
      <NavMenu projects={projects} />
      <div className="flex flex-row justify-center content-center my-auto">
        {rightMenu.map(menu => {
          const Icon = menu.icon;
          return (
            <Button
              asChild
              key={menu.link}
              variant="outline"
              className="rounded-full border-zinc-400 dark:border-zinc-300"
            >
              <Link href={menu.link}>
                <Icon className="h-4 w-4 mr-2" />
                {menu.label}
              </Link>
            </Button>
          );
        })}
        <ModeToggle className="rounded-full mx-4" variant="ghost" />
      </div>
    </div>
  );
}

export default MainNav;
