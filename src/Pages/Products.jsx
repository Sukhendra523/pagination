import React, { memo, useEffect, useState } from "react";
import "../styles/Products.scss";
import Pagination from "../Components/Pagination";
const PRODUCT_LIMIT = 10;

const Products = () => {
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [lastPage, setLastPage] = useState();
  const [pages, setPages] = useState([1,2,3]);


  const fetchProducts = async () => {
    const response = await fetch(
      `https://dummyjson.com/products?limit=${PRODUCT_LIMIT}&skip=${offset}`
    );
    const responseData = await response?.json();
    if (responseData?.products) {
      // response = await response?.json()
      setProducts(responseData.products);
      !lastPage && setLastPage((responseData.total/PRODUCT_LIMIT)-1);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [offset]);




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
    <Pagination {...{pages,setOffset,setPages,lastPage}}/>
    </>

  );
};

export default memo(Products);
