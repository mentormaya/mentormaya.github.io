import Heading, { SectionHeading } from "@/components/sections/heading";
import Hero from "@/components/sections/hero";
import Logos from "@/components/sections/logos";
import Skills from "@/components/sections/skills";
import Slider from "@/components/sections/slider";

import { options, description } from "@/constants/hero-options";
import { posts } from "@/constants/posts";

export default function Home() {
  return (
    <main className="container py-4">
      <Heading title="Home Page" />
      <Hero options={options} description={description} />
      <Skills />
      <section>
        <SectionHeading title="Work(ed) with" />
        <Logos />
      </section>
      <section>Experiences</section>
      <section>
        <SectionHeading title="From the Blog: Latest Posts" />
        <Slider type="card" content={posts} />
      </section>
      <section>Let me Know?</section>
    </main>
  );
}
