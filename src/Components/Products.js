import React, { useEffect, useState } from "react";
import { IndividualProduct } from "./IndividualProduct";
import "../Components/styles/Product.css";
import ViewProduct from "./ViewProduct";
import { auth, fs } from "../Config/Config";
import { Link } from "react-router-dom";


export const Products = ({ products, addToCart }) => {
  return products.map((individualProduct) => (

    <Link
      className="btn btn-success btn-md"
      to={`/view/${individualProduct.ID}`}
        key={individualProduct.ID}
    >
      <IndividualProduct
        individualProduct={individualProduct}
        addToCart={addToCart}
      />
    </Link>
  ));
};
