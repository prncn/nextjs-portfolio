import '../../styles/globals.css';
import Script from 'next/script';
import { NextIntlProvider } from 'next-intl';
import '@fontsource/playfair-display';
import '@fontsource/inter';

export default function App({ Component, pageProps }) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Script
        src="https://unpkg.com/blotterjs-fork@0.1.0/build/blotter.min.js"
        strategy="beforeInteractive"
      />
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}
