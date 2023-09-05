import { BACKEND } from "@/lib/api";
import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { remark } from "remark";
import html from "remark-html";

interface UserProps {
  user: string;
  repo: string;
}

const User = ({ user, repo }: UserProps) => {
  const [data, setData] = useState();
  const [repos, setRepos] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    BACKEND.get(
      `https://raw.githubusercontent.com/fahri-r/red-scarf-boy/master/README.md`
    ).then((res) => {
      remark()
        .use(html)
        .process(res.data)
        .then((x) => {
          const contentHtml = x.toString();
          setData(contentHtml);
        });
    });

    BACKEND.get(`/repos/${user}/${repo}`).then((res) => {
      setRepos(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <>
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
            <Box p={5} w={"full"} dangerouslySetInnerHTML={{ __html: data }} />
          </Box>
        </>
      )}
    </>
  );
};

User.getInitialProps = async ({ query }) => {
  const { user, repo } = query;

  return { user, repo };
};

export default User;
