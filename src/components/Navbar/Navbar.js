import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered , FaXmark } from "react-icons/fa6";
import { HiShoppingBag } from "react-icons/hi2";
import { FaCartShopping } from "react-icons/fa6";
import { Avatar } from "flowbite-react";
import { useSelector } from "react-redux";

const Navbar = () => {
    const {cartList} = useSelector((state) => state.cart)
    const[isMenuOpen, setIsMenuOpen] = useState(false);
      const[isSticky, setSticky] = useState(false);

      //toggle menu
      const toggleMenu = () =>{
          setIsMenuOpen(!isMenuOpen);
      }

      useEffect( () =>{
            const handeScroll = () =>{
                  if(window.scrollY > 100){
                        setSticky(true);
                  }
                  else{
                        setSticky(false);
                  }
            }
            window.addEventListener("scroll",handeScroll);
            return () => {
                  window.addEventListener("scroll",handeScroll); 
            }
      },[])
      // navItem
       const navItem = [
             {link:"Home", path: "/"},
             {link:"Shop", path: "/shop"},
             {link:"Cart",path:"/cart"}  
       ]
  return (
        <header className='w-full z-30 bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300 bg-white shadow-lg'>
            <nav className={`py-4 lg:px-24 px-4 gap-2 ${ isSticky ? "sticky top-0 left-0 right-0 bg-white": " bg-white "} `}>
                  <div className="flex justify-between items-center text-base ">
                      {/*logo */}
                      
                      <Link to="/" className="text-2xl font-bold text-black flex items-center justify-center gap-1"><HiShoppingBag className="flex text-center "/>Multimart</Link>
                      
                      {/*nav Item for Large device */}
                      <div className="w-full flex justify-end items-center gap-4">
                      <ul className="md:flex space-x-10 hidden">
                        {
                              navItem.map(({link,path}) => <Link key={path} to={path} className ="block font-bold text-black text-1xl  cursor-pointer hover:text-stone-700" > {link}</Link> )
                        }

                      </ul>
                      <Avatar rounded size="sm" className="cursor-pointer "/>
                      <Link to="/cart">
                        <div className=" flex items-center justify-center">
                       <FaCartShopping className=" text-2xl cursor-pointer"/>
                        <div className="count " >{cartList.length}</div>
                       </div>
                       </Link>
                       </div>
                      
                      {/* menu btn for the mobile devices */}
                      <div className="md:hidden flex items-center m-3">
                        <button onClick={toggleMenu} className= "text-black focus:outline-none">
                              {
                                  isMenuOpen ? <FaXmark className="h-6 w-6 text-black"/> : <FaBarsStaggered className="h-6 w-6 text-black hover:text-stone-700"/>
                              }
                        </button>
                      </div>
                  </div>
                  {/*navitem for sm devices*/}
                  <div className={`space-y-2  px-4 mt-16 py-5 bg-white transition-all shadow-lg z-100  ${isMenuOpen ? 'block fixed top-0 right-0 left-0 transition-all ' : 'hidden'}`}>
                        {                     
                          navItem.map(({link,path}) => <Link key={path} to={path} className ="block font-extrabold text-center text-black cursor-pointer hover:text-stone-700" > {link}</Link> )
                          
                        }
                        
                  </div>
            </nav>
        </header>

      );
}

 
export default Navbar;