import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@/Components/UI/Layout";
import Head from "next/head";
import { DeadlyTheme } from "@/Components/UI/Theme";
import { Oswald } from "next/font/google";
import "@fontsource/josefin-sans";
import Metatags from "@/Components/MetaTags";

const oswald = Oswald({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Metatags />
      <ChakraProvider theme={DeadlyTheme}>
        <Layout>
          <main className={oswald.className}>
            <Component {...pageProps} />
          </main>
        </Layout>
      </ChakraProvider>
    </>
  );
}

// pages/_app.js
