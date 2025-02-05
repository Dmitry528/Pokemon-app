import { type PokeAPI } from 'pokeapi-types';
import { generatePath, Link } from 'react-router';

import { Paths } from 'AppRouter';
import { PokemonsDataTestId } from 'pokemons/constants/data-testid';

interface IPokemonListItemProps {
  pokemon: PokeAPI.NamedAPIResource;
}

const PokemonListItem = ({ pokemon: { name } }: IPokemonListItemProps) => {
  return (
    <div data-testid={PokemonsDataTestId.PokemonsItem}>
      <Link to={generatePath(Paths.Pokemon, { name })}>{name}</Link>
    </div>
  );
};

export default PokemonListItem;
