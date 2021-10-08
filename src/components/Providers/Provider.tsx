import QueryClientProvider from './QueryClientProvider';
import MaterialThemeProvider from './MaterialThemeProvider';
import GoogleReCaptchaProvider from './GoogleReCaptchaProvider';

const Provider: React.FC = ({ children }) => {
  return (
    <QueryClientProvider>
      <GoogleReCaptchaProvider>
        <MaterialThemeProvider>{children}</MaterialThemeProvider>
      </GoogleReCaptchaProvider>
    </QueryClientProvider>
  );
};

export default Provider;
