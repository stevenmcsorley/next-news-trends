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
import { fetchCategory } from "../../lib/category";

const Home = ({ data, error }) => {


  return (
    <Container maxW="xl" centerContent>

        {/* <header>
            <h4>News</h4>
          </header> */}
        {error && <div>There was an error.</div>}
        {!error && data && (
          <div>
            <Grid
              w="100%"
              gridAutoRows="1fr"
              templateColumns="repeat(5, 1fr)"
              gap={4}
              mb="4"
            >
              {data.results.slice(0, 1).map((item, index) => (
                <GridItem rowSpan={2} colSpan={3} bg="grey" pos="relative">
                  <Box
                    p="2"
                    pos="absolute"
                    bottom="0"
                    left="0"
                    zIndex={2}
                    bgImage="linear-gradient(0deg, black 60%, rgba(0,0,0, 0.1))"
                  >
                    <Text color="white">
                      {item.sectionName} /{" "}
                      {moment(`${item.webPublicationDate}`).fromNow()}
                    </Text>
                    <NextLink
                      href="/article/[...params].tsx"
                      as={`/article/${item.id}`}
                    >
                      <Link color="white">{item.webTitle}</Link>
                    </NextLink>
                  </Box>
                  <AspectRatio maxH="500px" ratio={4 / 3}>
                    <Image src={item.fields.thumbnail} />
                  </AspectRatio>
                </GridItem>
              ))}
              {data.results.slice(1, 3).map((item, index) => (
                <GridItem colSpan={2} bg="grey" pos="relative">
                  <AspectRatio maxH="200px" ratio={16 / 9}>
                    <Image src={item.fields.thumbnail} width="100%" />
                  </AspectRatio>
                  <Box
                    p="2"
                    pos="absolute"
                    bottom="0"
                    left="0"
                    zIndex={2}
                    bgImage="linear-gradient(0deg, black 60%, rgba(0,0,0, 0.1))"
                  >
                    <NextLink
                      href="/article/[...params].tsx"
                      as={`/article/${item.id}`}
                    >
                      <Link color="white">{item.webTitle}</Link>
                    </NextLink>
                  </Box>
                </GridItem>
              ))}
            </Grid>
            {/* <Grid w="100%" templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6}> */}
            <Grid
              w="100%"
              templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
              gap={4}
              mb="4"
            >
              {data.results.slice(3, 21).map((item, index) => (
                <Box key={index}>
                  <Image src={item.fields.thumbnail} />
                  <NextLink
                    href="`/article/${item.id}`"
                    as={`/article/${item.id}`}
                  >
                    <Link color="black">{item.webTitle}</Link>
                  </NextLink>
                </Box>
              ))}
            </Grid>
          </div>
        )}
  
    </Container>
  );
};

export const getStaticProps = async () => {
  const data = await fetchCategory();

  return {
    props: data,
  };
};

export default Home;
