import React, { MouseEventHandler } from "react";
import Image from "next/image";
// eslint-disable-next-line camelcase
import { Kaushan_Script } from "next/font/google";

import { info } from "@/constants/info";
import { Button } from "@/components/ui/button";
import { cn } from "@/helper/utils";
import HeroTyper from "@/components/parts/hero-typer";
import { sequenceT } from "@/components/types/typer";
import Typer from "../parts/typer";

const font = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
});

interface Props {
  salutation?: string;
  audience?: string;
  options: sequenceT;
  description: string;
  button?: string;
  image?: string;
  action?: MouseEventHandler<HTMLButtonElement>;
}

function Hero({
  options,
  description,
  salutation = "Hello,",
  audience = "I am",
  button = "Know me More!",
  image = "/images/hero.svg",
  action,
}: Props) {
  return (
    <section className="flex justify-between content-center">
      <div className="w-full flex flex-col items-center justify-center gap-2 bg-secondary-light bg-opacity-30 rounded-2xl mt-2 p-8">
        <h2
          className={cn(
            "text-2xl font-semibold text-left italic text-secondary-light"
          )}
        >
          {`${salutation} `}{" "}
          <span className="py-1 px-4 ml-2 text-primary-light dark:text-primary-dark">{`${audience} `}</span>{" "}
        </h2>
        <HeroTyper sequence={options} className={font.className} wrapper="h1" />
        {/* <p className="my-2 mt-8 text-secondary-light font-semibold dark:text-primary-dark">
          {description}
        </p> */}
        <Typer sequence={[description]} repeat={0} />
        <div className="action flex justify-around gap-4">
          <Button
            className="mt-2 w-max bg-primary-fill-light bg-opacity-80 hover:bg-primary-fill-light hover:shadow-2xl hover:bg-opacity-100"
            onClick={action}
            variant="default"
          >
            {button}
          </Button>
          <Button
            className="mt-2 w-max shadow-2xl border-2 border-primary-light text-secondary-light hover:text-secondary-light hover:bg-primary-fill-light hover:bg-opacity-80"
            onClick={action}
            variant="outline"
          >
            Resume/CV
          </Button>
        </div>
      </div>
      <Image src={image} alt="Hero Image" width={500} height={500} />
    </section>
  );
}

export default Hero;
