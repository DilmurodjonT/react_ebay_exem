import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <div className="main__search">
      <div className="search__wrapper">
        <form>
          <input type="text" placeholder="Search for anything" />
          <button>Search</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
