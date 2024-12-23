import { baseUrl } from "shared/constants/api";

interface IGetArguments {
  url: string
}

export const get = async ({ url }: IGetArguments) => {
  const response = await fetch(`${baseUrl}/${url}`, {
    method: 'GET',
  });

  return response.json();
};