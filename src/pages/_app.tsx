import Header from '@/components/layout/header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { ThemeProvider as NextThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
      >
        <div className={inter.className}>
          <Header />
          <Component {...pageProps} />
        </div>
      </NextThemeProvider>
    </>
  );
}
