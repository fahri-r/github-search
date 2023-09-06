import { Flex, Icon, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { BiGitRepoForked, BiStar } from "react-icons/bi";
import { BsCodeSquare } from "react-icons/bs";

interface RepositoryCardProps {
  username: string;
  title: string;
  description?: string;
  stargazers_count: number;
  forks_count: number;
  language?: string;
}

const RepositoryCard = ({
  username,
  title,
  description,
  stargazers_count,
  forks_count,
  language,
}: RepositoryCardProps) => {
  return (
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
      <LinkOverlay
        as={NextLink}
        href={`/${username}/${title}`}
        borderRadius="xl"
      >
        <Flex direction={"column"} px={8} py={4}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
          <Text mt={2} fontSize={14} h={20} noOfLines={3}>
            {description}
          </Text>
          <Flex justifyContent={"space-between"}>
            <Flex alignItems={"center"} gap={2}>
              <Text mt={2} fontSize={12}>
                <Icon as={BiStar} mr={1.5} />
                {stargazers_count}
              </Text>
              <Text mt={2} fontSize={12}>
                <Icon as={BiGitRepoForked} mr={1.5} />
                {forks_count}
              </Text>
            </Flex>
            <Flex>
              <Text mt={2} fontSize={12}>
                <Icon as={BsCodeSquare} mr={1.5} />
                {language}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </LinkOverlay>
    </LinkBox>
  );
};

export default RepositoryCard;
