import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Product.css";
import { useParams } from "react-router-dom";
import { Container } from "../../utils/Components";
import Search from "../../components/search/Search";

const Product = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [activeImageIndex, setactiveImageIndex] = useState(0);
  useEffect(() => {
    axios(`https://api.escuelajs.co/api/v1/products/${id}`, {
      timeout: 10000,
    }).then((components) =>
      setData(components.data).catch((err) => console.log(err))
    );
  }, [id]);
  console.log(data);
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
          </div>
        }
      </Container>
    </div>
  );
};

export default Product;
