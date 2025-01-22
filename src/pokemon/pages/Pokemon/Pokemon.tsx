import { useSuspenseQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

import { getPokemon } from 'pokemon/api/getPokemon';
import Loading from 'pokemon/components/Loading';
import { type PokemonQueryParam } from 'pokemon/types/queryParams';
import { queryKeys } from 'shared/constants/api';
import withErrorBoundary from 'shared/utils/withErrorBoundary';
import withSuspense from 'shared/utils/withSuspense';

export const Pokemon = () => {
  const { name } = useParams<PokemonQueryParam>();

  const { data: pokemon } = useSuspenseQuery({
    queryFn: () => getPokemon({ name: name || 'hello' }),
    queryKey: [queryKeys.Pokemon, name],
  });

  return <p>pokemon: {pokemon.name}</p>;
};

export default withErrorBoundary(withSuspense(Pokemon, <Loading />));
