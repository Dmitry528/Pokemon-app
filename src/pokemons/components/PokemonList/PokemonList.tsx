import { PokeAPI } from 'pokeapi-types';

import PokemonListItem from 'pokemons/components/PokemonListItem';

interface IPokemonListProps {
  pokemons: PokeAPI.NamedAPIResource[];
}

const PokemonList = ({ pokemons }: IPokemonListProps) => {
  return (
    <>
      {pokemons.map((pokemon: PokeAPI.NamedAPIResource) => (
        <PokemonListItem pokemon={pokemon} key={pokemon.name} />
      ))}
    </>
  );
};

export default PokemonList;
