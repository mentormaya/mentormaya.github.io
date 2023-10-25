import React from "react";
import { SectionHeading } from "@/components/sections/heading";
import { Content } from "@/components/props/slider";
import Slider from "@/components/sections/slider";

interface Props {
  content: Content[];
  section?: boolean;
}

function Logos({ content, section = false }: Props) {
  if (section)
    return (
      <section>
        <SectionHeading title="Trusted by the world’s most innovative teams" />
        <div className="py-12">
          <Slider type="logo" content={content} left={false} />
        </div>
      </section>
    );
  return (
    <div className="pt-12">
      <Slider type="logo" content={content} left={false} />
    </div>
  );
}

export default Logos;
