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

const Home = () => {
  const [username, setUsername] = useState("");
  const [data, setData] = useState();

  const handleSubmit = () => {
    setData(undefined);
    if (username) {
      BACKEND.get("/search/users", {
        params: {
          q: username,
        },
      }).then((res) => {
        setData(res.data);
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
        {data?.total_count > 0 &&
          data.items.map((x, i) => (
            <GridItem w={"full"} key={i}>
              <LinkBox
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
                  href={`/${x.login}`}
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  gap={6}
                >
                  <Image
                    borderRadius="full"
                    boxSize="150px"
                    src={x.avatar_url}
                    alt={x.login}
                  />
                  <Heading fontSize={"lg"}>{x.login}</Heading>
                </LinkOverlay>
              </LinkBox>
            </GridItem>
          ))}
      </Grid>
    </Flex>
  );
};

export default Home;
