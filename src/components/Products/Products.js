import React from 'react'
import { useState } from 'react';

function Products() {
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
      
        <input
            type="text"
            placeholder='Enter the product'
            onChange={handleFilter}
            className="text-box"
            />
        <div className="search-icon search-btn">
            <p>
                <i class="fa-solid fa-magnifying-glass"></i>
            </p>
        </div>
      
    </div>
  )
}

export default Products