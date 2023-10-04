"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
import { Info, LucideIcon } from "lucide-react";
import { RepoProps } from "@/actions/projects";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: LucideIcon }
>(({ className, title, icon, children, ...props }, ref) => {
  const Icon = icon ?? Info;
  return (
    <li className="border border-zinc-300 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800">
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
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

interface NavProps {
  projects: RepoProps[];
}

function NavMenu({ projects }: NavProps) {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {mainMenu.map(menu => {
          const active =
            menu.link === "home"
              ? pathname === "/" || pathname.includes(menu.link)
              : pathname.includes(menu.link);
          if (menu.submenu) {
            return (
              <NavigationMenuItem key={menu.link}>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent",
                    active && "bg-zinc-100 dark:bg-zinc-800"
                  )}
                >
                  {menu.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-2">
                    {menu.submenu.map(submenu => {
                      return (
                        <ListItem
                          key={submenu.link}
                          title={submenu.label}
                          href={submenu.link}
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
              <Link href={menu.link} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent",
                    active && "bg-zinc-100 dark:bg-zinc-800"
                  )}
                >
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
