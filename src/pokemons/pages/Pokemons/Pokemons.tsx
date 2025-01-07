import { useSuspenseQuery } from '@tanstack/react-query';
import Loading from 'pokemons/components/Loading';
import { getPokemons } from 'pokemons/api/getPokemons';
import PokemonList from 'pokemons/components/PokemonList';
import { queryKeys } from 'shared/constants/api';
import withErrorBoundary from 'shared/utils/withErrorBoundary';
import withSuspense from 'shared/utils/withSuspense';
import usePokemonsState from 'pokemons/store/pokemons.state';
import { computePaginationOffset } from 'shared/helpers/computePaginationOffset';
import Pagination from 'shared/components/Pagination';
import { defaultItemsPerPage } from 'pokemons/constants/pokemonsFilter';

export const Pokemons = () => {
  const page: number = usePokemonsState((state) => state.page);
  const setPage: (page: number) => void = usePokemonsState(
    (state) => state.setPage,
  );

  const {
    data: { results: pokemons, count },
  } = useSuspenseQuery({
    queryFn: () =>
      getPokemons({
        itemsPerPage: defaultItemsPerPage,
        offset: computePaginationOffset(page, defaultItemsPerPage),
      }),
    queryKey: [queryKeys.Pokemons, { page }],
  });

  const handleOnChange = (newPage: number): void => {
    setPage(newPage);
  };

  return (
    <>
      <PokemonList pokemons={pokemons} />
      <Pagination
        current={page}
        total={count}
        onChange={handleOnChange}
        showTotal={(total: number, [from, to]: number[]) => (
          <p>
            Showing {from}-{to} of {total}
          </p>
        )}
        align="center"
      />
    </>
  );
};

export default withErrorBoundary(withSuspense(Pokemons, <Loading />));
