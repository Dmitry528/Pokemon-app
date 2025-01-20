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
import { sizeChangerOptions } from 'pokemons/constants/pokemonsFilter';
import TotalInfo from 'pokemons/components/TotalInfo';
import ItemsPerPage from 'pokemons/components/ItemsPerPage';

export const Pokemons = () => {
  const page: number = usePokemonsState((state) => state.page);
  const setPage: (page: number) => void = usePokemonsState(
    (state) => state.setPage,
  );

  const itemsPerPage: number = usePokemonsState((state) => state.itemsPerPage);
  const setItemsPerPage: (itemsPerPage: number) => void = usePokemonsState(
    (state) => state.setItemsPerPage,
  );

  const {
    data: { results: pokemons, count },
  } = useSuspenseQuery({
    queryFn: () =>
      getPokemons({
        itemsPerPage: itemsPerPage,
        offset: computePaginationOffset(page, itemsPerPage),
      }),
    queryKey: [queryKeys.Pokemons, { page, itemsPerPage }],
  });

  const handleOnChange = (newPage: number, pageSize: number): void => {
    setPage(newPage);
    setItemsPerPage(pageSize);
  };

  return (
    <>
      <PokemonList pokemons={pokemons} />
      <Pagination
        current={page}
        pageSize={itemsPerPage}
        total={count}
        pageSizeOptions={sizeChangerOptions}
        showTotal={(...totalInfoProps) => (
          <TotalInfo options={totalInfoProps} />
        )}
        sizeChangerRender={(itemsPerPageFilterProps) => (
          <ItemsPerPage settings={itemsPerPageFilterProps} />
        )}
        onChange={handleOnChange}
        align="center"
      />
    </>
  );
};

export default withErrorBoundary(withSuspense(Pokemons, <Loading />));
