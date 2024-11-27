import React from "react";
import { Footer } from "flowbite-react";
import { HiShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
const Footer1 = () => {
  return (
    <div>
      <Footer className="bg-blue-950  mt-5 rounded-none">
        <div className=" px-4 lg:px-24 mt-2 pt-2">
          <div className="grid grid-cols-1 gap-8 px-6 py-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
            <div className=" flex flex-col gap-3">
              <div className=" flex gap-1 items-center text-2xl font-bold text-white">
                <HiShoppingBag className=" h-6 w-6" />
                <h1>Multimart</h1>
              </div>
              <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>    
            </div>
            </div>
            <div className=" flex flex-col gap-3">
                <div className=" text-white text-xl">
                     <h1>About Us</h1>
                </div>
              <Footer.LinkGroup col>
                 <Link to="/">
                <Footer.Link >Home</Footer.Link>
                </Link>
                <Link to="/shop">
                <Footer.Link>Shop</Footer.Link>
                </Link>
                <Link to="/cart">
                <Footer.Link >Cart</Footer.Link>
                </Link>
                <Footer.Link href="#">Terms  Conditions</Footer.Link>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className=" flex flex-col gap-3">
                <div className=" text-white text-xl">
                     <h1>Customer Care </h1>
                </div>
              <Footer.LinkGroup col>
                <Footer.Link href="#">Help Center</Footer.Link>
                <Footer.Link href="#">How to Buy</Footer.Link>
                <Footer.Link href="#">Track Your Order</Footer.Link>
                <Footer.Link href="#">Corporate  Bulk Purchasingr</Footer.Link>
                <Footer.Link href="#">Returns  Refunds</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className=" flex flex-col gap-3">
                <div className=" text-white text-xl">
                     <h1>Contact Us</h1>
                </div>
                <ul className="gap-3 text-gray-500 flex flex-col  ">
                <li>70 Washington Square South, New York, NY 10012, United States </li>
                <li>Email: uilib.help@gmail.com</li>
                <li>Phone: +1 1123 456 780</li>
                </ul>
            </div>       
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default Footer1;
