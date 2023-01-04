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
import Footer  from "../src/Components/Footer";
import ViewProduct from "./Components/ViewProduct";
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
          <Route path="/view/:product"  component={ViewProduct} />


          {/* <Route path="/products" component={Products}/> */}

          <Route path="/cart" component={Cart} />
          <Route component={NotFound} />
          {/* <Route component={Footer} /> */}
        </Switch>
      </BrowserRouter>
      {/* <div>
        <Footer/>
      </div> */}
    </>
  );
};

export default App;
