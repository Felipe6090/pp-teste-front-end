import "../styles/globals.css";

import type { AppProps } from "next/app";

import ConfigHead from "../src/Components/Infra/ConfigHead";
import Header from "../src/Components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ConfigHead />

      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
