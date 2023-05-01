import React, { useEffect, useState } from "react";
import "./AllCategories.css";
import axios from "axios";
import Strela from "../../images/strela_right.png";
import { Link } from "react-router-dom";

const AllCategories = () => {
  const [CategoriesData, setCategoriesData] = useState([]);
  useEffect(() => {
    axios("https://api.escuelajs.co/api/v1/categories")
      .then((response) => setCategoriesData(response.data))
      .catch((error) => {
        console.log(error.response.data.error);
      });
  }, []);
  // console.log(CategoriesData);
  return (
    <section className="allCategories">
      <div className="allCategoris__title__blog">
        <h3 className="allCategoris__title">Score these trending kicks</h3>
        <span>See all</span>
        <img src={Strela} alt="" />
      </div>
      <div className="allCategories__container">
        {CategoriesData.map((category) => (
          <Link
            className="category__item"
            key={category.id}
            to={`/categories/${category.id}`}
          >
            <div className="category__item__image">
              <img src={category.image} alt="" />
            </div>
            <p>{category.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AllCategories;
