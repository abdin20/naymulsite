import 'tailwindcss/tailwind.css'
import Navigation from "../components/Navigation";
import { ThemeProvider } from 'next-themes'

import Footer from "../components/Footer";
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <ThemeProvider attribute="class" enableSystem={true}>
    <Navigation/>
    <Component {...pageProps} />
    <Footer></Footer>
    </ThemeProvider>
    </>
  )
}

export default MyApp
