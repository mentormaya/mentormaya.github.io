"use server";

export interface RepoProps {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  private: boolean;
  owner: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
  description: string;
  language: string;
  license: {
    key: string;
    name: string;
    url: string;
  };
}

export async function getProjects(url: string) {
  const user = url.split("/")[4];
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const all = await res.json();

  return all
    .filter((repo: RepoProps) => repo.owner.login === user)
    .map((repo: RepoProps) => {
      return {
        id: repo.id,
        private: repo.private,
        name: repo.name,
        full_name: repo.full_name,
        home: repo.html_url,
        dev: {
          image: repo.owner.avatar_url,
          url: repo.owner.html_url,
        },
        description: repo.description,
        language: repo.language,
        license: repo.license
          ? repo.license.key
            ? repo.license
            : { name: repo.license }
          : repo.license,
      };
    });
}
