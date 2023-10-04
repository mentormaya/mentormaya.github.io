import React from "react";
import "@/public/css/globals.css";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="mt-[6rem]">{children}</div>
      <Footer />
    </>
  );
}
