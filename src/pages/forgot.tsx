import { ChangeEvent, useState } from 'react';
import { PrimaryButton } from '../components/Button';
import { Divider } from '../components/Divider';
import { Layout } from '../components/Layout';
import { TextInput } from '../components/TextInput';

const Forgot: React.FC = () => {
  const [email, setEmail] = useState('');

  // TextInputが変更されたときのコールバック関数
  const inputEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const sendMailForPassowrd = async () => {
    return;
  };

  return (
    <Layout containerMaxWidth="sm" subTitle="パスワードを忘れた方">
      <Divider />
      <h3 className="text-center">パスワードの再設定</h3>
      <p className="text-center mb-[20px]">ご登録いただいたメールアドレス宛にパスワード再設定用のアドレスを送信します</p>
      <TextInput label="メールアドレス" value={email} fullWidth={true} type={'email'} onChange={inputEmail} />
      <PrimaryButton className="mb-[20px]" label="メールを送信する" fullWidth={true} onClick={sendMailForPassowrd} />
    </Layout>
  );
};

export default Forgot;
