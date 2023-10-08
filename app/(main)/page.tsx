import Heading from "@/components/sections/heading";

export default function Home() {
  return (
    <main className="container py-4">
      <section>
        <Heading title="Home Page" />
      </section>
      <section className="flex justify-between content-center">
        <div className="bg-zinc-300 w-full">Hero Section</div>
        <div className="bg-zinc-200 w-full">Image</div>
      </section>
    </main>
  );
}
