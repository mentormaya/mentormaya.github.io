import React from "react";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/helper/utils";

interface Props {
  title: string;
}

function Heading({ title }: Props) {
  return (
    <>
      <h1 className={cn("text-black")}>{title}</h1>
      <Separator />
    </>
  );
}

export default Heading;
