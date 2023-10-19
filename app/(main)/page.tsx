import Heading from "@/components/sections/heading";
import Hero from "@/components/sections/hero";
import Slider from "@/components/sections/slider";

import { options, description } from "@/constants/hero-options";
import { posts } from "@/constants/posts";

export default function Home() {
  return (
    <main className="container py-4">
      <section>
        <Heading title="Home Page" />
      </section>
      <Hero options={options} description={description} />
      <Slider type="card" content={posts} />
    </main>
  );
}
