import { ContainerProps } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Head from 'next/head';
import { Container } from '../Container';
import { DispatchLoading } from '../Loading';
import { Toast } from '../Toast';
import Footer from './Footer';
import Header from './Header';

const useStyles = makeStyles({
  main: {
    backgroundColor: '#f5f5f5',
    minHeight: 'calc(100vh - 136px)',
    '& > div': {
      padding: '40px',
      minHeight: 'inherit',
      backgroundColor: '#fff',
    },
    '& > div > *': {
      marginBottom: '20px',
    },
  },
});

type Props = {
  children: ContainerProps['children'];
  containerMaxWidth?: ContainerProps['maxWidth'];
  footerRequired?: boolean;
  headerRequired?: boolean;
  subTitle?: string;
};

const DefaultLayout: React.FC<Props> = ({ children, containerMaxWidth, footerRequired = true, headerRequired = true, subTitle }) => {
  const classes = useStyles();

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
      <main className={classes.main}>
        <Container maxWidth={containerMaxWidth}>{children}</Container>
      </main>
      <Toast />
      <DispatchLoading />
      {footerRequired && <Footer />}
    </>
  );
};

export default DefaultLayout;