import React from "react";
import "./CategoriesBanner.css";
import Banner from "../../images/categoriesBanner.png";

const CategoriesBanner = () => {
  return (
    <div>
      <h3 className="categoriesBanner__title">Featured Event</h3>
      <div className="homeBanner__reklam">
        <img src={Banner} alt="" />
      </div>
    </div>
  );
};

export default CategoriesBanner;
