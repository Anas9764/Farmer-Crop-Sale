import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Login } from "./Components/Login";
import { Signup } from "./Components/Signup";
import { NotFound } from "./Components/NotFound";
import { AddProducts } from "./Components/AddProducts";
import { FarmerRegister } from "./Components/FarmerRegister";
import { Cart } from "./Components/Cart";
import "../src/Components/styles/App.css";
// import {Chatbot} from "./Components/Chatbot"; 
import ViewProduct from "./Components/ViewProduct";
import { Contact } from "./Components/Contact";
import Chatbot  from "./Components/chatbot";
export const App = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/login" component={Login} />
                    <Route path="/add-products" component={AddProducts} />
                    <Route path="/farmer-Register" component={FarmerRegister} />
                    <Route path="/product" component={Home} />
                    <Route path="/view/:productId" component={ViewProduct} />
                    <Route path="/contact" component={Contact} />

                    {/* try to use same  ^^^  variable name  in the url param as of the variable in useParams() in ViewProduct.js */}
                    {/* <Route path="/products" component={Products}/> */}

                    <Route path="/cart" component={Cart} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        
        <Chatbot/>
        </>
    );
};

export default App;
