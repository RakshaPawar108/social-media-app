import {
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";

export const Login = () => {
  return (
    <Center>
      <Container maxW={320}>
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
              LOGIN
            </Heading>
            Please enter your credentials
          </Text>
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
          <Checkbox spacing="1rem">Remember Me</Checkbox>
          <Button colorScheme="teal" variant="solid" w="full">
            LOGIN
          </Button>
          <Button colorScheme="teal" variant="solid" w="full">
            LOGIN WITH GUEST CREDENTIALS
          </Button>
          <Text>
            Don't have an account?{" "}
            <Link color="teal.500" as={RouteLink} to="/signup">
              Signup
            </Link>
          </Text>
        </Box>
      </Container>
    </Center>
  );
};
