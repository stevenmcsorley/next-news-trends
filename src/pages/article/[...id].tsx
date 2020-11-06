/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Grid, Card, Image, Text } from "theme-ui";
import Link from "next/link";

import { fetchArticle } from "../../../lib/article";

const Article = ({ props, error }) => {
  return (
    <Container p={4} bg="muted">
      <section>
      <div sx={{ variant: "containers.page", height: "100%" }}>
          {error && <div>There was an error.</div>}
          {!error && props.article && (
            <Grid gap={3} columns={[2, "2fr 1fr"]}>
              <Card>
                <Text>{props.article.content.webTitle}</Text>
                <Text
                  dangerouslySetInnerHTML={{
                    __html: props.article.content.fields.body,
                  }}
                ></Text>
              </Card>
              <Card>
                <Grid gap={2} columns={[1]}>
                  {props.article.relatedContent.map((item, key) => (
                    <Card key={key}>
                      <Image src={item.fields.thumbnail} />
                      <Link
                        href="/article/[...id].tsx"
                        as={`/article/${item.id}`}
                      >
                        <a>
                          <Text variant="caps">{item.webTitle}</Text>
                        </a>
                      </Link>
                    </Card>
                  ))}
                </Grid>
              </Card>
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
