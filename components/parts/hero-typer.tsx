"use client";

import { cn } from "@/helper/utils";
import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { TypeAnimation } from "react-type-animation";
import { Props } from "@/components/types/typer";

function HeroTyper({ sequence, className, wrapper = "p" }: Props) {
  return (
    <TypeAnimation
      sequence={sequence}
      className={cn("text-4xl font-extrabold text-secondary-light", className)}
      wrapper={wrapper}
      repeat={Infinity}
    />
  );
}

export default HeroTyper;
