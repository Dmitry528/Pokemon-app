import { useSuspenseQuery } from "@tanstack/react-query"
import { getPokemons } from "pokemons/api/getPokemons"
import PokemonList from "pokemons/components/PokemonList"
import { queryKeys } from "shared/constants/api"
import WithSuspense from "shared/utils/WithSuspense"

export const Pokemons = () => {
  const { data: { results: pokemons }, isLoading, isError } = useSuspenseQuery({
    queryFn: getPokemons,
    queryKey: [queryKeys.Pokemons],
  })

  return (
    <>
      <PokemonList pokemons={pokemons} />
    </>
  )
}

export default () => (
  <WithSuspense fallback={<p>Pokemons loading</p>}>
    <Pokemons />
  </WithSuspense>
)