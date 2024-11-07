import Link from "next/link";

import {
  Facebook,
  Github,
  Instagram,
  Mail,
  Twitter,
  Youtube,
} from "lucide-react";
import { socialMedia } from "@/data/social";
import type { Social } from "@/types/social";

export const socials: Social[] = [];

if (socialMedia.facebook) socials.push({
  icon: <Facebook size={20} />,
  href: socialMedia.facebook.href,
  label: socialMedia.facebook.label,
  handle: socialMedia.facebook.handle,
});

if (socialMedia.instagram) socials.push({
  icon: <Instagram size={20} />,
  href: socialMedia.instagram.href,
  label: socialMedia.instagram.label,
  handle: socialMedia.instagram.handle,
});

if (socialMedia.twitter) socials.push({
  icon: <Twitter size={20} />,
  href: socialMedia.twitter.href,
  label: socialMedia.twitter.label,
  handle: socialMedia.twitter.handle,
});

if (socialMedia.email) socials.push({
  icon: <Mail size={20} />,
  href: socialMedia.email.href,
  label: socialMedia.email.label,
  handle: socialMedia.email.handle,
});

if (socialMedia.youtube) socials.push({
  icon: <Youtube size={20} />,
  href: socialMedia.youtube.href,
  label: socialMedia.youtube.label,
  handle: socialMedia.youtube.handle,
});

if (socialMedia.github) socials.push({
  icon: <Github size={20} />,
  href: socialMedia.github.href,
  label: socialMedia.github.label,
  handle: socialMedia.github.handle,
});

export interface Props {
  icononly?: boolean;
}

const Social = ({ icononly = true }: Props) => {
  return (
    <div className="social-links flex animate-fade-in">
      {socials.map((s) => (
        <Link
          href={s.href}
          key={s.href}
          rel="noopener noreferrer"
          title={s.label == "Github" ? `Explore SourceCode @${s.label}` : `Connect with me @${s.handle}`}
          target="_blank"
          className="relative flex flex-col items-center duration-700 group md:gap-8 px-4"
        >
          <span className="relative z-10 flex items-center justify-center w-12 h-12 text-md duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
            {s.icon}
          </span>{" "}
          {!icononly && (
            <div className="z-10 flex flex-col items-center">
              <span className="font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                {s.handle}
              </span>
              <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                {s.label}
              </span>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Social;
