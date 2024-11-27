import React from "react";
import ProductCard from "./ProductCard";

const Section = ({ title, bgColor, productItems }) => {
  return (
    <div className={`px-4 lg:px-24 ${bgColor}`}>
        <h1 className="tracking-wide text-stone-900  font-bold text-4xl text-center p-10 ">{title}</h1>
      <div className="p-3 m-3 flex justify-center items-center">
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 pt-5 m-4">
          {productItems.map((productItem) => (
            <ProductCard
              key={productItem.id}
              title={title}
              productItem={productItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;
