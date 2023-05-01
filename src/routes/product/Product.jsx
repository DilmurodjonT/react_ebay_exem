import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Product.css";
import { useParams } from "react-router-dom";
import { Container } from "../../utils/Components";
import Search from "../../components/search/Search";
import { useDispatch } from "react-redux";
import Footer from "../../components/footer/Footer";

const Product = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [activeImageIndex, setactiveImageIndex] = useState(0);
  useEffect(() => {
    axios(`https://api.escuelajs.co/api/v1/products/${id}`, {
      timeout: 10000,
    })
      .then((components) => setData(components.data))
      .catch((error) => {
        console.log(error.response.data.error);
      });
  }, [id]);
  // console.log(data);

  const cartProduct = (data) => {
    dispatch({ product: data, type: "CART_PRODUCT" });
  };

  return (
    <div>
      <Container>
        <Search />
        {
          <div className="single__product">
            <div>
              {data?.singleProduct ? (
                <img
                  className="single__image"
                  src={data?.images[activeImageIndex]}
                  alt=""
                />
              ) : (
                <></>
              )}
              {data?.images.map((image, index) => (
                <img
                  className="single__foto"
                  key={image}
                  style={
                    index === activeImageIndex
                      ? { border: "5px solid red" }
                      : null
                  }
                  width={200}
                  src={image}
                  alt=""
                  onClick={() => setactiveImageIndex(index)}
                />
              ))}
            </div>
            <div className="single__info">
              {data?.title ? <h3>{data.title}</h3> : <></>}
              {data?.price ? <strong>US ${data.price}</strong> : <></>}
              {data?.description ? <p>{data.description}</p> : <></>}
            </div>
            <button className="product__cart" onClick={() => cartProduct(data)}>
              Add to cart
            </button>
          </div>
        }
        <Footer />
      </Container>
    </div>
  );
};

export default Product;
