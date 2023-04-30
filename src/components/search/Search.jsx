import React, { useState } from "react";
import "./Search.css";
import { FiSearch } from "react-icons/fi";
import logo from "../../images/logo.png";
import axios from "axios";

const Search = () => {
  const [searchText, setsearchText] = useState("");
  console.log(searchText);

  const searchProduct = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.escuelajs.co/api/v1/products/?title=${searchText}`)
      .then((response) => console.log(response.data))
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
      </div>
      <div className="navbar__stick"></div>
    </>
  );
};

export default Search;
