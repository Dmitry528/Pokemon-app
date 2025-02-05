import { useSuspenseQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

import { getPokemon } from 'pokemon/api/getPokemon';
import Loading from 'pokemon/components/Loading';
import pokemonStyles from 'pokemon/pages/Pokemon/Pokemon.module.css';
import { type PokemonQueryParam } from 'pokemon/types/queryParams';
import { queryKeys } from 'shared/constants/api';
import withErrorBoundary from 'shared/utils/withErrorBoundary';
import withSuspense from 'shared/utils/withSuspense';

const SPRITES_TO_SKIP: string[] = ['other', 'versions'];

export const Pokemon = () => {
  const { name } = useParams<PokemonQueryParam>();

  const { data: pokemon } = useSuspenseQuery({
    queryFn: () => getPokemon({ name: name! }),
    queryKey: [queryKeys.Pokemon, name],
  });

  return (
    <div className={pokemonStyles.pokemon}>
      <h1 className={pokemonStyles.pokemonName}>{pokemon.name}</h1>
      <div className={pokemonStyles.pokemonViews}>
        {Object.entries(pokemon.sprites).map(
          ([formName, formImage]: Array<string>) => {
            if (!SPRITES_TO_SKIP.includes(formName)) {
              return (
                <div key={formName}>
                  <p>{formName}</p>
                  {formImage ? (
                    <img src={formImage} />
                  ) : (
                    'This view does not exist'
                  )}
                </div>
              );
            }
          },
        )}
      </div>
    </div>
  );
};

export default withErrorBoundary(withSuspense(Pokemon, <Loading />));
