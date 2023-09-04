import React, { ReactNode } from "react";
import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import { Router } from "next/router";
import Navbar from "../Navbar";
import Footer from "../Footer";

interface MainLayoutProps {
  children: ReactNode;
  router: Router;
}

const MainLayout = ({ children, router }: MainLayoutProps) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Github Search" />
        <title>Github Search</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.lg" pt={20}>
        {children}
        <Footer />
      </Container>
    </Box>
  );
};

export default MainLayout;
