export const GIT_USERNAME = "mentormaya"; // Replace with your GitHub username

export interface RepoOwner {
  login: string;
  avatar_url: string;
  gravatar_id: string;
  html_url: string;
}

export interface Repo {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  private: boolean;
  size: number;
  owner: RepoOwner;
}

export interface Project {
  id: number;
  name: string;
  title: string;
  url: string;
  description: string;
  repository?: string;
  date: string;
  updated_at: string;
  pushed_at: string;
  private: boolean;
  published: boolean;
}
