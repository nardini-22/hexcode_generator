import "tailwindcss/tailwind.css";
import "../styles/globals.css"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hex Code Generator</title>
        <link rel="icon" href="/paint-bucket.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
