/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Grid, Card, Image, Text } from "theme-ui";
import Link from "next/link";
import { fetchCategory } from "../../lib/category";

const Home = ({ data, error }) => {
  return (
    <Container p={4} bg="muted">
      <section>
        <div>
          {/* <header>
            <h4>News</h4>
          </header> */}
          {error && <div>There was an error.</div>}
          {!error && data && (
            <Grid gap={2} columns={[2, null, 4]}>
              {data.results.map((item, key) => (
                <Card key={key}>
                  <Image src={item.fields.thumbnail} />
                  <Link
                    href="/article/[...params].tsx"
                    as={`/article/${item.id}`}
                  >
                    <a>
                      <Text variant="caps">{item.webTitle}</Text>
                    </a>
                  </Link>
                </Card>
              ))}
            </Grid>
          )}
        </div>
      </section>
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
