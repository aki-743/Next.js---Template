import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

const TGoogleReCaptchaProvider: React.FC = ({ children }) => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_SITE_KEY} language="ja">
      {children}
    </GoogleReCaptchaProvider>
  );
};

export default TGoogleReCaptchaProvider;
