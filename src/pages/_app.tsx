import "../app/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Theme } from "../chakra/theme";
import RootLayout from "../app/layout";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={Theme}>
      <RootLayout>
        <Component {...pageProps} />;
      </RootLayout>   
    </ChakraProvider>
  );
}


export default MyApp;