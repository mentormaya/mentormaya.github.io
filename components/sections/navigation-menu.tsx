"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Separator } from "@/components/ui/separator";

import { mainMenu } from "@/components/data/menus";
import { cn } from "@/helper/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { GitFork, Info, LucideIcon, Workflow } from "lucide-react";
import { ProjectProps } from "../props/projects";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: LucideIcon }
>(({ className, title, icon, children, ...props }, ref) => {
  const Icon = icon ?? Info;
  return (
    <li className="border border-zinc-300 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:shadow-md">
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "flex flex-col justify-center text-center select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <Icon className="h-10 w-10 m-auto" />
          <div className="text-bold font-medium leading-none">{title}</div>
          {children && (
            <>
              <Separator />
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground text-left">
                {children}
              </p>
            </>
          )}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

interface NavProps {
  projects: ProjectProps[];
}

function NavMenu({ projects }: NavProps) {
  const pathname = usePathname();

  const submenus = projects.map(project => {
    return {
      label: project.name,
      link: project.home,
      icon: GitFork,
      description: project.description,
    };
  });

  mainMenu[mainMenu.findIndex(menu => menu.link === "portfolio")] = {
    label: "Portfolio",
    link: "portfolio",
    icon: Workflow,
    submenu: [
      {
        label: "All Projects",
        link: "portfolio",
        icon: GitFork,
        description:
          "Go to the Projects page where you can expore the projects listed here in more details.",
      },
      ...submenus,
    ],
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {mainMenu.map(menu => {
          const Icon = menu.icon;
          const active =
            menu.link === "/" ? pathname === "/" : pathname.includes(menu.link);
          if (menu.submenu) {
            return (
              <NavigationMenuItem key={menu.link}>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent",
                    active &&
                      "bg-zinc-100 dark:bg-zinc-800 shadow-inner shadow-zinc-400 dark:shadow-zinc-900"
                  )}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {menu.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul
                    className={cn(
                      "grid w-[650px] gap-2 p-4 md:grid-cols-3 overflow-y-auto",
                      menu.submenu.length > 3 && "h-96"
                    )}
                  >
                    {menu.submenu.map(submenu => {
                      return (
                        <ListItem
                          key={submenu.link}
                          title={submenu.label}
                          href={
                            menu.link !== "portfolio"
                              ? `/${menu.link}/${submenu.link}`
                              : `/${submenu.link}`
                          }
                          icon={submenu.icon}
                        >
                          {submenu.description}
                        </ListItem>
                      );
                    })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          }
          return (
            <NavigationMenuItem key={menu.link}>
              <Link href={`/${menu.link}`} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent",
                    active &&
                      "bg-zinc-100 dark:bg-zinc-800 shadow-inner shadow-zinc-400 dark:shadow-zinc-900"
                  )}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {menu.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default NavMenu;
