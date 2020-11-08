import React from "react";
import { Container, Box, Heading, Flex, Link, Text, Button } from "@chakra-ui/core";
import { CategoryConfig } from "../configs/categoryconfig";

const categories = CategoryConfig();

const Nav = () => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="white"
      color="black"
      mb="4"
    >
      <Container maxW="xl" centerContent>
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          <Link href="/">RTNews</Link>
        </Heading>
      </Flex>

      <Box d={{ base: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill="black"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        {categories.map((link, index) => {
          return (
            <Link href={`/${link.sectionId}`} p={1} key={index} display="block">
              {link.sectionName}
            </Link>
          );
        })}
      </Box>
      </Container>

    </Flex>
   
  );
};

export default Nav;
