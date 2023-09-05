import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  chakra,
  Container,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Show,
  Link,
  List,
  ListItem,
  Text,
  useColorModeValue,
  Wrap,
  WrapItem,
  shouldForwardProp,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BiGitRepoForked, BiStar } from "react-icons/bi";
import { BsCodeSquare } from "react-icons/bs";

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === "transition";
  },
});

const Home = () => {
  const colorScheme = useColorModeValue("purple", "orange");

  return (
    <Container>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Fahri
          </Heading>
          <p>Web Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="https://bit.ly/dan-abramov"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Box as={motion.div}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={'0.8s linear'}
        mb={6}
      >
        <Heading as="h3" variant="section-title">
          Repositories
        </Heading>
        <Text textAlign={"justify"} textIndent={"1em"}>
          <LinkBox
            cursor="pointer"
            bgColor="whiteAlpha.100"
            border="1px"
            borderColor="#ffffff00"
            _hover={{
              bgColor: "whiteAlpha.300",
              border: "1px",
              borderColor: "white",
            }}
            _focus={{
              border: "0px",
            }}
            borderRadius="xl"
            boxShadow="lg"
          >
            <LinkOverlay href={"https://google.com"} borderRadius="xl">
              <Grid
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(3, 1fr)"
                gap={4}
                paddingEnd={5}
              >
                <GridItem rowSpan={2}>
                  <Show breakpoint="(min-width: 320px)">
                    <Image
                      src={"https://bit.ly/dan-abramov"}
                      alt={"repo"}
                      borderLeftRadius="xl"
                      objectFit={"cover"}
                      boxSize="100%"
                      placeholder="blur"
                      loading="lazy"
                    />
                  </Show>
                </GridItem>
                <GridItem colSpan={2}>
                  <Text mt={2} fontSize={20}>
                    Tes
                  </Text>
                  <Text mt={2} fontSize={14}>
                    Tes
                  </Text>
                </GridItem>
                <GridItem paddingBottom={4}>
                  <HStack h="100%" alignItems="flex-end">
                    <BiStar />
                    <Text mt={2} fontSize={12}>
                      2
                    </Text>
                    <BiGitRepoForked />
                    <Text mt={2} fontSize={12}>
                      2
                    </Text>
                  </HStack>
                </GridItem>
                <GridItem justifySelf="end" paddingBottom={4}>
                  <HStack h="100%" alignItems="flex-end">
                    <BsCodeSquare />
                    <Text mt={2} fontSize={12}>
                      Indo
                    </Text>
                  </HStack>
                </GridItem>
              </Grid>
            </LinkOverlay>
          </LinkBox>
        </Text>
      </Box>
    </Container>
  );
};

export default Home;
