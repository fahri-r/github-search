import { BACKEND } from "@/lib/api";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Icon,
  Image,
  LinkBox,
  LinkOverlay,
  Show,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BiGitRepoForked, BiStar } from "react-icons/bi";
import { BsCodeSquare } from "react-icons/bs";
import { FaBuilding, FaLink, FaLocationDot, FaTwitter } from "react-icons/fa6";

interface UserProps {
  user: string;
}

const User = ({ user }: UserProps) => {
  const [data, setData] = useState();
  const [repos, setRepos] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    BACKEND.get(`/users/${user}`).then((res) => {
      setData(res.data);
      console.log(res.data)
    });

    BACKEND.get(`/users/${user}/repos`).then((res) => {
      setRepos(res.data);
    });
  }, []);

  return (
    <>
      <Flex direction={"column"} py={6}>
        <Flex gap={10} mb={10} direction={{ base: "column", md: "unset" }}>
          <Box
            alignSelf={{ base: "center", md: "unset" }}
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="150px"
            h="150px"
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
          <Flex direction={"column"} flex={1} gap={3} justifyContent={"center"}>
            <Heading fontSize={"2xl"}>{data?.name}</Heading>
            <Text fontSize={"lg"}>{`@${data?.login}`}</Text>
            <Text fontSize={"lg"}>{`Joined ${new Date(data.created_at).toDateString()}`}</Text>
          </Flex>
        </Flex>
        <Flex direction={"column"} gap={4}>
          <Grid
            bgColor="whiteAlpha.100"
            border="1px"
            borderColor="#ffffff00"
            borderRadius="xl"
            boxShadow="lg"
            p={5}
            gap={5}
            templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
          >
            <GridItem
              textAlign={"center"}
              borderRight={{ base: "unset", lg: "1px solid" }}
            >
              <Text fontWeight={"bold"}>Followers</Text>
              <Text>57</Text>
            </GridItem>
            <GridItem
              textAlign={"center"}
              borderRight={{ base: "unset", lg: "1px solid" }}
            >
              <Text fontWeight={"bold"}>Followers</Text>
              <Text>57</Text>
            </GridItem>
            <GridItem
              textAlign={"center"}
              borderRight={{ base: "unset", lg: "1px solid" }}
            >
              <Text fontWeight={"bold"}>Followers</Text>
              <Text>57</Text>
            </GridItem>
            <GridItem textAlign={"center"}>
              <Text fontWeight={"bold"}>Followers</Text>
              <Text>57</Text>
            </GridItem>
          </Grid>
        </Flex>
      </Flex>
      {repos && (
        <>
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
            <SimpleGrid gap={5} columns={{ base: 1, lg: 2 }}>
              {repos
                .slice((page - 1) * 10, (page - 1) * 10 + 10)
                .map((x, i) => (
                  <LinkBox
                    key={i}
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
                    <LinkOverlay href={`/${data.login}/${x.name}`} borderRadius="xl">
                      <Flex direction={"column"} px={8} py={4}>
                        <Text mt={2} fontSize={20}>
                          {x.name}
                        </Text>
                        <Text mt={2} fontSize={14} h={20} noOfLines={3}>
                          {x.description}
                        </Text>
                        <Flex justifyContent={"space-between"}>
                          <Flex alignItems={"center"} gap={2}>
                            <Text mt={2} fontSize={12}>
                              <Icon as={BiStar} mr={1.5} />
                              {x.stargazers_count}
                            </Text>
                            <Text mt={2} fontSize={12}>
                              <Icon as={BiGitRepoForked} mr={1.5} />
                              {x.forks_count}
                            </Text>
                          </Flex>
                          <Flex>
                            <Text mt={2} fontSize={12}>
                              <Icon as={BsCodeSquare} mr={1.5} />
                              {x.language}
                            </Text>
                          </Flex>
                        </Flex>
                      </Flex>
                      {/* <Grid
                        templateRows="repeat(2, 1fr)"
                        templateColumns="repeat(3, 1fr)"
                        gap={4}
                        paddingEnd={5}
                      >
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
                      </Grid> */}
                    </LinkOverlay>
                  </LinkBox>
                ))}
            </SimpleGrid>
          </Box>

          <Flex gap={3} mb={6}>
            {page != 1 && (
              <Button onClick={() => setPage(page - 1)}>Prev</Button>
            )}
            {page != Math.ceil(repos.length / 10) && (
              <Button onClick={() => setPage(page + 1)}>Next</Button>
            )}
          </Flex>
        </>
      )}
    </>
  );
};

User.getInitialProps = async ({ query }) => {
  const { user } = query;

  return { user };
};

export default User;
