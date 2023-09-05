import Repository from "@/entity/Repository";
import User from "@/entity/User";
import { BACKEND } from "@/lib/api";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useEffect, useState } from "react";
import { BiGitRepoForked, BiStar } from "react-icons/bi";
import { BsCodeSquare } from "react-icons/bs";

const User = ({
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [data, setData] = useState<User>();
  const [repos, setRepos] = useState<Repository[]>();
  const [page, setPage] = useState(1);

  useEffect(() => {
    BACKEND.get(`/users/${user}`).then((res) => {
      setData(res.data);
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
            <Text fontSize={"lg"}>
              {data?.created_at
                ? `Joined ${new Date(data?.created_at).toDateString()}`
                : ""}
            </Text>
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
                    <LinkOverlay
                      href={`/${data?.login}/${x.name}`}
                      borderRadius="xl"
                    >
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

export const getServerSideProps: GetServerSideProps<any> = async (context) => {
  const { user } = context.query;
  return { props: { user } };
};

export default User;
