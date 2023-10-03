import {
  BadgeInfo,
  Home,
  MailCheck,
  Newspaper,
  UserSquare2,
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
];

export const rightMenu = [
  {
    label: "Get In Touch",
    name: "subscribe",
    active: false,
    icon: MailCheck,
  },
];
