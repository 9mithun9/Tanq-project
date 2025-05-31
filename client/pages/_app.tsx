import Head from 'next/head';
import { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '../theme';
import '../styles/globals.css';


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Minimal UI</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
