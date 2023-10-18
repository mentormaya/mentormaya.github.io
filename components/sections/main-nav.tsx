/* eslint-disable prettier/prettier */
import React from "react";

import { rightMenu } from "@/constants/menus";

import { cn } from "@/helper/utils";
import Link from "next/link";
import { getProjects } from "@/actions/projects";
import { Button } from "../ui/button";
import { ModeToggle } from "./mode-toggle";
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
              className="group/btn rounded-full border-primary-light dark:border-primary-dark bg-primary-fill-light-muted dark:bg-primary-fill-dark-muted hover:bg-opacity-80 shadow-inner shadow-zinc-400 dark:shadow-zinc-950"
            >
              <Link
                href={menu.link}
                className="text-primary-light dark:text-primary-dark group-hover/btn:text-secondary-light"
              >
                <Icon className="h-4 w-4 mr-2 text-primary-light dark:text-primary-dark group-hover/btn:text-secondary-light" />
                {menu.label}
              </Link>
            </Button>
          );
        })}
        <ModeToggle
          className="rounded-full mx-4 text-secondary-light"
          variant="ghost"
        />
      </div>
    </div>
  );
}

export default MainNav;
