import React, { memo, useEffect, useRef, useState } from "react";
import "../styles/Products.scss";
import Pagination from "../Components/Pagination";
const PRODUCT_LIMIT = 10;

const Products = () => {
  const [products, setProducts] = useState([]);
  const totalPages = useRef(null);

  const fetchProducts = async (page) => {
    const response = await fetch(
      `https://dummyjson.com/products?limit=${PRODUCT_LIMIT}&skip=${(page-1)*PRODUCT_LIMIT}`
    );
    const responseData = await response?.json();
    if (responseData?.products) {
      // response = await response?.json()
      setProducts(responseData.products);
      ;
      totalPages.current = Math.ceil(responseData.total / PRODUCT_LIMIT);
    }
  };




  return (
   
    <>
     <div className="products-container">
      {products.map((product) => (
        <div className="product__card" key={product.id}>
          <div className="product__card__header">
            <p className="product__card__header-title">{product.title}</p>
            <img
              className="product__card__header-img"
              src={product.thumbnail}
              alt={product.title}
            />
          </div>
          <div className="product__card__body">{product.description}</div>
        </div>
      ))}
    </div>
    <Pagination fetchData={fetchProducts} totalPages={totalPages.current}/>
    </>

  );
};

export default memo(Products);
