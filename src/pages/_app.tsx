import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import '../styles/global.scss';
import Head from 'next/head';
import { Provider } from '../components/Providers';

const CustomApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    const jssStyles: Element | null = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <Provider>
      <Head>
        <title>{process.env.TITLE}</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
};

export default CustomApp;
