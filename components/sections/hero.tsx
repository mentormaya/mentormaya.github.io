import React, { MouseEventHandler } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

interface Props {
  salutation?: string;
  audience?: string;
  text?: string;
  options: string[];
  description: string;
  button?: string;
  image?: string;
  action?: MouseEventHandler<HTMLButtonElement>;
}

function Hero({
  options,
  description,
  salutation = "Hello",
  audience = "there!",
  text = "I am a",
  button = "Know me More!",
  image = "/images/hero.svg",
  action,
}: Props) {
  return (
    <section className="flex justify-between content-center">
      <div className="w-full flex flex-col items-starts justify-center p-4">
        <h2 className="text-3xl font-semibold text-left">
          {`${salutation} `} <span>{`${audience} `}</span>{" "}
        </h2>
        <h1 className="text-3xl font-bold">
          {`${text} `} <span>{`${options[0]}`}</span>
        </h1>
        <p className="my-2">{description}</p>
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
