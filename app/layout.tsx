import React from "react";
import { ThemeProvider } from "@/providers/theme-provider";
import "@/public/css/global.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { cn } from "@/helper/utils";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

const montserrat = Montserrat({ subsets: ["latin"] });

const { env } = process;

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
    <html lang="en" suppressHydrationWarning={env.NODE_ENV !== "production"}>
      <body className={cn(`min-h-full`, montserrat.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="mt-[7rem]">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
