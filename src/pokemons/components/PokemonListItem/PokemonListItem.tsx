import { Paths } from "AppRouter";
import { PokeAPI } from "pokeapi-types";
import { generatePath, Link } from "react-router";

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
