import React from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/styles/index.scss';
import { Alert } from 'components/Alert/Alert';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }) {
  // const Layout = Component.layout || (({ children }) => <>{children}</>);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" type="image/png" href="/favicon.png"></link>
        <title> 7Hit | Classified Ads</title>
      </Head>
      <React.StrictMode>
        <Alert />
        <Component {...pageProps} />
      </React.StrictMode>
    </>
  );
}

export default MyApp;
