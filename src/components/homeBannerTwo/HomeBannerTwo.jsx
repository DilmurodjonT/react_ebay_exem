import React from "react";
import "./HomeBannerTwo.css";
import Banner from "../../images/bannerTwo.png";

const HomeBannerTwo = () => {
  return (
    <div className="homeBannerTwo">
      <div className="bannerTwo">
        <img src={Banner} alt="" />
      </div>
    </div>
  );
};

export default HomeBannerTwo;
