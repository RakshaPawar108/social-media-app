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
          gap="1.5rem"
        >
          <Text mb="1rem">
            <Heading size="md" p="0.5rem">
              SIGNUP
            </Heading>
            Create an Account
          </Text>
          <Flex gap="0.5rem">
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input
                id="firstname"
                type="text"
                variant="flushed"
                placeholder="Jane"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input
                id="lastname"
                type="text"
                variant="flushed"
                placeholder="Fonda"
              />
            </FormControl>
          </Flex>

          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input
              id="username"
              type="text"
              variant="flushed"
              placeholder="IronMan3000"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              id="password"
              type="password"
              variant="flushed"
              placeholder="********"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              id="confirmPassword"
              type="password"
              variant="flushed"
              placeholder="********"
            />
          </FormControl>
          <Checkbox spacing="1rem">Accept Terms and Conditions</Checkbox>
          <Button colorScheme="teal" variant="solid" w="full">
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
