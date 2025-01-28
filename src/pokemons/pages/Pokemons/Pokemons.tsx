import { useSuspenseQuery } from '@tanstack/react-query';

import { getPokemons } from 'pokemons/api/getPokemons';
import ItemsPerPage from 'pokemons/components/ItemsPerPage';
import Loading from 'pokemons/components/Loading';
import PokemonList from 'pokemons/components/PokemonList';
import TotalInfo from 'pokemons/components/TotalInfo';
import { sizeChangerOptions } from 'pokemons/constants/pokemonsFilter';
import pokemonStyles from 'pokemons/pages/Pokemons/Pokemons.module.css';
import usePokemonsState from 'pokemons/store/pokemons.state';
import Pagination from 'shared/components/Pagination';
import { queryKeys } from 'shared/constants/api';
import { computePaginationOffset } from 'shared/helpers/computePaginationOffset';
import withErrorBoundary from 'shared/utils/withErrorBoundary';
import withSuspense from 'shared/utils/withSuspense';

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
    <div className={pokemonStyles.pokemons}>
      <div className={pokemonStyles.pokemonsList}>
        <PokemonList pokemons={pokemons} />
      </div>
      <div className={pokemonStyles.pagination}>
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
          locale={{
            items_per_page: 'items per page',
          }}
          onChange={handleOnChange}
          align="center"
        />
      </div>
    </div>
  );
};

export default withErrorBoundary(withSuspense(Pokemons, <Loading />));
