import { Navigation } from "@/components/nav";
import Link from "next/link";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <div className="relative my-6 ">
        <Navigation gitTheme />
        <div className="container pt-8 mx-auto lg:pt-16 px-2 mb-12">{children}</div>
        <div className="fixed bottom-0 left-0 p-4 text-sm text-zinc-500 animate-fade-in">
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

        <div className="fixed bottom-0 right-0 p-4 text-sm text-zinc-500 animate-fade-in">
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
    </div>
  );
}
