import { type PokeAPI } from 'pokeapi-types';

interface IPokemon extends PokeAPI.Pokemon {
  cries: Cries;
}

type Cries = {
  latest: string;
  legacy: string;
};

export type { IPokemon };
