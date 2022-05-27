import "../styles/globals.css";

import type { AppProps } from "next/app";

import ConfigHead from "../src/Components/Infra/ConfigHead";
import Header from "../src/Components/Header";

import * as U from "../src/Components/Foundations/Utils";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ConfigHead />

      <Header />

      <U.DefaultRow gap="0">
        <U.Aside />
        <Component {...pageProps} />
      </U.DefaultRow>
    </>
  );
}

export default MyApp;
