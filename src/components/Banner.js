import React  from "react";
const Banner = ({title}) => {
    return ( 
        <div className="px-4 lg:px-24 p-20 banner ">
            { /*<div className="overlay"></div>   */}   
            <h1 className=" z-10 tracking-wide pt-10 mt-10 font-bold text-3xl flex justify-center items-center text-center text-white">
                  {title}
            </h1>      
        </div>
     );
}
 
export default Banner;