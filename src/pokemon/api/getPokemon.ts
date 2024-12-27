import { PokeAPI } from 'pokeapi-types'
import { IPokemon } from 'pokemon/types/pokemon'
import { PokemonQueryParam } from 'pokemon/types/queryParams'
import { get } from "shared/api/apiService"

export const getPokemon = async ({ name }: PokemonQueryParam): Promise<IPokemon> => {
  return await get({ url: `pokemon/${name}` })
}