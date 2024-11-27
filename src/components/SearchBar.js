import React from "react";
import { products } from "../utils/products";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
const SearchBar = ({ setFilterList }) => {
  const [Searchs, setSearch] = useState("");
  const handleChange = (input) => {
    setSearch(input.target.value);
    setFilterList(
      products.filter((item) =>
        item.productName
          ?.toLowerCase()
          .includes(Searchs.toLowerCase())
      )
    );
  };
  return (
    <div className=" flex gap-1 items-center p-1 bg-blue-950 rounded-lg">
        <input type="text"
         placeholder="Search.."
         onChange={handleChange}
         name="search"
         id="search"
         className =" rounded w-64  border-none outline-none text-input text-stone-300"
        />
        <FiSearch className=" text-white"/>
    </div>
    );
};

export default SearchBar;
