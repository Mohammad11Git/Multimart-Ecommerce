import React from "react";
import SliderHome from "../components/SliderHome";
import Warpper from "../components/Warpper";
import { discoutProducts ,products} from "../utils/products";
import Section from "../components/Section";
import useWindowScrollToTop from "../Hook/useScroll";
const Home = () => {
    const newArrivalData = products.filter(
        (item) => item.category === "mobile" || item.category === "wireless"
      );
    const bestSales = products.filter((item) => item.category === "sofa");
    useWindowScrollToTop();
    return ( 
       <>
        <SliderHome/>
        <Warpper/>
        <Section
        title="Big Discount"
        bgColor="bg-slate-50"
        productItems={discoutProducts}
        />
        <Section
        title="New Arrivals"
        bgColor="white"
        productItems={newArrivalData}
        />
        <Section 
        title="Best Sales" 
        bgColor="bg-slate-50" 
        productItems={bestSales}
         />
       </>
    );
}
 
export default Home;