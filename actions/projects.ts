"use server";

export interface RepoProps {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  private: boolean;
  fork: boolean;
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
  releases_url?: string;
  deployments_url?: string;
  created_at?: string;
  updated_at?: string;
}

export async function getProjects(user: string) {
  const url = `https://api.github.com/users/${user}/repos`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const all = await res.json();

  return all
    .filter(
      (repo: RepoProps) =>
        !repo.fork && // filters projects that are forked from another developers
        repo.name !== user && // filters own repo profile
        repo.name !== "Sankatmochan" && // filters private repo for me only
        repo.name !== "PHP" && // filters own repo for PHP Classes examples
        repo.owner.login === user // filters only projects that has owner of self
    )
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
        releases_url: repo.releases_url,
        deployments_url: repo.deployments_url,
        created_at: repo.created_at,
        updated_at: repo.updated_at,
      };
    });
}
