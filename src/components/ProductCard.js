import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import { IoIosHeartEmpty } from "react-icons/io";
import { Rating, RatingStar } from "flowbite-react";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../App/features/CartSlice";
import { toast } from "react-toastify";

const ProductCard = ({ title, productItem }) => {
  const dispatch = useDispatch();
  const handleAdd = (productItem) => {
    dispatch(addToCart({ product: productItem, num: 1 }));
    toast.success("Product has been added to card!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <Card className="max-w-sm box ">
      <div className=" flex justify-between">
        <div>
          {title === "Big Discount" ? (
            <span className=" text-white bg-blue-950 rounded-full p-1 font-normal m-1">
              {productItem.discount}% Off
            </span>
          ) : null}
        </div>
        <IoIosHeartEmpty className="text-2xl heart" />
      </div>
      <div className=" flex justify-center items-center">
        <Link to={`/shop/${productItem.id}`}>
          <img src={productItem.imgUrl} className="w-60 h-44" alt="" />
        </Link>
      </div>
      <div className=" flex flex-col justify-center items-start gap-2">
        <Link to={`/shop/${productItem.id}`}>
          <h2 className="font-semibold text-stone-700 ">
            {productItem.productName}
          </h2>
        </Link>
        <Rating>
          <RatingStar />
          <RatingStar />
          <RatingStar />
          <RatingStar />
          <RatingStar filled={false} />
        </Rating>
      </div>
      <div className="flex justify-between">
        <p className="font-bold text-xl ">${productItem.price}</p>
        <div className=" Plus p-1" onClick={() => handleAdd(productItem)}>
          <AiOutlinePlus className="flex justify-center items-center icon " />
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
