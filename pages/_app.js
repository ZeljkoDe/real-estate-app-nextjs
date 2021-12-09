import Router from 'next/router';
import Head from 'next/head';
import NPrgoress from 'nprogress';
import Layout from '../components/Layout';
import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
