import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import AppRouter from 'AppRouter';

const App = () => {
  const queryClient: QueryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // 5 mins in ms
        staleTime: 5 * 60 * 1000,
        retry: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
};

export default App;
