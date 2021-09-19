import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import '../styles/global.css';
import Head from 'next/head';
import { Provider } from '../components/Provider';

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
