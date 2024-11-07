"use client";

import { socialMedia } from "@/data/social";
import { fetchProject } from "@/lib/projects";
import { Project } from "@/types/github";
import { ArrowLeft, Eye, Github, Twitter } from "lucide-react";
import Link from "next/link";
import { Suspense, useEffect, useRef, useState } from "react";
import useSWR from "swr";

interface Props {
  project_name: string;
}

const ProjectHeader = ({ project_name }: Props) => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);
  const links: { label: string; href: string }[] = [];
  const views = 10;

  const {
    data: project,
    error,
    isLoading,
  } = useSWR<Project | null>(project_name, fetchProject);

  if (project?.repository) {
    links.push({
      label: "Repository",
      href: `https://github.com/${project.repository}`,
    });
  }
  if (project?.url) {
    links.push({
      label: "Source Code",
      href: project.url,
    });
  }
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting),
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  if (error)
    return (
      <div className="relative h-dvh flex justify-center items-center">
        Something happened while fetching project details...
      </div>
    );
  if (isLoading)
    return (
      <div className="relative h-dvh flex justify-center items-center">
        Loading...
      </div>
    );
  if (!project)
    return (
      <div className="relative h-dvh flex justify-center items-center">
        Project not found...
      </div>
    );

  return (
    <Suspense fallback={<p>Loading {project_name}...</p>}>
      <header
        ref={ref}
        className="relative isolate overflow-hidden bg-transparent"
      >
        <div
          className={`fixed inset-x-0 top-12 z-50 backdrop-blur lg:backdrop-blur-none duration-200 border-b lg:bg-transparent ${isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-white/10  border-zinc-200 lg:border-transparent"
            }`}
        >
          <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
            <div className="flex justify-between gap-8">
              <span
                title="View counter for this page"
                className={`duration-200 hover:font-medium flex items-center gap-1 ${isIntersecting
                  ? " text-zinc-400 hover:text-zinc-100"
                  : "text-zinc-600 hover:text-zinc-900"
                  } `}
              >
                <Eye className="w-5 h-5" />{" "}
                {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                  views,
                )}
              </span>
              <Link target="_blank" href={socialMedia.twitter.href}>
                <Twitter
                  className={`w-6 h-6 duration-200 hover:font-medium ${isIntersecting
                    ? " text-zinc-400 hover:text-zinc-100"
                    : "text-zinc-600 hover:text-zinc-900"
                    } `}
                />
              </Link>
              <Link target="_blank" href={project.url}>
                <Github
                  className={`w-6 h-6 duration-200 hover:font-medium ${isIntersecting
                    ? " text-zinc-400 hover:text-zinc-100"
                    : "text-zinc-600 hover:text-zinc-900"
                    } `}
                />
              </Link>
            </div>

            <Link
              href="/projects"
              className={`duration-200 hover:font-medium ${isIntersecting
                ? " text-zinc-400 hover:text-zinc-100"
                : "text-zinc-600 hover:text-zinc-900"
                } `}
            >
              <ArrowLeft className="w-6 h-6 " />
            </Link>
          </div>
        </div>
        <div className="container mx-auto relative isolate overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
            <div className="mx-auto lg:mx-0">
              <h1 className="text-4xl font-bold tracking-normal text-white font-display">
                {project.title.replaceAll("-", " ").toLocaleUpperCase()}
              </h1>
              <p className="mt-6 text-md text-muted-foreground line-clamp-2">
                {project.description}
              </p>
            </div>

            <div className="mx-auto mt-4 max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                {links.map((link) => (
                  <Link target="_blank" key={link.label} href={link.href}>
                    {link.label} <span aria-hidden="true">&rarr;</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
    </Suspense>
  );
};

export default ProjectHeader;
