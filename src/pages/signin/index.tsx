import { ChangeEvent, useState } from 'react';
import { PrimaryButton } from '../../components/Button';
import { Layout } from '../../components/Layout';
import { BaseTextInput } from '../../components/TextInput';
import { PathLink } from '../../components/Link';
import { Divider, SplitDivider } from '../../components/Divider';

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

  return (
    <Layout containerMaxWidth="sm" subTitle="サインイン">
      <Divider />
      <BaseTextInput label="メールアドレス" value={email} fullWidth={true} type={'email'} onChange={inputEmail} />
      <br />
      <BaseTextInput label="パスワード" value={password} fullWidth={true} type="password" onChange={inputPassword} />
      <PrimaryButton className="mb-[20px]" label="サインイン" fullWidth={true} onClick={signin} />
      <PathLink label="会員登録はこちらから" path="/signup" />
      <PathLink label="パスワードを忘れた方はこちらから" path="/forgot" />
      <Divider />
      <SplitDivider splitLabel="aaa" />
    </Layout>
  );
};

export default Signin;
