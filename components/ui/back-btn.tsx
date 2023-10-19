"use client";

import { ArrowBigLeftDash, Home } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
  title?: string;
  url?: string;
}

function BackButton({ title = "Go Back", url = "/" }: Props) {
  return (
    <Link
      href={url}
      className="flex justify-center items-center px-4 py-2 bg-primary-light bg-opacity-75 border border-secondary-light rounded-md text-secondary-light font-semibold shadow-md hover:bg-opacity-100"
    >
      {url === "/" && <Home className="h-4 w-4 mr-2" />}
      {url !== "/" && <ArrowBigLeftDash className="h-4 w-4 mr-2" />}
      {title}
    </Link>
  );
}

export default BackButton;
