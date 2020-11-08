import React from "react";
import TopNews from "./../../components/topnews";
import MiddleNews from "./../../components/middlenews";
import { fetchCategory } from "../../lib/category";

const Home = (props) => {
  return (
    <div>
      <TopNews {...props.data} />
      <MiddleNews {...props.muse} />
    </div>
  );
};

const queryOne = {
  section: "music",
  q: "Entertainment",
};

const queryTwo = {
  section: "games",
  q: "Entertainment",
};

export const getStaticProps = async () => {
  const data = await fetchCategory(queryOne);
  const muse = await fetchCategory(queryTwo);

  return {
    props: {
      data: data,
      muse: muse,
    },
  };
};

export default Home;
