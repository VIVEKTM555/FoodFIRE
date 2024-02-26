import { useState } from "react";
import FoodFireLogo from "../images/Food Fire Logo.png";
import { Link } from "react-router-dom";


// Title component for display logo
const Title = () => (
  <a href="/">
    <img className="logo" src={FoodFireLogo} alt="Food Fire Logo" />
  </a>
);

// Header component for header section: Logo, Nav Items

export const Header  = () => {
  const [btnname, Setbtnname] = useState("Login");

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
        <li>
            <Link to="/" >
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" >
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" >
              Contact Us
            </Link>
          </li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <button className="login" onClick={()=>{btnname==="Login"?Setbtnname("Logout"):Setbtnname("Login")

          }}>{btnname}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;



