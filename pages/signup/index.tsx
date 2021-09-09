import { Step, StepLabel, Stepper } from '@material-ui/core';
import { Facebook, Twitter } from '@material-ui/icons';
import { Search } from '@trejgun/material-ui-icons-google';
import { ChangeEvent, useState } from 'react';
import { Complete, CustomButton, CustomDivider, CustomLink, Layout, TextInput } from '../../components';

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

  const signupWithGoogle = async () => {
    // const provider = new fb.auth.GoogleAuthProvider();
    // fb.auth().signInWithRedirect(provider);
  };

  const signinWithFacebook = async () => {
    console.log('a');
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
          <CustomButton
            className="mb-[20px]"
            label="Googleでサインイン"
            color="google"
            fullWidth={true}
            startIcon={<Search />}
            onClick={signupWithGoogle}
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
        </div>
        <CustomDivider />
        <TextInput label="メールアドレス" value={email} fullWidth={true} onChange={inputEmail} />
        <br />
        <CustomButton className="mb-[20px]" label="メールを送信" color="main" fullWidth={true} onClick={registerSubscription} />
        <CustomLink label="すでにアカウントをお持ちの方はこちらから" path="/signin" />
      </>
    );
  };

  const secondStep = () => {
    return (
      <>
        <div>
          <h3 className="mb-[20px] text-center">パスワードの設定</h3>
          <TextInput label="パスワード" value={password1} fullWidth={true} onChange={inputPassword1} />
          <TextInput label="確認用パスワード" value={password2} fullWidth={true} onChange={inputPassword2} />
          <CustomButton label="会員登録" color="main" fullWidth={true} onClick={signUp} />
        </div>
      </>
    );
  };

  const thirdStep = () => {
    return (
      <>
        <div>
          <h3 className="mb-[20px] text-center">サブスクリプションの登録</h3>
          <CustomButton label="登録する" color="main" fullWidth={true} onClick={signUp} />
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
