import React from "react";
import Link from "next/link";

import { cn } from "@/helper/utils";

interface Content {
  text: string;
  url?: string;
}

interface Props {
  title?: string;
  type: string;
  content: Content[];
  animated?: boolean;
  left?: boolean;
  variant?: string;
  hover?: boolean;
}

interface ItemProps {
  item: string;
  variant?: string;
  hidden?: boolean;
  border?: boolean;
  style?: boolean;
  className?: string;
  link?: string;
}

interface ElementProps {
  type: string;
  content: Content[];
  variant?: string;
}

const Item = async ({
  item,
  variant = "SUCCESS",
  hidden = false,
  border = true,
  style = true,
  className,
  link,
}: ItemProps) => {
  return (
    <li
      className={cn(
        "rounded-md px-4 shadow-md cursor-pointer",
        "hover:underline",
        style && variant === "SUCCESS" && "bg-green-200 text-green-500",
        style && variant === "SUCCESS" && border && "border border-green-500",
        style &&
          variant === "DANGER" &&
          "bg-red-200 text-red-500 border border-red-500",
        style && variant === "DANGER" && border && "border border-red-500",
        className
      )}
      aria-hidden={hidden}
    >
      {link ? <Link href={link}>{item}</Link> : item}
    </li>
  );
};

function Elements({ type, content, variant }: ElementProps) {
  switch (type) {
    case "text":
      return (
        <>
          {content.map(item => (
            <Item
              key={item.url ?? item.text}
              item={item.text}
              variant={variant}
            />
          ))}
          {content.map(item => (
            <Item
              key={item.url ?? item.text}
              item={item.text}
              variant={variant}
              hidden
            />
          ))}
        </>
      );
    case "post":
      return (
        <>
          {content.map(item => (
            <Item
              key={item.url ?? item.text}
              item={item.text}
              variant={variant}
              link={item.url}
            />
          ))}
          {content.map(item => (
            <Item
              key={item.url ?? item.text}
              item={item.text}
              variant={variant}
              link={item.url}
              hidden
            />
          ))}
        </>
      );

    default:
      break;
  }
}

function Slider({
  title,
  type,
  content,
  animated = true,
  left = true,
  variant,
  hover = true,
}: Props) {
  // TODO disable the animation if `prefers-reduced-motion: reduce`
  return (
    <div
      className={cn(
        "scroller mx-12 container m-auto",
        // "border border-red-600", // debugging option
        animated &&
          "overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)]"
      )}
    >
      {title && <div className="">{title}</div>}
      <ul
        className={cn(
          "scroller__inner flex items-center justify-center md:justify-start gap-8 py-1",
          hover && "hover:paused",
          // "border border-green-600", // debugging option
          animated && "w-max flex-nowrap",
          animated && left
            ? "animate-infinite-scroll-fast"
            : "animate-infinite-scroll-slow-reverse"
        )}
      >
        <Elements type={type} content={content} variant={variant} />
      </ul>
    </div>
  );
}

export default Slider;
