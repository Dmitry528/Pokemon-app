import { useSuspenseQuery } from "@tanstack/react-query"
import Loading from "pokemons/components/Loading"
import { getPokemons } from "pokemons/api/getPokemons"
import PokemonList from "pokemons/components/PokemonList"
import { queryKeys } from "shared/constants/api"
import withErrorBoundary from "shared/utils/withErrorBoundary"
import withSuspense from "shared/utils/withSuspense"

export const Pokemons = () => {
  const { data: { results: pokemons }} = useSuspenseQuery({
    queryFn: getPokemons,
    queryKey: [queryKeys.Pokemons],
  })

  return (
    <>
      <PokemonList pokemons={pokemons} />
    </>
  )
}

export default withErrorBoundary(withSuspense(Pokemons, <Loading />))