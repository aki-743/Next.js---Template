import QueryClientProvider from './QueryClientProvider';
import MaterialThemeProvider from './MaterialThemeProvider';
import StoreProvider from './StoreProvider';

const Provider: React.FC = ({ children }) => {
  return (
    <StoreProvider>
      <QueryClientProvider>
        <MaterialThemeProvider>{children}</MaterialThemeProvider>
      </QueryClientProvider>
    </StoreProvider>
  );
};

export default Provider;
