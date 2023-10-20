import React from "react";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/helper/utils";

interface Props {
  title: string;
  children?: React.ReactNode;
  className?: string;
  textClassName?: string;
}

interface SectionProps {
  title: string;
  className?: string;
  textLocation?: "start" | "center" | "end";
}

export function SectionHeading({
  title,
  className,
  textLocation = "center",
}: SectionProps) {
  return (
    <div
      className={cn(
        "section-header grid grid-cols-[auto_1fr] my-2 items-center gap-4 px-2",
        textLocation === "center" && "grid-cols-[1fr_auto_1fr]",
        textLocation === "end" && "grid-cols-[1fr_auto]",
        className
      )}
    >
      {textLocation !== "start" && <Separator className="h-1 rounded-xl" />}
      <h1
        className={cn(
          "text-secondary-light dark:text-primary-dark font-semibold"
        )}
      >
        {title}
      </h1>
      {textLocation !== "end" && <Separator className="h-1 rounded-xl" />}
    </div>
  );
}

function Heading({ title, children, className, textClassName }: Props) {
  return (
    <section>
      <div
        className={cn(
          "section-content grid grid-cols-2 justify-between mb-2",
          className
        )}
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
