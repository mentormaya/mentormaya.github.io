import { cn } from "@/helper/utils";
import React from "react";

interface Props {
  title?: string;
  type: string;
  content: string[];
  animated?: boolean;
}

function Slider({ title, type, content, animated = true }: Props) {
  return (
    <div
      className={cn(
        "scroller container max-w-full",
        "border border-red-600", // debugging option
        animated && "overflow-hidden"
      )}
    >
      {title && <div className="">{title}</div>}
      <div
        className={cn(
          "scroller__inner flex gap-8 flex-nowrap py-1",
          "border border-green-600" // debugging option
        )}
      >
        {type === "text" &&
          content.map(item => {
            return <p>{item}</p>;
          })}
      </div>
    </div>
  );
}

export default Slider;
