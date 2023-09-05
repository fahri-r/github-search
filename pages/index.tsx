import React, { useState, ChangeEvent } from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Text,
  Heading,
} from "@chakra-ui/react";

const Home = () => {
  const [username, setUsername] = useState("");
  const handleSubmit = () => {
    console.log(username);
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
      <Grid templateColumns={"repeat(3, 1fr)"} gap={10} w="full">
        <GridItem w={"full"}>
          <Flex
            direction={"column"}
            alignItems={"center"}
            gap={5}
            p={8}
            bgColor="whiteAlpha.100"
            border="1px"
            borderColor="#ffffff00"
            _hover={{
              bgColor: 'whiteAlpha.300',
              border: '1px',
              borderColor: 'white'
            }}
            _focus={{
              border: '0px'
            }}
            borderRadius="xl"
            boxShadow="lg"
          >
            <Image
              borderRadius="full"
              boxSize="150px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
            <SimpleGrid columns={3}  w="full">
              <Flex direction={"column"} gap={0.5}>
                <Heading textAlign={"center"} fontSize={"sm"}>
                  Followers
                </Heading>
                <Text fontSize={"2xl"} textAlign={"center"}>
                  57
                </Text>
              </Flex>
              <Flex direction={"column"} gap={0.5}>
                <Heading textAlign={"center"} fontSize={"sm"}>
                  Followers
                </Heading>
                <Text fontSize={"2xl"} textAlign={"center"}>
                  57
                </Text>
              </Flex>
              <Flex direction={"column"} gap={0.5}>
                <Heading textAlign={"center"} fontSize={"sm"}>
                  Followers
                </Heading>
                <Text fontSize={"2xl"} textAlign={"center"}>
                  57
                </Text>
              </Flex>
            </SimpleGrid>
          </Flex>
        </GridItem>
        <GridItem w={"full"}>
          <Flex
            direction={"column"}
            alignItems={"center"}
            gap={5}
            p={8}
            bgColor="whiteAlpha.100"
            border="1px"
            borderColor="#ffffff00"
            _hover={{
              bgColor: 'whiteAlpha.300',
              border: '1px',
              borderColor: 'white'
            }}
            _focus={{
              border: '0px'
            }}
            borderRadius="xl"
            boxShadow="lg"
          >
            <Image
              borderRadius="full"
              boxSize="150px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
            <SimpleGrid columns={3}  w="full">
              <Flex direction={"column"} gap={0.5}>
                <Heading textAlign={"center"} fontSize={"sm"}>
                  Followers
                </Heading>
                <Text fontSize={"2xl"} textAlign={"center"}>
                  57
                </Text>
              </Flex>
              <Flex direction={"column"} gap={0.5}>
                <Heading textAlign={"center"} fontSize={"sm"}>
                  Followers
                </Heading>
                <Text fontSize={"2xl"} textAlign={"center"}>
                  57
                </Text>
              </Flex>
              <Flex direction={"column"} gap={0.5}>
                <Heading textAlign={"center"} fontSize={"sm"}>
                  Followers
                </Heading>
                <Text fontSize={"2xl"} textAlign={"center"}>
                  57
                </Text>
              </Flex>
            </SimpleGrid>
          </Flex>
        </GridItem>
        <GridItem w={"full"}>
          <Flex
            direction={"column"}
            alignItems={"center"}
            gap={5}
            p={8}
            bgColor="whiteAlpha.100"
            border="1px"
            borderColor="#ffffff00"
            _hover={{
              bgColor: 'whiteAlpha.300',
              border: '1px',
              borderColor: 'white'
            }}
            _focus={{
              border: '0px'
            }}
            borderRadius="xl"
            boxShadow="lg"
          >
            <Image
              borderRadius="full"
              boxSize="150px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
            <SimpleGrid columns={3}  w="full">
              <Flex direction={"column"} gap={0.5}>
                <Heading textAlign={"center"} fontSize={"sm"}>
                  Followers
                </Heading>
                <Text fontSize={"2xl"} textAlign={"center"}>
                  57
                </Text>
              </Flex>
              <Flex direction={"column"} gap={0.5}>
                <Heading textAlign={"center"} fontSize={"sm"}>
                  Followers
                </Heading>
                <Text fontSize={"2xl"} textAlign={"center"}>
                  57
                </Text>
              </Flex>
              <Flex direction={"column"} gap={0.5}>
                <Heading textAlign={"center"} fontSize={"sm"}>
                  Followers
                </Heading>
                <Text fontSize={"2xl"} textAlign={"center"}>
                  57
                </Text>
              </Flex>
            </SimpleGrid>
          </Flex>
        </GridItem>
        <GridItem w={"full"}>
          <Flex
            direction={"column"}
            alignItems={"center"}
            gap={5}
            p={8}
            bgColor="whiteAlpha.100"
            border="1px"
            borderColor="#ffffff00"
            _hover={{
              bgColor: 'whiteAlpha.300',
              border: '1px',
              borderColor: 'white'
            }}
            _focus={{
              border: '0px'
            }}
            borderRadius="xl"
            boxShadow="lg"
          >
            <Image
              borderRadius="full"
              boxSize="150px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
            <SimpleGrid columns={3}  w="full">
              <Flex direction={"column"} gap={0.5}>
                <Heading textAlign={"center"} fontSize={"sm"}>
                  Followers
                </Heading>
                <Text fontSize={"2xl"} textAlign={"center"}>
                  57
                </Text>
              </Flex>
              <Flex direction={"column"} gap={0.5}>
                <Heading textAlign={"center"} fontSize={"sm"}>
                  Followers
                </Heading>
                <Text fontSize={"2xl"} textAlign={"center"}>
                  57
                </Text>
              </Flex>
              <Flex direction={"column"} gap={0.5}>
                <Heading textAlign={"center"} fontSize={"sm"}>
                  Followers
                </Heading>
                <Text fontSize={"2xl"} textAlign={"center"}>
                  57
                </Text>
              </Flex>
            </SimpleGrid>
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Home;
