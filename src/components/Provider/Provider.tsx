import QueryClientProvider from './QueryClientProvider';
import MaterialThemeProvider from './MaterialThemeProvider';
import StoreProvider from './StoreProvider';
import GoogleReCaptchaProvider from './GoogleReCaptchaProvider';

const Provider: React.FC = ({ children }) => {
  return (
    <StoreProvider>
      <QueryClientProvider>
        <GoogleReCaptchaProvider>
          <MaterialThemeProvider>{children}</MaterialThemeProvider>
        </GoogleReCaptchaProvider>
      </QueryClientProvider>
    </StoreProvider>
  );
};

export default Provider;
