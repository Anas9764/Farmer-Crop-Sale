import React from "react";
import "../Components/styles/IndividualProduct.css"
import { Link } from "react-router-dom";
import ViewProduct from "./ViewProduct";



export const IndividualProduct = ({ individualProduct, addToCart }) => {
  // console.log(individualProduct);
  const handleAddToCart = () => {
    // addToCart(individualProduct);
    // console.log(individualProduct)
    // return (<>
    //   <ViewProduct Product = {individualProduct}/>
    // </>)

  };
  return (
    <div className="product">
      <div className="product-img">
        <img id="prod-img" src={individualProduct.url} alt="product-img" />
      </div>
      <div className="product-text title" id="titlecard">{individualProduct.title}</div>
      <div className="product-text description">
        {individualProduct.description}
      </div>
      <div className="product-text price">₹ {individualProduct.price} / kg</div>
      <div className="btn btn-danger btn-md cart-btn" id="viewbtn" onClick={handleAddToCart}>
      <Link className="btn btn-success btn-md" to="view-product"
        >
             view product
              </Link>
            
      </div>
      {/* <div>
              
            </div> */}
    </div>
  );
};
