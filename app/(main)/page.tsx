import Heading from "@/components/sections/heading";
import Hero from "@/components/sections/hero";

import { options, description } from "@/constants/hero-options";

export default function Home() {
  return (
    <main className="container py-4">
      <section>
        <Heading title="Home Page" />
      </section>
      <Hero options={options} description={description} />
    </main>
  );
}
