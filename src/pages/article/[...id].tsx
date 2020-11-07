import React from "react";
import { Container, Grid, Box, Image, Text } from "@chakra-ui/core";
import Link from "next/link";

import { fetchArticle } from "../../../lib/article";

const Article = ({ props, error }) => {
  return (
    <Container p={4} bg="muted">
      <section>
      <div>
          {error && <div>There was an error.</div>}
          {!error && props.article && (
            <Grid gap={3} columns={[2, "2fr 1fr"]}>
              <Box>
                <Text>{props.article.content.webTitle}</Text>
                <Text
                  dangerouslySetInnerHTML={{
                    __html: props.article.content.fields.body,
                  }}
                ></Text>
              </Box>
              <Box>
                <Grid gap={2} columns={[1]}>
                  {props.article.relatedContent.map((item, key) => (
                    <Box key={key}>
                      <Image src={item.fields.thumbnail} />
                      <Link
                        href="/article/[...id].tsx"
                        as={`/article/${item.id}`}
                      >
                        <a>
                          <Text variant="caps">{item.webTitle}</Text>
                        </a>
                      </Link>
                    </Box>
                  ))}
                </Grid>
              </Box>
            </Grid>
          )}
        </div>
      </section>
    </Container>
  );
};

Article.getInitialProps = async (ctx: { asPath: string }) => {
  const id = ctx.asPath.substring(9);
  const data = await fetchArticle(id);
  return {
    props: data,
  };
};

export default Article;
