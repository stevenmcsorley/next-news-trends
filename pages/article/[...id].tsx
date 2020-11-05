/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Grid, Card, Image, Text } from "theme-ui";
import { useRouter } from 'next/router'
import Link from "next/link";

// const Page = () => {
//     const router = useRouter()

//     const {params} = router.query


//     return (
//         <h1>Article id is {params}</h1>
//     )
// }
// export default Page


import axios from "axios";



const fetchData = async (params) =>
  await axios
    .get(
      "https://content.guardianapis.com/" + params + "?show-related=true&show-most-viewed=true&show-fields=all&api-key=0d3ae253-e9ba-4bad-814e-69a9a5fda18e"
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
            <style jsx>{`
.gu-image{
  width:100%;
  height:auto;
}
      `}</style>
      <section>
        <div>
          {/* <header>
            <h4>News</h4>
          </header> */}
          {error && <div>There was an error.</div>}
          {!error && data && (
            <Grid gap={2} columns={[1, null, 2]}>
                              <Card>
                  <Text>{data.content.webTitle}</Text>
                  <Text dangerouslySetInnerHTML={{ __html: data.content.fields.body}}>
                 
                    </Text>
                  
                  {/* <Image src={item.fields.thumbnail} />
                  <Link href="/article/[...params].tsx" as={`/article/${item.id}`}>
                    <a>
                  <Text variant="caps">{item.webTitle}</Text>
                  </a>
                  </Link> */}
                </Card>
                <Grid gap={2} columns={[1, null, 1]}>
              {data.relatedContent.map((item, key) => (
                <Card key={key}>
                  <Text variant="caps">{item.webTitle}</Text>
                  {/* <Image src={item.fields.thumbnail} />
                  <Link href="/article/[...params].tsx" as={`/article/${item.id}`}>
                    <a>
                  
                  </a>
                  </Link> */}
                </Card>
              ))}
              </Grid>
            </Grid>
          )}
        </div>
      </section>
    </Container>
  );
};

export const getInitialProps = async (params) => {

// const router = useRouter()
// const {id} = router.query
// const id = params.resolvedUrl
// const trimedId = id.substring(9)
    
    // const data = await axios
    // .get(
    //   `https://content.guardianapis.com/${trimedId}?show-related=true&show-most-viewed=true&show-fields=all&api-key=0d3ae253-e9ba-4bad-814e-69a9a5fda18e`
    // )
    // .then((res) => ({
    //   error: false,
    //   data: res.data.response,
    // }))
    // .catch(() => ({
    //   error: true,
    //   data: null,
    // }));

    const data = await fetchData(params);

    console.log("params", params)

  return {
    props: data,
  };
};

export default Home;