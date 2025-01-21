import { type IPokemon } from 'pokemon/types/pokemon';
import { type PokemonQueryParam } from 'pokemon/types/queryParams';
import { get } from 'shared/api/apiService';

export const getPokemon = async ({
  name,
}: PokemonQueryParam): Promise<IPokemon> => {
  return await get({ url: `pokemon/${name}` });
};
