import React from "react";
import { ThemeProvider } from "@/providers/theme-provider";
import "@/public/css/globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { cn } from "@/helper/utils";

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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
