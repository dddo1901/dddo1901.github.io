import React from 'react';
import './SearchBar.scss';
import Products from "../Data.json";
import { NavLink } from "react-router-dom";
import { useState } from "react";


function SearchBar({ placeholder, data }) {
    const [filterData, setFilterData] = useState([]);
  
    const handleFilter = (event) => {
      const searchWord = event.target.value;
      const newFilter = Products.filter((items) => {
        return items.name.toLowerCase().includes(searchWord.toLowerCase());
      });
      if (searchWord === "") {
        setFilterData([]);
      } else {
        setFilterData(newFilter);
      }
    };

  return (
    <div className="search">
      <div className="searchInputs search-bar">
        <input
          type="text"
          placeholder={placeholder}
          onChange={handleFilter}
          className="text-box"
        />
        <div className="search-icon search-btn">
          <p>
            <i class="fa-solid fa-magnifying-glass"></i>
          </p>
        </div>
      </div>
      {filterData.length !== 0 && (
        <div className="DataResult">
          {filterData.slice(0, 20).map((items, key) => {
            return (
              <NavLink
                className="dataItem"
                to={`/detail/${items.id}`}
                target="_blank"
              >
               
                <div className="search-bar-results">
                <img className='search-bar-img' src={items.img1} ></img>
                  <p className="dataItem-text">{items.name}</p>
                  <hr />
                </div>
              </NavLink>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;