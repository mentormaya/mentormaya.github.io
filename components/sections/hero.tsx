import React, { MouseEventHandler } from "react";
import Image from "next/image";
// eslint-disable-next-line camelcase
import { Kaushan_Script } from "next/font/google";

import { Button } from "@/components/ui/button";
import { cn } from "@/helper/utils";
import { info } from "@/constants/info";

const font = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
});

interface Props {
  salutation?: string;
  audience?: string;
  options: string[];
  description: string;
  button?: string;
  image?: string;
  action?: MouseEventHandler<HTMLButtonElement>;
}

function Hero({
  options,
  description,
  salutation = "Hello,",
  audience = "I 'm",
  button = "Know me More!",
  image = "/images/hero.svg",
  action,
}: Props) {
  return (
    <section className="flex justify-between content-center">
      <div className="w-full flex flex-col items-center justify-center p-4 gap-4">
        <h2
          className={cn(
            font.className,
            "text-2xl font-semibold text-left mb-2 italic text-primary-light"
          )}
        >
          {`${salutation} `}{" "}
          <span className="py-1 px-4 ml-2 bg-primary-light dark:bg-primary-dark bg-opacity-50 border border-primary-light rounded-md text-secondary-light dark:text-secondary-dark">{`${audience} `}</span>{" "}
        </h2>
        <h1
          className={cn(
            font.className,
            "text-4xl font-extrabold text-secondary-light"
          )}
        >{`${options[0] ?? info.name}`}</h1>
        <p className="my-2 mt-8 text-secondary-light-muted font-semibold dark:text-primary-dark">
          {description}
        </p>
        <Button
          className="mt-2 w-max bg-primary-fill-light hover:bg-primary-fill-light shadow-md hover:bg-opacity-90"
          onClick={action}
        >
          {button}
        </Button>
      </div>
      <Image src={image} alt="Hero Image" width={500} height={500} />
    </section>
  );
}

export default Hero;
