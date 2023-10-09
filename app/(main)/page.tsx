import Heading from "@/components/sections/heading";
import Hero from "@/components/sections/hero";

const options = ["Ajay", "Engineer", "Designer", "Enthusiast"];
const description =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sit optio repellat reiciendis, aliquam quisquam molestiae saepe delectus, eaque maiores dolore unde, quas soluta quos.";

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
