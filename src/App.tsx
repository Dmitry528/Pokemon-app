import {
  QueryClientProvider,
  QueryClient,
} from '@tanstack/react-query'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import AppRouter from 'AppRouter';

const App = () => {
  const queryClient: QueryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  )
}

export default App;
