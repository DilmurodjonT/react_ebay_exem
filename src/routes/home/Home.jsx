import React from "react";
import { Container } from "../../utils/Components";
import Search from "../../components/search/Search";
import HomeBanner from "../../components/homeBanner/HomeBanner";
import AllCategories from "../../components/allCategories/AllCategories";
import Products from "../../components/products/Products";
import HomeBannerTwo from "../../components/homeBannerTwo/HomeBannerTwo";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Container>
        <Search />
        <HomeBanner />
        <AllCategories />
        <Products />
        <HomeBannerTwo />
        <Footer />
      </Container>
    </div>
  );
};

export default Home;
