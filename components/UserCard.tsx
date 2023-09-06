import { Heading, Image, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { motion } from "framer-motion";
import NextLink from "next/link";

interface UserCardProps {
  username: string;
  avatar_url: string;
}

const UserCard = ({ username, avatar_url }: UserCardProps) => {
  return (
    <LinkBox
      as={motion.div}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={"0.8s linear"}
      p={8}
      bgColor="whiteAlpha.100"
      border="1px"
      borderColor="#ffffff00"
      _hover={{
        bgColor: "whiteAlpha.300",
        border: "1px",
        borderColor: "white",
        cursor: "pointer",
      }}
      _focus={{
        border: "0px",
      }}
      borderRadius="xl"
      boxShadow="lg"
    >
      <LinkOverlay
        as={NextLink}
        href={`/${username}`}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={6}
      >
        <Image
          borderRadius="full"
          boxSize="150px"
          src={avatar_url}
          alt={username}
        />
        <Heading fontSize={"lg"}>{username}</Heading>
      </LinkOverlay>
    </LinkBox>
  );
};

export default UserCard;
