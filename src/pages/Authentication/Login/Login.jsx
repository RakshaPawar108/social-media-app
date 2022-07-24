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
              LOGIN
            </Heading>
            Please enter your credentials
          </Text>
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
          <Checkbox spacing="1rem">Remember Me</Checkbox>
          <Button variant="brand" w="full" fontSize="1.5rem" p="1.5rem">
            LOGIN
          </Button>
          <Button variant="brand" w="full" fontSize="1.5rem" p="1.5rem">
            LOGIN WITH GUEST CREDENTIALS
          </Button>
          <Text>
            Don't have an account?{" "}
            <Link color="blue.500" as={RouteLink} to="/signup">
              Signup
            </Link>
          </Text>
        </Box>
      </Container>
    </Center>
  );
};
