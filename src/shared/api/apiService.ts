import { baseUrl } from "shared/constants/api";

interface IGetArguments {
  url: string
}

export const get = async ({ url }: IGetArguments) => {
  try {
    const response = await fetch(`${baseUrl}/${url}`, {
      method: 'GET',
    });
  
    return response.json();
  } catch (error) {
    console.error(error)
    throw new Error(`Something went wrong during getting data, url: ${url}`);
  }
};