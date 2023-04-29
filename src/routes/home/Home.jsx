import React from "react";
import { Container } from "../../utils/Components";
import Search from "../../components/search/Search";
import HomeBanner from "../../components/homeBanner/HomeBanner";

const Home = () => {
  return (
    <div>
      <Container>
        <Search />
        <HomeBanner />
      </Container>
    </div>
  );
};

export default Home;
