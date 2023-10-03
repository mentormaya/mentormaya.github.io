import {
  BadgeInfo,
  Home,
  MailCheck,
  Newspaper,
  UserSquare2,
  Workflow,
} from "lucide-react";

export const mainMenu = [
  {
    label: "Home",
    name: "home",
    active: true,
    icon: Home,
  },
  {
    label: "About",
    name: "about",
    active: false,
    icon: BadgeInfo,
  },
  {
    label: "Blog",
    name: "blog",
    active: false,
    icon: Newspaper,
  },
  {
    label: "Contact",
    name: "contact",
    active: false,
    icon: UserSquare2,
  },
  {
    label: "Portfolio",
    name: "portfolio",
    active: false,
    icon: Workflow,
  },
  {
    label: "Utilites",
    name: "utilites",
    active: false,
    icon: Workflow,
  },
];

export const rightMenu = [
  {
    label: "Get In Touch",
    name: "subscribe",
    active: false,
    icon: MailCheck,
  },
];
