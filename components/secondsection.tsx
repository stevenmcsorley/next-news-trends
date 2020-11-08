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

const SecondSection = ({ data, error }) => {
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
              <GridItem rowSpan={2} colSpan={5} bg="grey" pos="relative">
                <Box
                  p="4"
                  pos="absolute"
                  bottom="0"
                  left="0"
                  right="0"
                  w="100%"
                  zIndex={2}
                  bgImage="linear-gradient(0deg, black 60%, rgba(0,0,0, 0))"
                >
                  <Text color="teal.500" fontSize="sm">
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
            <GridItem rowSpan={2} colSpan={4} pos="relative">
              {data.results.slice(1, 3).map((item, index) => (
                <div>
                  <AspectRatio ratio={16 / 9}>
                    <Image src={item.fields.thumbnail} width="100%" />
                  </AspectRatio>

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
                </div>
              ))}
            </GridItem>

            <GridItem rowSpan={2} colSpan={3} pos="relative">
              {data.results.slice(3, 8).map((item, index) => (
                <Box mb="4">
                  {/* <AspectRatio  ratio={16 / 9}>
                  <Image src={item.fields.thumbnail} width="100%" />
                </AspectRatio> */}

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
                </Box>
              ))}
            </GridItem>
          </Grid>
        </Container>
      )}
    </Container>
  );
};

export default SecondSection;