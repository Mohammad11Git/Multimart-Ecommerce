import React from "react";
import { useEffect } from "react";
import ProductCard from "./ProductCard";
const ListShop = ({productItems }) => {
    useEffect(() => {},[productItems ])
    if (productItems.length === 0) {
        return <h1 className=" text-center p-3 text-2xl font-bold mt-4">Product Not Found !!</h1>;
      }
  return (
    <div className="px-4 lg:px-24 pt-5">
      <div className="p-3 m-3 flex justify-center items-center">
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 pt-5 m-4">
          {productItems.map((productItem) => (
            <ProductCard
              key={productItem.id}
              title={null}
              productItem={productItem}
            />
          ))}
        </div>
      </div>



    </div>
  );
};

export default ListShop;
