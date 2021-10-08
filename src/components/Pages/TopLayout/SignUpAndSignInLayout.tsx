import Head from 'next/head';
import { Toast } from '../../Atoms/Toast';
import { BaseLayoutProps } from '../../types/Layout/props';
import { SignUpAndSignInLayoutWrapper } from '../WrapperLayout';
import styles from './SignUpAndSignInLayout.module.scss';

const SignUpAndSignInLayout: React.FC<BaseLayoutProps> = ({ children, subTitle }) => {
  return (
    <div>
      <Head>
        <title>
          {process.env.TITLE} - {subTitle}
        </title>
      </Head>
      <div className={styles.root} role="main">
        <SignUpAndSignInLayoutWrapper>{children}</SignUpAndSignInLayoutWrapper>
      </div>
      <Toast />
    </div>
  );
};

export default SignUpAndSignInLayout;
