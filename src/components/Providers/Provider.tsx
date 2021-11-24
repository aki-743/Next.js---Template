import MaterialThemeProvider from './MaterialThemeProvider';
import GoogleReCaptchaProvider from './GoogleReCaptchaProvider';

const Provider: React.FC = ({ children }) => {
  return (
    <GoogleReCaptchaProvider>
      <MaterialThemeProvider>{children}</MaterialThemeProvider>
    </GoogleReCaptchaProvider>
  );
};

export default Provider;
