import { Step, StepLabel, Stepper } from '@material-ui/core';
import { ChangeEvent, useState } from 'react';
import { Complete, CustomDivider } from '../../components';
import { PrimaryButton } from '../../components/Button';
import { Layout } from '../../components/Layout';
import { PathLink } from '../../components/Link';
import { BaseTextInput } from '../../components/TextInput';

const Signup: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0),
    [email, setEmail] = useState(''),
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
    setActiveStep(1);
  };

  const registerSubscription = async () => {
    console.log('a');
  };

  const firstStep = () => {
    return (
      <>
        <div>
          <h3 className="text-center">SNSアカウントでかんたんログイン！</h3>
          <p className="text-center mb-[20px]">
            SNS登録ならパスワードの<strong>入力不要！</strong>
          </p>
        </div>
        <CustomDivider />
        <BaseTextInput label="メールアドレス" value={email} fullWidth={true} onChange={inputEmail} />
        <br />
        <PrimaryButton className="mb-[20px]" label="メールを送信" fullWidth={true} onClick={registerSubscription} />
        <PathLink label="すでにアカウントをお持ちの方はこちらから" path="/signin" />
      </>
    );
  };

  const secondStep = () => {
    return (
      <>
        <div>
          <h3 className="mb-[20px] text-center">パスワードの設定</h3>
          <BaseTextInput label="パスワード" value={password1} fullWidth={true} onChange={inputPassword1} />
          <BaseTextInput label="確認用パスワード" value={password2} fullWidth={true} onChange={inputPassword2} />
          <PrimaryButton label="会員登録" fullWidth={true} onClick={signUp} />
        </div>
      </>
    );
  };

  const thirdStep = () => {
    return (
      <>
        <div>
          <h3 className="mb-[20px] text-center">サブスクリプションの登録</h3>
          <PrimaryButton label="登録する" fullWidth={true} onClick={signUp} />
        </div>
      </>
    );
  };

  const fourthStep = () => {
    return (
      <>
        <Complete message="登録が完了しました" />
      </>
    );
  };

  return (
    <Layout containerMaxWidth="sm" subTitle="会員登録">
      <Stepper activeStep={activeStep} alternativeLabel>
        <Step>
          <StepLabel>メールアドレスの入力</StepLabel>
        </Step>
        <Step>
          <StepLabel>パスワードの入力</StepLabel>
        </Step>
        <Step>
          <StepLabel>サブスクリプションの登録</StepLabel>
        </Step>
        <Step>
          <StepLabel>登録完了</StepLabel>
        </Step>
      </Stepper>
      {activeStep === 0 && firstStep()}
      {activeStep === 1 && secondStep()}
      {activeStep === 2 && thirdStep()}
      {activeStep === 3 && fourthStep()}
    </Layout>
  );
};

export default Signup;
