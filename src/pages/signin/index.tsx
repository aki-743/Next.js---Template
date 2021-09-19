import { ChangeEvent, useState } from 'react';
import { CustomDivider, CustomImage } from '../../components';
import { PrimaryButton } from '../../components/Button';
import { Layout } from '../../components/Layout';
import { BaseTextInput } from '../../components/TextInput';
import { PathLink } from '../../components/Link';

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
      <CustomDivider />
      <BaseTextInput label="メールアドレス" value={email} fullWidth={true} type={'email'} onChange={inputEmail} />
      <br />
      <BaseTextInput label="パスワード" value={password} fullWidth={true} type="password" onChange={inputPassword} />
      <PrimaryButton className="mb-[20px]" label="サインイン" fullWidth={true} onClick={signin} />
      <PathLink label="会員登録はこちらから" path="/signup" />
      <PathLink label="パスワードを忘れた方はこちらから" path="/forgot" />
      <CustomDivider />
    </Layout>
  );
};

export default Signin;
