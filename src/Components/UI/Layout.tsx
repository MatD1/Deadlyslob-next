import { Box } from "@chakra-ui/react";
import React from "react";
import CookieWarning from "../CookieWarning";
import { Footer } from "../Layout/Footer";
import { Navbar } from "../Layout/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Box m={2}>
        <Navbar />
        {/* <CookieWarning /> */}
        {children}
      </Box>
      <Footer />
    </>
  );
}
