import { ContainerProps } from '@mui/material';
import Head from 'next/head';
import { Container } from '../Container';
import { DispatchLoading } from '../Loading';
import { Toast } from '../Toast';
import Footer from './Footer';
import Header from './Header';
import styles from './Layout.module.scss';

type Props = {
  children: ContainerProps['children'];
  containerMaxWidth?: ContainerProps['maxWidth'];
  footerRequired?: boolean;
  headerRequired?: boolean;
  subTitle?: string;
};

const DefaultLayout: React.FC<Props> = ({ children, containerMaxWidth, footerRequired = true, headerRequired = true, subTitle }) => {
  return (
    <>
      <Head>
        <title>
          {process.env.TITLE} - {subTitle}
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {headerRequired && <Header />}
      <main className={styles['comp-root']}>
        <Container maxWidth={containerMaxWidth}>{children}</Container>
      </main>
      <Toast />
      <DispatchLoading />
      {footerRequired && <Footer />}
    </>
  );
};

export default DefaultLayout;
