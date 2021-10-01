import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

const TGoogleReCaptchaProvider: React.FC = ({ children }) => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="サイトキーをここに入れる" language="ja">
      {children}
    </GoogleReCaptchaProvider>
  );
};

export default TGoogleReCaptchaProvider;
