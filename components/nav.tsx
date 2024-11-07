"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Github } from "lucide-react";
import { usePathname } from 'next/navigation'

import { navigation } from "@/data/navigation";
import { angelina } from "@/components/local-fonts";
import LogoImage from "@/public/favicon/favicon-32x32.png";
import { socialMedia } from "@/data/social";
import { ModeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

interface Props {
  gitTheme?: boolean;
}

export const Navigation: React.FC<Props> = ({ gitTheme = false }: Props) => {
  const ref = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={ref} className="mb-[calc(2rem_+_0.55rem)] lg:mb-[calc(3rem_+_0.55rem)]">
      <div
        className={cn(
          "fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b",
          isIntersecting ?
            "bg-zinc-900/0 border-transparent" :
            "bg-zinc-900/500  border-zinc-800"
        )}
      >
        <div className="container max-w-[90%] flex flex-row items-center justify-between p-2 mx-auto">
          <Link
            href="/"
            className="flex gap-2 duration-200 text-zinc-300 hover:text-zinc-100"
          >
            <Image src={LogoImage} alt="Logo" width={24} height={24} />
            <span className={angelina.className}>Ajay</span>
          </Link>
          <div className="flex gap-16 items-center">
            <nav className="animate-fade-in duration-75">
              <ul className="flex items-center justify-center gap-4">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "duration-500 text-zinc-500 hover:text-zinc-300",
                        pathname.includes(item.href) ? "text-purple-600/80 hover:text-purple-600" : ""
                      )}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex gap-2 items-center">
              <Link
                href={gitTheme ? `${socialMedia.github.theme}` : `${socialMedia.github.href}/${socialMedia.github.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="duration-200 text-zinc-300 hover:text-zinc-100"
              >
                <Github className="h-5 w-5" />
              </Link>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </header >
  );
};
