import Heading from "@/components/sections/heading";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ajay Singh | Not Found!",
};

export default function NotFound() {
  return (
    <main className="container py-4">
      <section className="my-2">
        <Heading title="Not Found" />
      </section>
      <section className="flex justify-between content-center">
        <p>Could not find requested resource</p>
        <Link
          href="/"
          className="px-4 py-2 bg-zinc-300 rounded-md hover:bg-zinc-400"
        >
          Return Home
        </Link>
      </section>
    </main>
  );
}
