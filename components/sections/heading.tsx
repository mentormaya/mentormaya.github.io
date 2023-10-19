import React from "react";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/helper/utils";

interface Props {
  title: string;
  children?: React.ReactNode;
  className?: string;
  textClassName?: string;
}

function Heading({ title, children, className, textClassName }: Props) {
  return (
    <section>
      <div
        className={cn("section-content flex justify-between mb-2", className)}
      >
        <h1
          className={cn(
            "text-primary-light dark:text-primary-dark font-semibold",
            textClassName
          )}
        >
          {title}
        </h1>
        {children}
      </div>
      <Separator />
    </section>
  );
}

export default Heading;
