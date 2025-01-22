import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

import RootLayout from 'shared/components/RootLayout';

const Pokemons = lazy(
  () =>
    import(/* webpackChunkName: "pokemons-page" */ 'pokemons/pages/Pokemons'),
);
const Pokemon = lazy(
  () => import(/* webpackChunkName: "pokemon-page" */ 'pokemon/pages/Pokemon'),
);

export enum Paths {
  Pokemons = '/',
  Pokemon = '/pokemon/:name',
}

const AppRouter = () => (
  <BrowserRouter>
    <Suspense fallback={<p>Loading async routes...</p>}>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path={Paths.Pokemons} element={<Pokemons />} />
          <Route path={Paths.Pokemon} element={<Pokemon />} />
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default AppRouter;
