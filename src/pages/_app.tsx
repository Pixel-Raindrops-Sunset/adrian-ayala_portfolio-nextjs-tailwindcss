import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Montserrat} from "next/font/google"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Head from "next/head";

// Setting font to be used throughout the application
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
}); 

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}>
        <NavBar />  
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
