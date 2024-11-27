import SliderCard from "./SliderCard";
import { SliderData } from "../utils/products";
import { Carousel } from "flowbite-react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
const SliderHome = () => {

    return ( 
        <div>
            <Carousel leftControl={<FaAngleLeft className=" h-6 w-6 bg-white m-10 rounded-full text-slate-50 " />}rightControl={<FaAngleRight className =" h-6 w-6 bg-white m-10 rounded-full text-slate-50 " />}>
            {  
                SliderData.map((value,index) => {
                  return( 
                    
                     <SliderCard key={index} title={value.title} cover = {value.cover} desc = {value.desc} />
                    
                  )
                })
            }
            </Carousel>

        </div>
     );
}
 
export default SliderHome;