import CustomQueryClientProvider from './CustomQueryClientProvider';
import MaterialThemeProvider from './MaterialThemeProvider';
import StoreProvider from './StoreProvider';

const Provider: React.FC = ({ children }) => {
  return (
    <StoreProvider>
      <CustomQueryClientProvider>
        <MaterialThemeProvider>{children}</MaterialThemeProvider>
      </CustomQueryClientProvider>
    </StoreProvider>
  );
};

export default Provider;
