import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Nunito } from "next/font/google";

import { cn } from "@/helper/utils";
import {
  CardItemProps,
  ElementProps,
  ItemProps,
  Props,
} from "@/components/props/slider";

const nunito = Nunito({
  subsets: ["latin"],
});

const CardItem = async ({
  title,
  image,
  url,
  hidden = false,
  logo = false,
}: CardItemProps) => {
  return (
    <li
      key={url ?? title}
      className={cn(
        "cursor-pointer relative",
        !logo &&
          "bg-secondary-light bg-opacity-30 h-28 w-40 rounded-xl border-2 border-primary-light shadow-lg shadow-primary-light"
      )}
      aria-hidden={hidden}
    >
      <Link href={url}>
        <Image
          src={image}
          alt="Feature Image"
          height={80}
          width={150}
          className={cn(!logo && "rounded-xl h-full w-full")}
          style={logo ? { height: "60px", width: "auto" } : {}}
        />
        {!logo && (
          <p className="absolute w-full bottom-0 bg-primary-light bg-opacity-60 text-sm text-secondary-light p-1 rounded-md rounded-t-none">
            {title}
          </p>
        )}
      </Link>
    </li>
  );
};

const Item = async ({
  item,
  variant,
  hidden = false,
  border = true,
  style = true,
  className,
  link,
}: ItemProps) => {
  return (
    <li
      className={cn(
        nunito.className,
        "rounded-md px-4 cursor-pointer text-secondary-light italic",
        "bg-primary-fill-light bg-opacity-20 dark:bg-secondary-fill-dark border border-secondary-light dark:border-primary-dark border-opacity-75",
        "hover:underline",
        style &&
          variant === "SUCCESS" &&
          "bg-green-200 text-green-500 dark:bg-green-300 dark:text-green-700",
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
    case "card":
      return (
        <>
          {content.map(item => (
            <CardItem
              title={item.text}
              image={item.feature_image}
              url={item.url}
              key={item.url}
            />
          ))}
          {content.map(item => (
            <CardItem
              title={item.text}
              image={item.feature_image}
              url={item.url}
              hidden
            />
          ))}
          {content.map(item => (
            <CardItem
              title={item.text}
              image={item.feature_image}
              url={item.url}
              hidden
            />
          ))}
        </>
      );
    case "logo":
      return (
        <>
          {content.map(item => (
            <CardItem
              title={item.text}
              image={item.feature_image}
              url={item.url}
              key={item.url}
              logo
            />
          ))}
          {content.map(item => (
            <CardItem
              title={item.text}
              image={item.feature_image}
              url={item.url}
              hidden
              logo
            />
          ))}
          {content.map(item => (
            <CardItem
              title={item.text}
              image={item.feature_image}
              url={item.url}
              hidden
              logo
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
        "scroller mx-12 container m-auto bg-primary-fill-light-muted dark:bg-primary-fill-dark-muted mb-8",
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
