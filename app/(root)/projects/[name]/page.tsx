// import "./mdx.css";
import { Project } from "@/types/github";
import { fetchProjectReadme, fetchProjects } from "@/lib/projects";
import ProjectHeader from "./header";
import { MDX } from "@/components/mdx";

type Props = {
  params: {
    name: string;
  };
};

export async function generateStaticParams(): Promise<Props["params"][]> {
  const projs: Project[] = await fetchProjects();
  return projs.map((proj) => ({ name: proj.name }));
}

export default async function ProjectLoadingPage({ params }: Props) {
  const name = params?.name;
  const readMe: string = await fetchProjectReadme(name);

  return (
    <main className="space-y-2">
      <ProjectHeader project_name={name} />
      <MDX source={readMe} />
    </main>
  );
}
