import { ChangeEvent, useState } from 'react';
import { PrimaryButton } from '../../components/Button';
import { TextInput } from '../../components/TextInput';
import { Divider, SplitDivider } from '../../components/Divider';
import AnchorLink from '../../components/Link/AnchorLink';
import { DefaultLayout } from '../../components/Layout';

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
    <DefaultLayout containerMaxWidth="sm" subTitle="サインイン">
      <Divider />
      <TextInput label="メールアドレス" value={email} fullWidth={true} type={'email'} onChange={inputEmail} />
      <br />
      <TextInput label="パスワード" value={password} fullWidth={true} type="password" onChange={inputPassword} />
      <PrimaryButton className="mb-[20px]" label="サインイン" fullWidth={true} onClick={signin} />
      <AnchorLink label="会員登録はこちらから" onClick={() => console.log(1)} />
      <Divider />
      <SplitDivider splitLabel="aaa" />
    </DefaultLayout>
  );
};

export default Signin;
