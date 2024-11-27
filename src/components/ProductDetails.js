import React from "react";
import { useState } from "react";
import { Rating, RatingStar } from "flowbite-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../App/features/CartSlice";
import { toast } from "react-toastify";
const ProductDetails = ({ selectProduct }) => {
  const dispatch = useDispatch();
  const [quantity,setQuantity] = useState(1);
  const handleChangeQuantity = (e) =>{
      setQuantity(e.target.value);
  };
  const handleAdd = (selectProduct , quantity) => {
     dispatch(addToCart({product: selectProduct ,num: quantity}))
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
  }
  return (
    <div className="px-4 lg:px-24">
      <div className=" flex flex-col md:flex-row items-center justify-center gap-20 pt-5 m-5 ">
        <div className=" flex ">
          <img src={selectProduct.imgUrl} alt="" className=" w-96 h-96" />
        </div>
        <div className=" flex flex-col gap-5">
          <h1 className=" text-3xl font-bold tracking-wide ">{selectProduct.productName}</h1>
          <div className=" flex gap-3 text-stone-500">
          <Rating>
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar filled={false} />
          </Rating>
          <p>{selectProduct.avgRating} ratings</p>
          </div>
          <div className=" flex gap-5 text-stone-500">
               <p className=" text-black text-2xl font-bold">
                 $ {selectProduct.price}
               </p>
               <p className=" flex justify-center items-center">
                 category:{selectProduct.category}
               </p>
          </div>
          <p className=" text-stone-500 ">{selectProduct.shortDesc}</p>
          <input type="number" 
            className=" w-20 rounded focus:border-none"
            placeholder="Qty"
            value={quantity}
            onChange = { handleChangeQuantity}
          />
          <div className=" p-2 bg-teal-900 w-32 rounded flex justify-center items-center transition hover:bg-slate-800">
          <button className=" text-white  "
           type="submit"
           onClick={() => handleAdd(selectProduct , quantity)}
          >
            Add To Cart
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
