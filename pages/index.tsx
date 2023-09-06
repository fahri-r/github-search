import React, { useState, ChangeEvent } from "react";
import {
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  LinkBox,
  LinkOverlay,
  Heading,
} from "@chakra-ui/react";
import { BACKEND } from "@/lib/api";
import SearchResult from "@/entity/SearchResult";
import UserCard from "@/components/UserCard";

const Home = () => {
  const [username, setUsername] = useState("");
  const [data, setData] = useState<SearchResult>();

  const handleSubmit = () => {
    setData(undefined);
    if (username) {
      BACKEND.get("/search/users", {
        params: {
          q: username,
        },
      }).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
    }
  };

  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  return (
    <Flex
      direction={"column"}
      grow={1}
      alignItems={"center"}
      justifyContent={"center"}
      py={20}
      gap={10}
    >
      <InputGroup>
        <Input
          pr="4.5rem"
          type="text"
          placeholder="Search Github username"
          onChange={handleUsername}
        />
        <InputRightElement width="4.5rem" right={1}>
          <Button h="1.75rem" size="sm" type="submit" onClick={handleSubmit}>
            Search
          </Button>
        </InputRightElement>
      </InputGroup>
      <Grid
        templateColumns={{
          sm: "unset",
          md: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap={10}
        w="full"
      >
        {data?.items.map((x, i) => (
          <GridItem w={"full"} key={i}>
            <UserCard username={x.login} avatar_url={x.avatar_url} />
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
};

export default Home;
