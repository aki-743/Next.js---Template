import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 300000,
    },
  },
});

const CustomQueryClientProvider: React.FC = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      {children}
    </QueryClientProvider>
  );
};

export default CustomQueryClientProvider;
