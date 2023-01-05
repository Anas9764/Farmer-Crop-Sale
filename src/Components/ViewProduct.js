import React from "react";
import Image from "../Images/caro.jpeg";
import "../Components/styles/ViewProduct.css";
import { useParams } from "react-router-dom";
import {  fs } from "../Config/Config";
import { useState, useEffect } from "react";

function ViewProduct() {
    const { productId } = useParams();
    console.log(productId);
    const [product, setProduct] = useState({});

    useEffect(() => {
        fs.collection("Products")
            .doc(productId)
            .get()
            .then((doc) => {
                // this was understood by reading the firebase documentation.
                setProduct(doc.data());
            });
    }, []);
    console.log(product);

    return (
        <>
            <div
                className="card mb-3"
                style={{ width: "80%", margin: "10rem" }}
            >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src={Image}
                            className="img-fluid rounded-start"
                            alt="..."
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.description}</p>
                            <p className="card-text">
                                <small className="text-muted">
                                    Price: {product.price}
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ViewProduct;
