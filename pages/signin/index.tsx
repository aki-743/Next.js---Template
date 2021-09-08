import { Search } from '@trejgun/material-ui-icons-google';
import { ChangeEvent, useState } from 'react';
import { CustomButton, CustomDivider, CustomImage, CustomLink, Layout, TextInput } from '../../components';
import Logo from '../../assets/images/logo.jpeg';
import { Facebook, Twitter } from '@material-ui/icons';

const Signin: React.FC = () => {
  const [email, setEmail] = useState(''),
    [password, setPassword] = useState('');

  // TextInputが変更されたときのコールバック関数
  const inputEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const inputPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const signin = async () => {
    return;
  };

  const signinWithGoogle = async () => {
    console.log('googleでサインイン');
  };

  const signinWithFacebook = async () => {
    console.log('a');
  };

  return (
    <Layout containerMaxWidth="sm" subTitle="サインイン">
      <CustomImage src={Logo} alt="narite logo" width={100} height={100} />
      <CustomDivider />
      <TextInput label="メールアドレス" value={email} fullWidth={true} type={'email'} onChange={inputEmail} />
      <br />
      <TextInput label="パスワード" value={password} fullWidth={true} type="password" onChange={inputPassword} />
      <CustomButton className="mb-[20px]" label="サインイン" color="main" fullWidth={true} onClick={signin} />
      <CustomLink label="会員登録はこちらから" path="/signup" />
      <CustomLink label="パスワードを忘れた方はこちらから" path="/forgot" />
      <CustomDivider />
      <CustomButton
        className="mb-[20px]"
        label="Googleでサインイン"
        color="google"
        fullWidth={true}
        startIcon={<Search />}
        onClick={signinWithGoogle}
      />
      <CustomButton
        className="mb-[20px]"
        label="Faceobookでサインイン"
        color="facebook"
        fullWidth={true}
        startIcon={<Facebook />}
        onClick={signinWithFacebook}
      />
      <CustomButton
        className="mb-[20px]"
        label="Twitterでサインイン"
        color="twitter"
        fullWidth={true}
        startIcon={<Twitter />}
        onClick={signinWithFacebook}
      />
    </Layout>
  );
};

export default Signin;
