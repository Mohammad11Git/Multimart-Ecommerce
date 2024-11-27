import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useWindowScrollToTop from "../Hook/useScroll";
import {
  addToCart,
  deleteProduct,
  decreaseQty,
} from "../App/features/CartSlice";
import { Card } from "flowbite-react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";
import { toast } from "react-toastify";
const Cart = () => {
  const { cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  console.log("cartList", cartList);
  const totalPrice = cartList.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );
  useWindowScrollToTop();
  const handleDelete = (item) => {
    dispatch(deleteProduct(item));
    toast.success("Product has been removed from the card!", {
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
    <div className="px-4 lg:px-24 p-20 bg-slate-50">
      <div className="pt-7 mt-4 flex flex-col md:flex-row gap-20 justify-center ">
        {cartList.length === 0 && (
          <div className=" bg-white p-3 ">
            <h1 className=" font-bold p-3">No Items are add in Cart</h1>
          </div>
        )}
        <div className=" grid grid-cols-1 gap-3  ">
          {cartList.map((item) => {
            const productQty = item.price * item.qty;
            return (
              <Card key={item.id} className="">
                <button
                  className="flex justify-end"
                  onClick={() => handleDelete(item)}
                >
                  <FaX className=" hover:text-blue-800" />
                </button>
                <div className="flex flex-col md:flex-row gap-12">
                  <div className="flex justify-center items-center">
                    <img src={item.imgUrl} alt="" className="w-36 h-30 " />
                  </div>
                  <div className=" flex flex-col gap-2 justify-center items-center md:items-start ">
                    <h2 className="text-xl font-semibold">
                      {" "}
                      {item.productName}
                    </h2>
                    <h4 className="flex flex-col gap-2 text-stone-400">
                      $ {item.price}.00 * {item.qty}
                      <span className="text-blue-900 font-semibold">
                        $ {productQty}.00
                      </span>
                    </h4>
                  </div>
                  <div className=" flex justify-end items-end text-2xl gap-2 ">
                    <button
                      className="  flex justify-end items-end btn1 p-1 rounded transition-all hover:bg-blue-900 "
                      onClick={() =>
                        dispatch(addToCart({ product: item, num: 1 }))
                      }
                    >
                      <FaPlus className="text-blue-900 plus " />
                    </button>
                    <button
                      className="  flex justify-end items-end btn2 p-1 rounded transition-all bg-slate-50  hover:bg-black"
                      onClick={() => dispatch(decreaseQty(item))}
                    >
                      <FaMinus className=" text-black fam " />
                    </button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        <div className=" flex flex-col p-5 m-2 bg-white rounded  h-44">
          <h2 className="p-2 font-bold text-blue-900 text-xl">Cart Summary</h2>
          <hr />
          <div className=" flex flex-col p-2  gap-2">
            <h4>Total Price :</h4>
            <h3 className="font-bold text-xl text-blue-900 ">
              $ {totalPrice}.00
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
