import {
  QueryClientProvider,
  QueryClient,
} from '@tanstack/react-query'

import Pokemons from "pokemons/pages/Pockemons";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const App = () => {
  const queryClient: QueryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Pokemons />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  )
}

export default App;
