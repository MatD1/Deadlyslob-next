// pages/_document.js

import { ColorModeScript } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";

// Next Strict Content Security Policy
import { NextStrictCSP } from "next-strict-csp";

// Enable Head Strict CSP in production mode only
const HeadCSP = process.env.NODE_ENV === "production" ? NextStrictCSP : Head;

export default function Document() {
  return (
    <Html lang="en">
      <HeadCSP>
        {process.env.NODE_ENV === "production" && (
          <meta httpEquiv="Content-Security-Policy" />
        )}
      </HeadCSP>
      <body>
        {/* 👇 Here's the script */}
        <ColorModeScript initialColorMode={"dark"} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
