import Layout from '@/components/layout/Layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Head>
        <title>แบบทดสอบออนไลน์</title>
        <meta
          name="แบบทดสอบออนไลน์"
          content="แบบทดสอบออนไลน์"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
