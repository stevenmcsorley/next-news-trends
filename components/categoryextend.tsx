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

const CategoryExtend = ({ data, error }) => {
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
            {data.results.slice(6, 46).map((item, index) => (
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

export default CategoryExtend;
