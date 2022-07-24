import { VStack, Heading, Flex, Text, Button } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaCompass, FaBookmark, FaUser, FaPlus } from "react-icons/fa";

export const SideNav = () => {
  return (
    <VStack as="nav" w="30%" h="100%" align="flex-start" p="1.5rem" gap="3">
      <Heading as="h1" fontSize="3rem" color="blue.300">
        <Link to="/">Socioverse</Link>
      </Heading>
      <Flex as={NavLink} to="/" pl="0.5rem" pt="0.5rem" fontSize="1.5rem">
        <FaHome display="inline" size="2rem" />
        <Text pl="1rem">Home</Text>
      </Flex>
      <Flex
        as={NavLink}
        to="/explore"
        pl="0.5rem"
        pt="0.5rem"
        fontSize="1.5rem"
      >
        <FaCompass display="inline" size="2rem" />
        <Text pl="1rem">Explore</Text>
      </Flex>
      <Flex
        as={NavLink}
        to="/bookmarks"
        pl="0.5rem"
        pt="0.5rem"
        fontSize="1.5rem"
      >
        <FaBookmark display="inline" size="2rem" />
        <Text pl="1rem">Bookmarks</Text>
      </Flex>
      <Flex
        as={NavLink}
        to="/profile"
        pl="0.5rem"
        pt="0.5rem"
        fontSize="1.5rem"
      >
        <FaUser display="inline" size="2rem" />
        <Text pl="1rem">Profile</Text>
      </Flex>
      <Button
        leftIcon={<FaPlus />}
        variant="brand"
        w="50%"
        p="2rem"
        fontSize="1.7rem"
      >
        NEW POST
      </Button>
    </VStack>
  );
};
