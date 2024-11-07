"use client";
import React, { useEffect } from "react";

import { generateSlug, TOCItem } from "@/lib/posts";
import { cn } from "@/lib/utils";

interface TOCProps {
  toc: TOCItem[];
  className?: string;
}

interface TOCProps {
  toc: TOCItem[];
}

const TOCList: React.FC<TOCProps> = ({ toc }) => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLAnchorElement;
      if (target.tagName === "A" && target.hash) {
        const element = document.querySelector(target.hash);
        if (element) {
          const offset = 80; // Adjust this value to match the height of your sticky navigation
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });

          event.preventDefault();
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <ul className="text-left list-inside">
      {toc.map((item, index) => (
        <li key={index} style={{ marginLeft: `${item.level * 10}px` }}>
          <a
            href={`#${generateSlug(item.text)}`}
            className={cn(
              "block text-zinc-400 hover:text-purple-500 duration-1000 ease-in-out leading-8"
            )}
          >
            {item.text}
          </a>
          {item.children && item.children.length > 0 && (
            <TOCList toc={item.children} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default TOCList;
