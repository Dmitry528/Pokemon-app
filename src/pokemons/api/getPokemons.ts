import { PokeAPI } from "pokeapi-types";
import { get } from "shared/api/apiService";

interface GetPokemonsArgs {
  itemsPerPage: number;
  offset: number;
}

export const getPokemons = async ({
  itemsPerPage,
  offset,
}: GetPokemonsArgs): Promise<PokeAPI.NamedAPIResourceList> => {
  return await get({ url: `pokemon?limit=${itemsPerPage}&offset=${offset}` });
};
