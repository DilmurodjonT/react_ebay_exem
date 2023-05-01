import React from "react";
import "./Products.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [ProductsData, setproductsData] = useState([]);
  useEffect(() => {
    axios("https://api.escuelajs.co/api/v1/products?offset=0&limit=6")
      .then((components) => setproductsData(components.data))
      .catch((error) => {
        console.log(error.response.data.error);
      });
  }, []);
  return (
    <>
      <div className="allCategoris__title__blog product__cards__title">
        <h3 className="allCategoris__title">Shop by Products</h3>
      </div>
      <div className="product__cards">
        {ProductsData.map((productItem) => (
          <Link
            className="product__card"
            key={productItem.id}
            to={`/product/${productItem.id}`}
          >
            <div className="product_card__image-wrapper">
              <img src={productItem.images[0]} alt="" />
            </div>
            <h4>{productItem.title}</h4>
            <strong>{productItem.price}$</strong>
            <p>{productItem.description}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Products;
