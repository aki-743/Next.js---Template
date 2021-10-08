import { ChangeEvent, useState } from 'react';
import { PathLink } from '../../components/Atoms/Link';
import { SignUpAndSignInFormButton } from '../../components/Molecules/Button';
import { SignUpAndSignInCodeInput } from '../../components/Molecules/CodeInput';
import { SignInPasswordInputField, SignUpAndSignInEmailInputField } from '../../components/Molecules/InputField';
import { SignUpPhoneInput } from '../../components/Molecules/PhoneInput';
import { SignUpAndSignInLayoutForm } from '../../components/Pages/FormLayout';
import { SignUpAndSignInLayout } from '../../components/Pages/TopLayout';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState(''),
    [password, setPassword] = useState(''),
    [verificationCode, setVerificationCode] = useState(''),
    [_phoneNumber, setPhoneNumber] = useState('');

  const inputEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const inputPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const signin = async () => {
    console.log(1);
    return;
  };

  const inputVerficationCode = (value: string) => {
    setVerificationCode(value);
  };

  const inputPhoneNumber = (value: string) => {
    setPhoneNumber(value);
  };

  return (
    <SignUpAndSignInLayout subTitle="会員登録">
      <SignUpAndSignInLayoutForm title="アカウントにサインイン">
        <SignUpAndSignInEmailInputField name="email" value={email} fullWidth={true} onChange={inputEmail} />
        <SignInPasswordInputField name="password" value={password} fullWidth={true} onChange={inputPassword} />
        <SignUpAndSignInFormButton label="サインイン" fullWidth={true} onClick={signin} />
        <div>
          <PathLink label="アカウントをお持ちでない方はアカウント登録" href="/signup" />
        </div>
        <SignUpAndSignInCodeInput
          address="akimu@example.com"
          verificationName="本人確認"
          value={verificationCode}
          onChange={inputVerficationCode}
        />
        <SignUpPhoneInput onChange={inputPhoneNumber} />
      </SignUpAndSignInLayoutForm>
    </SignUpAndSignInLayout>
  );
};

export default SignIn;
