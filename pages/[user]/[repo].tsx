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
import NextLink from "next/link";
import RepositoryCard from "@/components/RepositoryCard";

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
    <Box>
      {repos && (
        <RepositoryCard
          username={user}
          title={repos.name}
          description={repos.description}
          stargazers_count={repos.stargazers_count}
          forks_count={repos.forks_count}
          language={repos.language}
        />
      )}
      {readme && (
        <>
          <Box
            as={motion.div}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={"0.8s linear"}
            mb={6}
            mt={8}
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
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps<any> = async (context) => {
  const { user, repo } = context.query;
  return { props: { user, repo } };
};

export default User;
