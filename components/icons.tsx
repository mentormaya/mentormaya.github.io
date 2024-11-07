import { cn } from "@/lib/utils";
import { Facebook, Github, Instagram, Linkedin, Mail, Twitter, Youtube } from "lucide-react";

interface Props {
  name: string;
  className?: string;
}

const Icon = ({ name, className }: Props) => {
  switch (name) {
    case "facebook":
      return <Facebook className={cn("h-4 w-4", className)} />;
      break;
    case "instagram":
      return <Instagram className={cn("h-4 w-4", className)} />;
      break;
    case "twitter":
      return <Twitter className={cn("h-4 w-4", className)} />;
      break;
    case "email":
      return <Mail className={cn("h-4 w-4", className)} />;
      break;
    case "youtube":
      return <Youtube className={cn("h-4 w-4", className)} />;
      break;
    case "github":
      return <Github className={cn("h-4 w-4", className)} />;
      break;
    case "linkedin":
      return <Linkedin className={cn("h-4 w-4", className)} />;
      break;

    default:
      return <Github className={cn("h-4 w-4", className)} />;
      break;
  }
}

export default Icon