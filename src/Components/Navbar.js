import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css"

import { Icon } from "react-icons-kit";
import { shoppingCart } from "react-icons-kit/feather/shoppingCart";
import { auth } from "../Config/Config";
import { useHistory } from "react-router-dom";

export const Navbar = ({ user, totalProducts }) => {
  const history = useHistory();

  const handleLogout = () => {
    auth.signOut().then(() => {
      history.push("/login");
    });
  };

  return (
    // <div className="container">
    <div className="navbar">
      <div className="leftside">
        <div className="logo">
          {/* <img src={logo} alt="logo" /> */}
          <h1 id="hed">CropSale🌴</h1>
        </div>
      </div>
      <div className="rightside">
        {!user && (
          <>            
          <div>
              <Link className="btn btn-success btn-md" to="/">
                Home
              </Link>
            </div>
            {/* <div>
              <Link className="btn btn-success btn-md" to="/product">
                Products
              </Link>
            </div> */}
       

            <div>
              <Link  className="btn btn-success btn-md" to="signup">
                SignUp
              </Link>
            </div>
            <div>
              {/* <Link className="navlink" to="login">
                LOGIN
              </Link> */}
              <Link class="btn btn-success" to="login">
                Login
              </Link>

              
            </div>
            
          </>
        )}
        {/* </div> */}

        {user && (
          <>
            <div>
              <Link className="navlink "  id="usercolor" to="/">
               Welcome, {user} 😊!
              </Link>
            </div>
            {/* <div className="cart-menu-btn">
              <Link className="navlink" to="cart">
                <Icon icon={shoppingCart} size={20} />
              </Link>
              <span className="cart-indicator">{totalProducts}</span>
            </div> */}

            <div>
              <Link className="btn btn-success btn-md" to="add-products">
                Add Products
              </Link>
            </div>
            <div>
              <Link className="btn btn-success btn-md" to="farmer-Register">
                Register here
              </Link>
            </div>

            <div className="btn btn-success btn-md" onClick={handleLogout}>
              Logout
            </div>
          </>
        )}
      </div>
    </div>
  );
};
