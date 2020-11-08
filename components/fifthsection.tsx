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

const Fifthsection = ({ data, error }) => {
  return (
    <Container maxW="xl" centerContent>
      {error && <div>There was an error.</div>}
      {!error && data && (
        <Container maxW="100%" p="0" margin="0" centerContent>
          <Grid
            w="100%"
            gridAutoRows="1fr"
            templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(12, 1fr)" }}
            gap={4}
            mb="4"
          >
            {data.results.slice(0, 2).map((item, index) => (
              <GridItem rowSpan={1} colSpan={6} pos="relative">
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

            {data.results.slice(2, 6).map((item, index) => (
              <GridItem rowSpan={1} colSpan={3} pos="relative">
                <Box>
                  <AspectRatio ratio={4 / 3}>
                    <Image src={item.fields.thumbnail} objectFit="fill" />
                  </AspectRatio>
                  <Text color="teal.400" fontSize="sm">
                    {item.sectionName} /{" "}
                    {moment(`${item.webPublicationDate}`).fromNow()}
                  </Text>
                  <NextLink
                    href="/article/[...params].tsx"
                    as={`/article/${item.id}`}
                  >
                    <Link color="black" fontSize="sm">
                      {item.webTitle}
                    </Link>
                  </NextLink>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Container>
      )}
    </Container>
  );
};

export default Fifthsection;
