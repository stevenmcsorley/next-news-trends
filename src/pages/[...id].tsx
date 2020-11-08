import React from "react";
import { Container } from "@chakra-ui/core";
import TopNews from "./../../components/topnews";
import CategoryExtend from "./../../components/categoryextend";

import { fetchCategory } from "../../lib/category";

const Article = ({ props, error }) => {
  return (
    <Container maxW="xl" centerContent>
      <TopNews {...props.data} />
      <CategoryExtend {...props.data} />
    </Container>
  );
};

Article.getInitialProps = async (ctx: { query: { id: any } }) => {
  const id = {
    section: ctx.query.id,
  };

  const data = await fetchCategory(id);
  return {
    props: {
      data: data,
    },
  };
};

export default Article;
