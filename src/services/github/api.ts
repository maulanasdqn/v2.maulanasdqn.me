import type { TGithubResponse } from "./type";

export const fetchGithub = async (): Promise<TGithubResponse[] | void> => {
  try {
    const response = await fetch(import.meta.env.GITHUB_API_URL);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
