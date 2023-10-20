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
}

export function SectionHeading({ title, className }: SectionProps) {
  return (
    <div
      className={cn(
        "section-header grid grid-cols-[auto_1fr] my-2 items-center gap-4 px-2",
        className
      )}
    >
      <h1
        className={cn(
          "text-primary-light dark:text-primary-dark font-semibold"
        )}
      >
        {title}
      </h1>
      <Separator className="h-1 rounded-xl" />
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
