import Link from "next/link";

import { angelina } from "@/components/local-fonts";
import Social from "@/components/social";
import { ModeToggle } from "@/components/theme-toggle";
import { navigation } from "@/data/navigation";
import { resume } from "@/data/resume";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <ModeToggle variant={"ghost"} className="absolute top-4 right-4 animate-fade-in bg-inherit text-white hover:bg-slate-100/80" />
      <nav className="animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="duration-500 text-zinc-500 hover:text-zinc-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      <h1
        className={[
          "py-1.5 px-0.5 z-10 text-4xl text-transparent",
          "bg-white cursor-default text-edge-outline animate-title",
          "font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text",
          angelina.className,
        ].join(" ")}
      >
        {resume.name}
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      <div className="my-12 text-center animate-fade-in">
        <h2 className="text-md text-zinc-500 ">
          &ldquo;{resume.quote}&rdquo; -{" "}
          <Link
            target="_blank"
            href="/blog"
            className="underline duration-500 italic hover:text-zinc-300"
          >
            {resume.quote_author}
          </Link>
        </h2>
      </div>

      <Social />

      <div className="animate-fade-in mt-12">
        <Link
          href="/contact"
          className="text-zinc-400 duration-500 border border-zinc-600 hover:border-zinc-200 py-3 px-8 rounded-lg hover:text-zinc-100"
        >
          Let &rsquo; s Talk
        </Link>
      </div>

      <div className="absolute bottom-0 left-0 p-4 text-sm text-zinc-500 animate-fade-in">
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

      <div className="absolute bottom-0 right-0 p-4 text-sm text-zinc-500 animate-fade-in">
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
    </div>
  );
}
