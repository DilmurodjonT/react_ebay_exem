import React from "react";
import { Container } from "../../utils/Components";
import Search from "../../components/search/Search";
import HomeBanner from "../../components/homeBanner/HomeBanner";
import AllCategories from "../../components/allCategories/AllCategories";

const Home = () => {
  return (
    <div>
      <Container>
        <Search />
        <HomeBanner />
        <AllCategories />
      </Container>
    </div>
  );
};

export default Home;
