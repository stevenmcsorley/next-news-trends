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

const TopNews = ({ data, error }) => {
  return (
    <Container maxW="xl" centerContent>
      {error && <div>There was an error.</div>}
      {!error && data && (
        <Container maxW="100%" p="0" margin="0" centerContent>
          <Grid
            w="100%"
            gridAutoRows="1fr"
            templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(5, 1fr)" }}
            gap={{ base: 0, lg: 4 }}
            mb="4"
          >
            {data.results.slice(0, 1).map((item, index) => (
              <GridItem
                rowSpan={{ base: 1, lg: 2 }}
                colSpan={{ base: 1, lg: 3 }}
                pos="relative"
                mb={{base: 4, md: 0, lg:0}}
              >
                <Box
                  pos="absolute"
                  bottom="0"
                  left="0"
                  right="0"
                  w="100%"
                  zIndex={2}
                  bgImage="linear-gradient(0deg, rgba(0,0,0, 0.4) 70%, rgba(0,0,0, 0))"
                >
                  <Text p="4">
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
                  </Text>
                </Box>
                <AspectRatio height="100%" ratio={4 / 3}>
                  <Image src={item.fields.thumbnail} />
                </AspectRatio>
              </GridItem>
            ))}
            {data.results.slice(1, 3).map((item, index) => (
              <GridItem colSpan={2} pos="relative" mb={{base: 4, md: 0, lg:0}}>
                <AspectRatio maxH="100%" ratio={{ base: 4 / 3, lg: 16 / 9 }}>
                  <Image src={item.fields.thumbnail} width="100%" />
                </AspectRatio>
                <Box
                  pos="absolute"
                  bottom="0"
                  left="0"
                  zIndex={2}
                  right="0"
                  w="100%"
                  bgImage="linear-gradient(0deg, rgba(0,0,0, 0.5) 50%, rgba(0,0,0, 0))"
                >
                  <Text p="4">
                    <Text color="teal.300" fontSize="sm" fontWeight="bold">
                      {item.sectionName} /{" "}
                      {moment(`${item.webPublicationDate}`).fromNow()}
                    </Text>
                    <NextLink
                      href="/article/[...params].tsx"
                      as={`/article/${item.id}`}
                    >
                      <Link color="white" fontSize="lg">
                        {item.webTitle}
                      </Link>
                    </NextLink>
                  </Text>
                </Box>
              </GridItem>
            ))}
          </Grid>
          <Grid
            w="100%"
            templateColumns={{
              base: "repeat(1, 1fr)",
              lg: "repeat(auto-fit, minmax(200px, 1fr))",
            }}
            gap={4}
            mb="4"
          >
            {data.results.slice(3, 6).map((item, index) => (
              <Box key={index}>
                <Image src={item.fields.thumbnail} w="100%" />
                <Text color="teal.400" fontSize="sm">
                  {item.sectionName} /{" "}
                  {moment(`${item.webPublicationDate}`).fromNow()}
                </Text>
                <NextLink
                  href="`/article/${item.id}`"
                  as={`/article/${item.id}`}
                >
                  <Link color="black" fontSize="sm">
                    {item.webTitle}
                  </Link>
                </NextLink>
              </Box>
            ))}
          </Grid>
        </Container>
      )}
    </Container>
  );
};

export default TopNews;
