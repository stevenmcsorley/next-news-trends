/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Grid, Card, Image, Text } from "theme-ui";
import Link from "next/link";
import { fetchCategory } from "../../lib/category";

const Home = ({ data, error }) => {
  return (
    <Container p={4} bg="muted">
      <section>
        <div sx={{ variant: "containers.page", height: "100%" }}>
          {/* <header>
            <h4>News</h4>
          </header> */}
          {error && <div>There was an error.</div>}
          {!error && data && (
            <Grid gap={2} columns={[2, null, 3]}>
              {data.results.map((item, key) => (
                <Card key={key}>
                  <Image
                    src={item.fields.thumbnail}
                    sx={{
                      objectFit: "cover",
                    }}
                  />
                  <Link
                    href="/article/[...params].tsx"
                    as={`/article/${item.id}`}
                   
                  >
                      {item.webTitle}
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
