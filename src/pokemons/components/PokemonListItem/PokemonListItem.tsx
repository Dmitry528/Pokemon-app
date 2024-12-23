import { PokeAPI } from "pokeapi-types"

interface IPokemonListItemProps {
  pokemon: PokeAPI.NamedAPIResource
}

const PokemonListItem = ({ pokemon }: IPokemonListItemProps) => {
  return (
    <div>
      {pokemon.name}
    </div>
  )
}

export default PokemonListItem