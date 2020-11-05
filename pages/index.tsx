/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Grid, Card, Image, Text } from "theme-ui";
import Link from "next/link";

import axios from "axios";

const fetchData = async () =>
  await axios
    .get(
      "https://content.guardianapis.com/search?order-by=newest&show-fields=all&section=world&q=World%20news&page-size=48&api-key=0d3ae253-e9ba-4bad-814e-69a9a5fda18e"
    )
    .then((res) => ({
      error: false,
      data: res.data.response,
    }))
    .catch(() => ({
      error: true,
      data: null,
    }));

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
                  <Link href="/article/[...params].tsx" as={`/article/${item.id}`}>
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
  const data = await fetchData();

  return {
    props: data,
  };
};

export default Home;
