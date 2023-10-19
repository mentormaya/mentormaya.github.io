"use client";

import { cn } from "@/helper/utils";
import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { TypeAnimation } from "react-type-animation";
import { Props } from "@/components/types/typer";

function Typer({
  sequence,
  className,
  wrapper = "p",
  repeat = Infinity,
  cursor = true,
  speed = 40,
}: Props) {
  return (
    <TypeAnimation
      sequence={sequence}
      className={cn("text-secondary-light", className)}
      wrapper={wrapper}
      repeat={repeat}
      cursor={cursor}
      speed={speed}
    />
  );
}

export default Typer;
