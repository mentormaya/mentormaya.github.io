import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface Props {
  duration?: number;
}

const Footer = ({ duration = 1000 }: Props) => {
  return (
    <footer className="fixed bottom-0 left-0 w-full flex justify-between items-center">
      <div
        className={cn(
          "p-4 text-sm text-zinc-500 animate-fade-in",
          ` duration-${duration}`
        )}
      >
        <p className="text-center">
          Made with ❤️ in <span className="text-2xl">🇳🇵</span> and hosted by{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com"
            title="GitHub"
            className="duration-500 hover:text-zinc-300"
          >
            GitHub
          </Link>
        </p>
      </div>

      <div
        className={cn(
          "p-4 text-sm text-zinc-500 animate-fade-in duration-1000",
          `duration-${duration}`
        )}
      >
        <p className="text-center">
          &copy; {new Date().getFullYear()}{" "}
          <Link
            target="_blank"
            href="/contact"
            className="duration-500 hover:text-zinc-300"
          >
            Ajay Singh
          </Link>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
