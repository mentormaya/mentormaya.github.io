/* eslint-disable prettier/prettier */
import React from "react";

import { rightMenu } from "@/components/data/menus";

import { cn } from "@/helper/utils";
import Link from "next/link";
import { getProjects } from "@/actions/projects";
import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";
import NavMenu from "./navigation-menu";
import { ProjectProps } from "../props/projects";

interface MainNavProps {
  className?: string;
}

async function MainNav({ className }: MainNavProps) {
  const projects = (await getProjects("mentormaya")).map(
    (project: ProjectProps) => {
      return {
        name: project.name,
        home: project.home,
        description: project.description,
      };
    }
  );

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
              className="rounded-full border-primary-light dark:border-primary-dark bg-secondary-light dark:bg-secondary-dark dark:hover:bg-secondary-dark hover:bg-opacity-80 shadow-inner shadow-zinc-400 dark:shadow-zinc-950"
            >
              <Link href={menu.link}>
                <Icon className="h-4 w-4 mr-2" />
                {menu.label}
              </Link>
            </Button>
          );
        })}
        <ModeToggle
          className="rounded-full mx-4 hover:bg-opacity-80"
          variant="ghost"
        />
      </div>
    </div>
  );
}

export default MainNav;
