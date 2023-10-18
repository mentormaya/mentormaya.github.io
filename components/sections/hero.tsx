import React, { MouseEventHandler } from "react";
import Image from "next/image";
// eslint-disable-next-line camelcase
import { Kaushan_Script } from "next/font/google";

import { Button } from "@/components/ui/button";
import { cn } from "@/helper/utils";
import { info } from "@/components/data/info";

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
  salutation = "I",
  audience = "am",
  button = "Know me More!",
  image = "/images/hero.svg",
  action,
}: Props) {
  return (
    <section className="flex justify-between content-center">
      <div className="w-full flex flex-col items-starts justify-center p-4">
        <h2
          className={cn(
            font.className,
            "text-2xl font-semibold text-left mb-2 italic text-primary-light"
          )}
        >
          {`${salutation} `}{" "}
          <span className="py-2 px-4 ml-2 bg-primary-light dark:bg-primary-dark bg-opacity-50 rounded-md text-secondary-light dark:text-secondary-dark">{`${audience} `}</span>{" "}
        </h2>
        <h1 className="text-3xl font-bold">{`${options[0] ?? info.name}`}</h1>
        <p className="my-2 text-primary-light dark:text-primary-dark">
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
