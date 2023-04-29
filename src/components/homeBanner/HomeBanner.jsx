import React from "react";
import "./HomeBanner.css";
import Banner from "../../images/homeBanner.png";
import Reklama from "../../images/HomeReklam.png";

const HomeBanner = () => {
  return (
    <div>
      <ul className="homeBanner__peages">
        <li className="homeBanner__home">Home</li>
        <li>Saved</li>
        <li>Motors</li>
        <li>Electronics</li>
        <li>Collectibles</li>
        <li>Home & Garden</li>
        <li>Fashion</li>
        <li>Toys</li>
        <li>Sporting Goods</li>
      </ul>
      <div className="homeBanner__banner">
        <img src={Banner} alt="" />
      </div>
      <div className="homeBanner__reklam">
        <img src={Reklama} alt="" />
      </div>
    </div>
  );
};

export default HomeBanner;
