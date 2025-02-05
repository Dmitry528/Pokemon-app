import { type PokeAPI } from 'pokeapi-types';

const pokemons: PokeAPI.NamedAPIResourceList = {
  count: 3,
  next: 'next-url',
  previous: 'prev-url',
  results: [
    { name: 'Pokemon-1', url: 'Pokemon1.url' },
    { name: 'Pokemon-2', url: 'Pokemon2.url' },
    { name: 'Pokemon-3', url: 'Pokemon3.url' },
  ],
};

export { pokemons };
