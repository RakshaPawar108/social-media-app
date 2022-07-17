import {
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";

export const Signup = () => {
  return (
    <Center>
      <Container maxW={340}>
        <Box
          width="full"
          height="100vh"
          justifyContent="center"
          flexDirection="column"
          display="flex"
          gap="2.5rem"
          fontSize="1.5rem"
        >
          <Text mb="1rem" fontSize="1.5rem">
            <Heading size="xl" p="0.5rem">
              SIGNUP
            </Heading>
            Create an Account
          </Text>
          <Flex gap="0.5rem">
            <FormControl>
              <FormLabel fontSize="1.5rem" pb="1rem">
                First Name
              </FormLabel>
              <Input
                id="firstname"
                type="text"
                variant="flushed"
                placeholder="Jane"
                fontSize="1.5rem"
              />
            </FormControl>
            <FormControl>
              <FormLabel fontSize="1.5rem" pb="1rem">
                Last Name
              </FormLabel>
              <Input
                id="lastname"
                type="text"
                variant="flushed"
                placeholder="Fonda"
                fontSize="1.5rem"
              />
            </FormControl>
          </Flex>

          <FormControl>
            <FormLabel fontSize="1.5rem" pb="1rem">
              Username
            </FormLabel>
            <Input
              id="username"
              type="text"
              variant="flushed"
              placeholder="IronMan3000"
              fontSize="1.5rem"
            />
          </FormControl>
          <FormControl>
            <FormLabel fontSize="1.5rem" pb="1rem">
              Password
            </FormLabel>
            <Input
              id="password"
              type="password"
              variant="flushed"
              placeholder="********"
              fontSize="1.5rem"
            />
          </FormControl>
          <FormControl>
            <FormLabel fontSize="1.5rem" pb="1rem">
              Confirm Password
            </FormLabel>
            <Input
              id="confirmPassword"
              type="password"
              variant="flushed"
              placeholder="********"
              fontSize="1.5rem"
            />
          </FormControl>
          <Checkbox spacing="1rem">Accept Terms and Conditions</Checkbox>
          <Button
            colorScheme="teal"
            variant="solid"
            w="full"
            fontSize="1.5rem"
            p="1.5rem"
          >
            SIGNUP
          </Button>
          <Text>
            Already have an account?{" "}
            <Link color="teal.500" as={RouteLink} to="/login">
              Login
            </Link>
          </Text>
        </Box>
      </Container>
    </Center>
  );
};
