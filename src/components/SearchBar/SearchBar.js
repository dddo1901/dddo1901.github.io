import React from 'react';
import './SearchBar.scss';

function SearchBar() {
  return (
    <div className="searchbar">
        <input
          type="text"
          className="text-box"
          placeholder='Search'
        />
      </div>
  )
}

export default SearchBar