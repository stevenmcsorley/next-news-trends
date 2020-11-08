import React from "react";
import { Container, Heading } from "@chakra-ui/core";
import TopNews from "./../../components/topnews";
import ThirdSection from "../../components/thirdsection";
import SecondSection from "../../components/secondsection";
import FourthSection from "../../components/fourthsection";
import FifthSection from "../../components/fifthsection";
import { fetchCategory } from "../../lib/category";

const Home = (props) => {
  return (
    <Container maxW="100%" p="0" margin="0">
      {/* <Heading m={4} textAlign="center">
        {queryOne.heading}
      </Heading> */}
      <TopNews {...props.data} />
      <Container bg="black" maxW="100%" p="0" margin="0">
        <Heading m={4} textAlign="center" fontSize="lg" color="white">
          {queryTwo.heading}
        </Heading>
        <SecondSection {...props.muse} />
      </Container>
      <Heading m={4} textAlign="center" fontSize="lg">
        {queryThree.heading}
      </Heading>
      <ThirdSection {...props.third} />
      <Heading m={4} textAlign="center" fontSize="lg">
        {queryFour.heading}
      </Heading>
      <FourthSection {...props.fourth} />
      <Heading m={4} textAlign="center" fontSize="lg">
        {queryFive.heading}
      </Heading>
      <FifthSection {...props.fifth} />
    </Container>
  );
};

const queryOne = {
  heading: "World",
  section: "world",
  q: "",
};

const queryTwo = {
  heading: "Games",
  section: "games",
  q: "",
};
const queryThree = {
  heading: "Art & Design",
  section: "artanddesign",
  q: "",
};

const queryFour = {
  heading: "Fashion",
  section: "fashion",
  q: "",
};

const queryFive = {
  heading: "Tech",
  section: "technology",
  q: "",
};

export const getStaticProps = async () => {
  const data = await fetchCategory(queryOne);
  const muse = await fetchCategory(queryTwo);
  const third = await fetchCategory(queryThree);
  const fourth = await fetchCategory(queryFour);
  const fifth = await fetchCategory(queryFive);

  return {
    props: {
      data: data,
      muse: muse,
      third: third,
      fourth: fourth,
      fifth: fifth
    },
  };
};

export default Home;
