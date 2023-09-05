import React, { ReactNode, ComponentPropsWithoutRef } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import type { GlobalStyleProps } from "@chakra-ui/theme-tools";
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { IoLogoGithub } from "react-icons/io5";
import ThemeButton from "./ThemeButton";

interface LinkItemProps extends ComponentPropsWithoutRef<any> {
  href: string;
  path: string;
  target?: string;
  children: ReactNode;
  props?: GlobalStyleProps;
}
const LinkItem = ({
  href,
  path,
  target,
  children,
  ...props
}: LinkItemProps) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  const textBg = useColorModeValue("purple.500", "orange.200");
  const textColor = useColorModeValue("white", "#202023");
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? textBg : undefined}
        color={active ? textColor : inactiveColor}
        borderRadius={4}
        target={target ?? "_blank"}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

interface NavbarProps extends ComponentPropsWithoutRef<any> {
  path: string;
  props?: GlobalStyleProps;
}
const Navbar = ({ path, ...props }: NavbarProps) => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      <Container display="flex" p={2} maxW="container.lg">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            Github Search
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem
            target="_blank"
            href={`https://github.com/`}
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
        </Stack>

        <Box display={"flex"} flex={1} w={"full"} justifyContent={"end"}>
          <ThemeButton />

          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Home</MenuItem>
                </NextLink>
                <MenuItem as={Link} href={`https://github.com/`}>
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
