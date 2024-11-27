import React from "react";
import Banner from "../components/Banner";
import { products } from "../utils/products";
import { useState } from "react";
import useWindowScrollToTop from "../Hook/useScroll";
import FilterSelect from "../components/FilterSelect";
import SearchBar from "../components/SearchBar";
import ListShop from "../components/ListShop";
const Shop = () => {
    const[filterList,setFilterList] = useState(
         products.filter((item) => item.category === "sofa" )
    )
    useWindowScrollToTop()
    return ( 
        <>
        <Banner title = "Product"/>
        <div className="flex flex-col justify-center items-center md:flex-row gap-20 p-5 mt-6"> 
        <FilterSelect setFilterList={setFilterList}/>
        <SearchBar setFilterList={setFilterList}/>
        </div>   
         <ListShop productItems= {filterList}/>
        </>
     );
}
 
export default Shop;