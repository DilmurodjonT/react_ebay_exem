import React from "react";
import "./Search.css";
import { FiSearch } from "react-icons/fi";
import logo from "../../images/logo.png";

const Search = () => {
  return (
    <>
      <div className="main__search">
        <div className="logo__search">
          <img src={logo} alt="" />
        </div>
        <div className="search__wrapper">
          <FiSearch />
          <form>
            <input
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
