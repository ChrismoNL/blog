import { Urbanist } from '@next/font/google';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import './utils/globals.css';

import { Layout } from '@src/components/templates/layout';
import Script from 'next/script';

const urbanist = Urbanist({ subsets: ['latin'], variable: '--font-urbanist' });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-8B1HQSNPTR`}
      />
      <Script
        id="G-8B1HQSNPTR"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-8B1HQSNPTR');
          `,
        }}
      />
      <main className={`${urbanist.variable} font-sans`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
      <div id="portal" className={`${urbanist.variable} font-sans`} />
    </>
  );
};

export default appWithTranslation(App);
