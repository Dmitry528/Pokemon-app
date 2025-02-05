import { PokemonsDataTestId } from 'pokemons/constants/data-testid';
import { pokemons } from 'pokemons/mocks/data';
import { server } from 'pokemons/mocks/server';
import { Pokemons } from 'pokemons/pages/Pokemons/Pokemons';
import { customRender } from 'testingUtils/customRender';

describe('<Pokemons />', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('should render pokemon list', async () => {
    const { findAllByTestId, findByTestId } = customRender(<Pokemons />);

    const pokemonsPage: HTMLElement = await findByTestId(
      PokemonsDataTestId.PokemonsPage,
    );

    const pokemonsList: HTMLElement = await findByTestId(
      PokemonsDataTestId.PokemonsList,
    );

    const pokemonItems: HTMLElement[] = await findAllByTestId(
      PokemonsDataTestId.PokemonsItem,
    );

    const pokemonsPagination: HTMLElement = await findByTestId(
      PokemonsDataTestId.PokemonsPagination,
    );

    expect(pokemonsPage).toBeInTheDocument();
    expect(pokemonsList).toBeInTheDocument();
    expect(pokemonItems.length).toBe(pokemons.results.length);
    expect(pokemonsPagination).toBeInTheDocument();
  });
});
