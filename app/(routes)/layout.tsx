import React from "react";
import "@/public/css/global.css";
import type { Metadata } from "next";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Ajay Singh",
  description: "Main website for the Portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="">{children}</div>
      <Footer />
    </>
  );
}
