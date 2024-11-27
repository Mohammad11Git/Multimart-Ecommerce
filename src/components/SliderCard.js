import React from "react";
const SliderCard = ({ title, desc, cover }) => {
  return (
    
    <div className=" px-3 lg:px-24 p-20 bg-slate-50 flex items-center ">
      <div className=" flex flex-col m-12 p-7 md:flex-row gap-7 ">
        <div className=" flex flex-col w-full lg:w-1/2  gap-2 items-start justify-center">
          <h1 className=" font-bold text-5xl  text-neutral-700  ">{title}</h1>
          <div className=" text-neutral-500">{desc}</div>
            <h2 className=" text-neutral-700 bg-neutral-100 ">
              Visit Collections
            </h2>
          
        </div>
        <div className="pl-2 ">
          <img src={cover} className=" h-72 w-96 flex items-center justify-center" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
