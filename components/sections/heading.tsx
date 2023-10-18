import React from "react";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/helper/utils";

interface Props {
  title: string;
  children?: React.ReactNode;
}

function Heading({ title, children }: Props) {
  return (
    <section>
      <div className="section-content flex justify-between mb-2">
        <h1
          className={cn(
            "text-primary-light dark:text-primary-dark font-semibold"
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
