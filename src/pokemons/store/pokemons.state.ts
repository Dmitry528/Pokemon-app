import { pokemonsDefaultPage } from "pokemons/constants/pokemonsFilter";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface IPokemonsState {
  page: number;
}

interface IPokemonsStateActions {
  setPage: (page: number) => void;
}

const usePokemonsState = create<IPokemonsState & IPokemonsStateActions>()(
  devtools(
    immer(
      persist(
        (set) => ({
          page: pokemonsDefaultPage,
          setPage: (page: number) => {
            set(
              (state) => {
                state.page = page;
              },
              undefined,
              {
                type: "setPokemonsPage",
                payload: page,
              },
            );
          },
        }),
        { name: "pokemonsState" },
      ),
    ),
  ),
);

export default usePokemonsState;
