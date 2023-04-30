import React, { useEffect, useState } from "react";
import "./Categories.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container } from "../../utils/Components";
import Search from "../../components/search/Search";
import CategoriesBanner from "../../components/categoriesBanner/CategoriesBanner";
import { Link } from "react-router-dom";

const Categories = () => {
  const { id } = useParams();
  const [categoryData, setcategoryData] = useState([]);
  useEffect(() => {
    axios(`https://api.escuelajs.co/api/v1/categories/${id}/products`, {
      timeout: 10000,
    }).then((components) =>
      setcategoryData(components.data).catch((err) => console.log(err))
    );
  }, [id]);
  // console.log(categoryData[0].category.name);
  return (
    <div>
      <Container>
        <Search />
        <CategoriesBanner />
        <div>
          {categoryData ? (
            <h3 className="categories__title">
              {categoryData[0]?.category.name}
            </h3>
          ) : (
            <></>
          )}
          <div className="products__container">
            {categoryData.map((products) => (
              <Link className="product__card" to={`/product/${products.id}`}>
                <div className="product_card__image-wrapper">
                  <img src={products.images[0]} alt="" />
                </div>
                <h4>{products.title}</h4>
                <strong>{products.price}$</strong>
                <p>{products.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Categories;
