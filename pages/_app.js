import { Inter } from 'next/font/google';

// pages/_app.js
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] });

export default function MyApp({ Component, pageProps }) {
  return(     <>

          <main className={inter.className}>
      <Component {...pageProps} />
    </main>
    </>)
}