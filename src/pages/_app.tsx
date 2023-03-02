import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@/Components/UI/Layout";
import Head from "next/head";
import { DeadlyTheme } from "@/Components/UI/Theme";
import { Oswald } from "next/font/google";
import "@fontsource/josefin-sans"

const oswald = Oswald({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Deadlyslob - Twitch.tv/Deadlyslob</title>
        <meta
          name="description"
          content="Deadlyslob | Popular content creator and Twitch Streamer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
