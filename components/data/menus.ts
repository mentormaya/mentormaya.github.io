import {
  BadgeInfo,
  Download,
  Home,
  LucideIcon,
  MailCheck,
  Newspaper,
  QrCode,
  Settings,
  UserSquare2,
  Workflow,
} from "lucide-react";

export interface MenuProps {
  label: string;
  link: string;
  icon: LucideIcon;
  submenu?: {
    label: string;
    link: string;
    icon: LucideIcon;
    description?: string;
  }[];
}

export const mainMenu: MenuProps[] = [
  {
    label: "Home",
    link: "/",
    icon: Home,
  },
  {
    label: "About",
    link: "about",
    icon: BadgeInfo,
  },
  {
    label: "Blog",
    link: "blog",
    icon: Newspaper,
  },
  {
    label: "Contact",
    link: "contact",
    icon: UserSquare2,
  },
  {
    label: "Portfolio",
    link: "portfolio",
    icon: Workflow,
  },
  {
    label: "Utilites",
    link: "utilites",
    icon: Settings,
    submenu: [
      {
        label: "Downloads",
        link: "downloads",
        icon: Download,
        description: "Download the available content of your choice for free.",
      },
      {
        label: "QR Code Generator",
        link: "qr-code-generator",
        icon: QrCode,
        description: "Generate a QR Code for variety of purposes.",
      },
      {
        label: "Resume Generator",
        link: "resume-generator",
        icon: UserSquare2,
        description: "Generate a Resume/CV with your personal Information.",
      },
    ],
  },
];

export const rightMenu = [
  {
    label: "Get In Touch",
    link: "#",
    icon: MailCheck,
  },
];
