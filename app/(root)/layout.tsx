import Footer from "@/components/footer";
import { Navigation } from "@/components/nav";
import Link from "next/link";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <div className="relative my-6 ">
        <Navigation gitTheme />
        <div className="w-full pt-8 mx-auto lg:pt-16 max-w-[90%] mb-12">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}
