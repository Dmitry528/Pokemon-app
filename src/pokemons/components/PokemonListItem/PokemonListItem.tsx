import { type PokeAPI } from 'pokeapi-types';
import { generatePath, Link } from 'react-router';

import { Paths } from 'AppRouter';

interface IPokemonListItemProps {
  pokemon: PokeAPI.NamedAPIResource;
}

const PokemonListItem = ({ pokemon: { name } }: IPokemonListItemProps) => {
  return (
    <div>
      <Link to={generatePath(Paths.Pokemon, { name })}>{name}</Link>
    </div>
  );
};

export default PokemonListItem;
