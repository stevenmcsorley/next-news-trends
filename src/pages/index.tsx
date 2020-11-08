import React from "react";
import TopNews from "./../../components/topnews";
import ThirdSection from "../../components/thirdsection";
import SecondSection from "../../components/secondsection";
import { fetchCategory } from "../../lib/category";

const Home = (props) => {
  return (
    <div>
      <TopNews {...props.data} />
      <SecondSection {...props.muse} />
      <ThirdSection {...props.third} />
      
    </div>
  );
};

const queryOne = {
  section: "music",
  q: "",
};

const queryTwo = {
  section: "games",
  q: "",
};
const queryThree = {
  section: "fashion",
  q: "",
};

export const getStaticProps = async () => {
  const data = await fetchCategory(queryOne);
  const muse = await fetchCategory(queryTwo);
  const third = await fetchCategory(queryThree);

  return {
    props: {
      data: data,
      muse: muse,
      third: third,
    },
  };
};

export default Home;
