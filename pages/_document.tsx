import { Head, Html, Main, NextScript } from 'next/document';

export default function document() {
  return (
    <Html lang="th">
      <Head > 
      <link rel="icon" href="/icon.jpg" sizes="any" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
