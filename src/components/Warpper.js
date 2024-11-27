import React from "react";
import { Card } from "flowbite-react";
import { serviceData } from "../utils/products";

const Warpper = () => {
  return (
    <div className="px-4 lg:px-24 pt-10 m-10 ">
      <div className=" grid lg:grid-cols-4  md:grid-cols-2  sm:grid-cols-1 gap-2">
        {serviceData.map((value, index) => (
          <Card
            href="#"
            className={`max-w-sm flex justify-center items-center text-center p-3 ${value.bg} `}
            key={index}
          >
            <div className=" flex justify-center items-center">
              <div className="flex justify-center items-center bg-slate-50 p-2 text-2xl rounded-full w-fit">
                {value.icon}
              </div>
            </div>

            <h5 className="text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
              {value.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {value.subtitle}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Warpper;
