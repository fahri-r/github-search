import theme from "@/lib/theme";
import "@/styles/globals.css";
import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager,
} from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Fonts from "@/components/Fonts";
import MainLayout from "@/components/layouts/MainLayout";

export default function App({ Component, pageProps, router }: AppProps) {
  const colorModeManager =
    typeof pageProps.cookies === "string"
      ? cookieStorageManagerSSR(pageProps.cookies)
      : localStorageManager;

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      <Fonts />
      <MainLayout router={router}>
        <AnimatePresence
          initial={true}
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </MainLayout>
    </ChakraProvider>
  );
}
