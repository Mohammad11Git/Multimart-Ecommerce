import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../utils/products";
import Banner from "../components/Banner";
import ProductDetails from "../components/ProductDetails";
import ProductReviews from "../components/ProductReviews";
import useWindowScrollToTop from "../Hook/useScroll";
import ListShop from "../components/ListShop";
const ProductId = () => {
  const { id } = useParams();
  const [selectProduct, setSelectProduct] = useState(
    products.filter((item) => parseInt(item.id) === parseInt(id))[0]
  );
  const [relatedProduct, setRelatedProduct] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectProduct(
      products.filter((item) => parseInt(item.id) === parseInt(id))[0]
    );
    setRelatedProduct(
      products.filter(
        (item) =>
          item.category === selectProduct?.category &&
          item.id !== selectProduct?.id
      )
    );
  }, [selectProduct, id]);

  useWindowScrollToTop();
  return (
    <>
      <Banner title={selectProduct?.productName} />
      <ProductDetails selectProduct={selectProduct} />
      <ProductReviews selectProduct={selectProduct} />
      <h1 className=" px-4 lg:px-24 text-3xl font-bold mt-5 p-3 text-stone-600">
        You might also like :
      </h1>
      <ListShop productItems = {relatedProduct} />
    </>
  );
};

export default ProductId;
