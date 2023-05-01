import React, { useState } from "react";
import "./Search.css";
import { FiSearch } from "react-icons/fi";
import logo from "../../images/logo.png";
import axios from "axios";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchData, setSearchData] = useState(null);
  const [searchText, setsearchText] = useState("");
  console.log(searchText);

  const searchProduct = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.escuelajs.co/api/v1/products/?title=${searchText}`)
      .then((response) => {
        setSearchData(response.data);
        !response.data.length && alert("NO like this products!");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="main__search">
        <div className="logo__search">
          <img src={logo} alt="" />
        </div>
        <div className="search__wrapper">
          <FiSearch />
          <form onSubmit={searchProduct}>
            <input
              value={searchText}
              onChange={(e) => setsearchText(e.target.value)}
              type="text"
              className="search__input"
              placeholder="Search for anything"
            />
            <button className="search__btn">Search</button>
          </form>
        </div>
        {searchData?.length > 0 ? (
          <div className="search__results">
            <div className="result__nav">
              <h3>
                Search results:{" "}
                {/* <span className="input__txt">#{searchText}</span> */}
              </h3>
              <div className="result__nav__div">
                <p>
                  <span>{searchData.length} Results</span>
                </p>
                <span
                  className="result__nav__delet"
                  onClick={() => {
                    setsearchText("");
                    setSearchData([]);
                  }}
                  style={{ color: "dodgerblue" }}
                >
                  Delete
                </span>
              </div>
            </div>
            <div>
              {searchData.map((product) => (
                <div className="product__card__wrapper" key={product.id}>
                  <Link className="product__img" to={`/product/${product.id}`}>
                    <img src={product.images[0]} alt="Product" />
                    <span>{product.title}</span>
                  </Link>
                  <strong>{product.price} $</strong>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="navbar__stick"></div>
    </>
  );
};

export default Search;
