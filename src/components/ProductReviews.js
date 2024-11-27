import React from "react";
import { useState } from "react";
const ProductReviews = ({ selectProduct }) => {
  const [listSelect, setListSelect] = useState("desc");
  return (
    <div className="px-4 lg:px-24 p-5 ">
      <div className=" p-3 m-3 flex gap-3">
        <div
          className={` font-bold cursor-pointer ${
            listSelect === "desc" ? "text-black" : " text-stone-400"
          }`}
          onClick={() => {
            setListSelect("desc");
          }}
        >
          Description
        </div>
        <div
          className={` font-bold cursor-pointer ${
            listSelect === "rev" ? "text-black" : " text-stone-400"
          }`}
          onClick={() => {
            setListSelect("rev");
          }}
        >
          Reviews ({selectProduct.reviews.length})
        </div>
      </div>
      <div className="flex flex-row p-3 m-3 ">
        {listSelect === "desc" ? (
          <p>{selectProduct.description}</p>
        ) : (
          <div className="flex flex-col gap-4 ">
            {
                selectProduct?.reviews.map((rate) => (

                      <div key={rate.rating}> 
                        <span>Mohammad Mhjazy</span>
                        <p className="text-yellow-300 ">{rate.rating} (Rating)</p>
                        <p>{rate.text}</p>
                      </div>
                ))
            }
            
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductReviews;
