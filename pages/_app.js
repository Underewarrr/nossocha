/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import Script from 'next/script'
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      
      <Component {...pageProps} />
    </>
  )
}
