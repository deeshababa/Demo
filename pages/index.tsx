import type { NextPage } from "next";
import { DESCRIPTION } from "../src/lib/constant";
import { ContentContainer } from "../styles/globalStyles";

const Home: NextPage = () => {
  return <ContentContainer>{DESCRIPTION}</ContentContainer>;
};

export default Home;
