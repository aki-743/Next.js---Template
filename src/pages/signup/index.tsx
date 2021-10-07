import { ChangeEvent, useState } from 'react';
import { PathLink } from '../../components/Atoms/Link';
import { SignUpAndSignInFormButton } from '../../components/Molecules/Button';
import { SignUpAndSignInEmailInputField, SignUpPasswordInputField } from '../../components/Molecules/InputField';
import { SignUpAndSignInLayoutForm } from '../../components/Pages/FormLayout';
import { SignUpAndSignInLayout } from '../../components/Pages/TopLayout';

const Signup: React.FC = () => {
  const [email, setEmail] = useState(''),
    [password1, setPassword1] = useState(''),
    [password2, setPassword2] = useState('');

  // TextInputが変更されたときのコールバック関数
  const inputEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const inputPassword1 = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword1(event.target.value);
  };

  const inputPassword2 = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword2(event.target.value);
  };

  const signUp = async () => {
    console.log(1);
  };

  return (
    <SignUpAndSignInLayout subTitle="会員登録">
      <SignUpAndSignInLayoutForm title="アカウントの作成">
        <SignUpAndSignInEmailInputField name="email" value={email} fullWidth={true} onChange={inputEmail} />
        <SignUpPasswordInputField
          password1={password1}
          password2={password2}
          fullWidth={true}
          onChangePassword1={inputPassword1}
          onChangePassword2={inputPassword2}
        />
        <SignUpAndSignInFormButton label="メールを送信" fullWidth={true} onClick={signUp} />
        <div>
          <PathLink label="すでにアカウントをお持ちの方はこちらから" href="/signin" />
        </div>
      </SignUpAndSignInLayoutForm>
    </SignUpAndSignInLayout>
  );
};

export default Signup;
