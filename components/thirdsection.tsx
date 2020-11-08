import React from "react";
import {
  Container,
  Grid,
  GridItem,
  Flex,
  Box,
  Image,
  Text,
  AspectRatio,
  Link,
} from "@chakra-ui/core";
import NextLink from "next/link";
import moment from "moment";

const MiddleNews = ({ data, error }) => {
  return (
    <Container maxW="xl" centerContent>
      {error && <div>There was an error.</div>}
      {!error && data && (
        <Container maxW="100%" p="0" margin="0" centerContent>
          <Grid
            w="100%"
            gridAutoRows="1fr"
            templateColumns="repeat(12, 1fr)"
            gap={4}
            mb="4"
          >
            {data.results.slice(0, 1).map((item, index) => (
              <GridItem rowSpan={2} colSpan={7} pos="relative">
                <Box
                  p="4"
                  pos="absolute"
                  bottom="0"
                  left="0"
                  right="0"
                  w="100%"
                  zIndex={2}
                  bgImage="linear-gradient(0deg, rgba(0,0,0, 0.5) 70%, rgba(0,0,0, 0))"
                >
                  <Text color="teal.300" fontSize="sm" fontWeight="bold">
                    {item.sectionName} /{" "}
                    {moment(`${item.webPublicationDate}`).fromNow()}
                  </Text>
                  <NextLink
                    href="/article/[...params].tsx"
                    as={`/article/${item.id}`}
                  >
                    <Link color="white" fontSize="xl">
                      {item.webTitle}
                    </Link>
                  </NextLink>
                </Box>
                <AspectRatio height="100%" ratio={4 / 3}>
                  <Image src={item.fields.thumbnail} objectFit="fill" />
                </AspectRatio>
              </GridItem>
            ))}
            <GridItem rowSpan={2} colSpan={5} pos="relative">
              {data.results.slice(1, 6).map((item, index) => (
                <Flex align="center">
                  <Flex align="center" justify="center">
                    <Box ratio={4 / 3} w="122px">
                      <Image src={item.fields.thumbnail} objectFit="fill" />
                    </Box>
                  </Flex>
                  <Flex
                    align="left"
                    p="4"
                    flexDirection="column"
                    justify="flex-start"
                  >
                    <Text color="grey" fontSize="sm">
                      {item.sectionName} /{" "}
                      {moment(`${item.webPublicationDate}`).fromNow()}
                    </Text>
                    <NextLink
                      href="/article/[...params].tsx"
                      as={`/article/${item.id}`}
                    >
                      <Link color="black" fontSize="lg">
                        {item.webTitle}
                      </Link>
                    </NextLink>
                  </Flex>
                </Flex>
              ))}
            </GridItem>
          </Grid>
        </Container>
      )}
    </Container>
  );
};

export default MiddleNews;
