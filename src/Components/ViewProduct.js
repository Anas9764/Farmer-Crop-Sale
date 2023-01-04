import React from "react";
import Image from "../Images/caro.jpeg";
import "../Components/styles/ViewProduct.css"
import {  useParams } from 'react-router-dom';
import { auth, fs } from "../Config/Config";
import  { useState, useEffect } from "react";


function ViewProduct() {
  let {productId}= useParams()
  console.log(productId)
  const [product, setProduct]= useState({})

  // const getProducts = async () => {
  //   const products = await fs.collection("Products").get();
  //   const productsArray = [];
  //   for (var snap of products.docs) {
  //     var data = snap.data();
  //     data.ID = snap.id;
  //     productsArray.push({
  //       ...data,
  //     });
  //     if (productsArray.length === products.docs.length) {

  //     }
  //   }
  // };

  
  // useEffect(() => {
  //   getProducts();
  // }, []);



  // console.log(Product)

  return (
    <>
    <div className="card mb-3" style={{width:'80rem' ,margin:'10rem'}}>
      
    </div>
  
  </>
  );
}

export default ViewProduct;
