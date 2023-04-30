import React, { useEffect, useState } from "react";
import "./Categories.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container } from "../../utils/Components";
import Search from "../../components/search/Search";
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
        <div>
          {categoryData ? <h3>{categoryData[0]?.category.name}</h3> : <></>}
          <div>
            {categoryData.map((products) => (
              <Link to={`/product/${products.id}`}>
                <div>
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
