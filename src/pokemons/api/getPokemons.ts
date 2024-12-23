import { PokeAPI } from 'pokeapi-types'
import { get } from "shared/api/apiService"

export const getPokemons = async (): Promise<PokeAPI.NamedAPIResourceList> => {
  return await get({ url: 'pokemon?limit=10&offset=0' })
}


