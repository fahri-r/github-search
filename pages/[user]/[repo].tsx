import Repository from "@/entity/Repository";
import { BACKEND } from "@/lib/api";
import {
  Box,
  Button,
  Flex,
  Heading,
  LinkBox,
  Text,
  LinkOverlay,
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useEffect, useState } from "react";
import { BiGitRepoForked, BiStar } from "react-icons/bi";
import { BsCodeSquare } from "react-icons/bs";
import { remark } from "remark";
import html from "remark-html";

const User = ({
  user,
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [readme, setReadme] = useState<string>();
  const [repos, setRepos] = useState<Repository>();

  useEffect(() => {
    BACKEND.get(
      `https://raw.githubusercontent.com/${user}/${repo}/master/README.md`
    ).then((res) => {
      remark()
        .use(html)
        .process(res.data)
        .then((x) => {
          const contentHtml = x.toString();
          setReadme(contentHtml);
        });
    });

    BACKEND.get(`/repos/${user}/${repo}`).then((res) => {
      setRepos(res.data);
    });
  }, []);

  return (
    <>
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
        mb={8}
      >
        <LinkOverlay href={`${repos?.svn_url}`} borderRadius="xl">
          <Flex direction={"column"} px={8} py={4}>
            <Text mt={2} fontSize={20}>
              {repos?.name}
            </Text>
            <Text mt={2} fontSize={14} h={20} noOfLines={3}>
              {repos?.description}
            </Text>
            <Flex justifyContent={"space-between"}>
              <Flex alignItems={"center"} gap={2}>
                <Text mt={2} fontSize={12}>
                  <Icon as={BiStar} mr={1.5} />
                  {repos?.stargazers_count}
                </Text>
                <Text mt={2} fontSize={12}>
                  <Icon as={BiGitRepoForked} mr={1.5} />
                  {repos?.forks_count}
                </Text>
              </Flex>
              <Flex>
                <Text mt={2} fontSize={12}>
                  <Icon as={BsCodeSquare} mr={1.5} />
                  {repos?.language}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </LinkOverlay>
      </LinkBox>
      {readme && (
        <>
          <Box
            as={motion.div}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={"0.8s linear"}
            mb={6}
          >
            <Heading as="h3" variant="section-title">
              Readme
            </Heading>
            <Box
              p={5}
              w={"full"}
              dangerouslySetInnerHTML={{ __html: readme }}
            />
          </Box>
        </>
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps<any> = async (context) => {
  const { user, repo } = context.query;
  return { props: { user, repo } };
};

export default User;
