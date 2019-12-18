import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar bg-primary navbar-expand-sm navbar-dark px-sm-5 fixed-top">
          <Link to="/">
            <img src={logo} className="navbar-brand" />
          </Link>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
                <Link to='/' className="lead nav-link">
                    Veerbal Mobiles
                </Link>
            </li>
          </ul>
          <Link to="/cart" className="ml-auto">
          <button className="btn btn-outline-light"><i className=" mr-2 fa fa-cart-plus"></i>My Cart</button>
          </Link>
        </nav>
      </div>
    );
  }
}



export default NavBar;
