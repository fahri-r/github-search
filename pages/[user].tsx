import { BACKEND } from "@/lib/api";
import {
  Box,
  Container,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Show,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BiGitRepoForked, BiStar } from "react-icons/bi";
import { BsCodeSquare } from "react-icons/bs";

interface UserProps {
  user: string;
}

const User = ({ user }: UserProps) => {
  const [data, setData] = useState();
  const [repos, setRepos] = useState();

  useEffect(() => {
    BACKEND.get(`/users/${user}`).then((res) => {
      setData(res.data);
    });

    BACKEND.get(`/users/${user}/repos`).then((res) => {
      setRepos(res.data);
      console.log(res.data);
    });
  }, []);
  console.log(user);
  const colorScheme = useColorModeValue("purple", "orange");

  return (
    <Container>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            {data?.name}
          </Heading>
          <p>{data?.login}</p>
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
              src={data?.avatar_url}
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      {repos && (
        <Box
          as={motion.div}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={"0.8s linear"}
          mb={6}
        >
          <Heading as="h3" variant="section-title">
            Repositories
          </Heading>
          {repos.map((x) => (
              <LinkBox
                textAlign={"justify"}
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
                        {x.name}
                      </Text>
                      <Text mt={2} fontSize={14}>
                        {x.description}
                      </Text>
                    </GridItem>
                    <GridItem paddingBottom={4}>
                      <HStack h="100%" alignItems="flex-end">
                        <BiStar />
                        <Text mt={2} fontSize={12}>
                          {x.stargazers_count}
                        </Text>
                        <BiGitRepoForked />
                        <Text mt={2} fontSize={12}>
                          {x.forks_count}
                        </Text>
                      </HStack>
                    </GridItem>
                    <GridItem justifySelf="end" paddingBottom={4}>
                      <HStack h="100%" alignItems="flex-end">
                        <BsCodeSquare />
                        <Text mt={2} fontSize={12}>
                          {x.language}
                        </Text>
                      </HStack>
                    </GridItem>
                  </Grid>
                </LinkOverlay>
              </LinkBox>
          ))}
        </Box>
      )}
    </Container>
  );
};

User.getInitialProps = async ({ query }) => {
  const { user } = query;

  return { user };
};

export default User;
