import React from "react";
import {
  Container,
  Box,
  Heading,
  Flex,
  Link,
  Text,
  Button,
} from "@chakra-ui/core";

import { CategoryConfig } from "../configs/categoryconfig";
const categories = CategoryConfig();

const Nav = (props) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Container maxW="xl" centerContent>
      <Container maxW="100%" p="0" margin="0" centerContent>
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          padding="1.5rem"
          color="black"
          {...props}
        >
          <Flex align="center" mr={5}>
            <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
              <Link href="/">RNT</Link>
            </Heading>
          </Flex>

          <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
            <svg
              fill="teal.400"
              width="12px"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </Box>

          <Box
            display={{ base: show ? "block" : "none", md: "flex" }}
            width={{ base: "full", md: "auto" }}
            alignItems="center"
            flexGrow={1}
          >
            {categories.map((link, index) => {
              return (
                <Link
                  href={`/${link.sectionId}`}
                  p={1}
                  key={index}
                  mt={{ base: 4, md: 0 }}
                  mr={6}
                  display="block"
                >
                  {link.sectionName}
                </Link>
              );
            })}
          </Box>
        </Flex>
      </Container>
    </Container>
  );
};

export default Nav;
