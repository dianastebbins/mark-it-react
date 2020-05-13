import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav className="navbar is-dark is-bold" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            {/* <i className="brandlogo"><img src="assets/images/screenshot4.png" height="100px" width="90px"></img></i> */}
          </a>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu Nav">
          <div className="navbar-start">
          <a className=" brandlogo"><img src="assets/images/brandlogo.png"  height="80px" width="80px"></img></a>
            <div className="navbar-item"> <Link to="/" >Home</Link></div>
            <a className="navbar-item"> <Link to="/add-product" >Add Product</Link></a>
            <a className="navbar-item"> <Link to="/detail" >Detail</Link></a>
            <a className="navbar-item"> <Link to="/listing" >Listing</Link></a>
            <a className="navbar-item"> <Link to="/login" >Login</Link></a>
            <a className="navbar-item"> <Link to="/map" >Map</Link></a>
            <a className="navbar-item"> <Link to="/registration" >Registratio</Link></a>
            <a className="navbar-item"> <Link to="/schedular" >Schedular</Link></a>
            <a className="navbar-item"> <Link to="/user-landing" >User landing</Link></a>
            <a className="navbar-item"><Link to="/about" >About</Link></a>


            {/* <a className="navbar-item">Documentation</a> */}

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">Events</a>
                <a className="navbar-item"><Link to="/about" >About</Link></a>
                <a className="navbar-item">Contact</a>
                <hr className="navbar-divider" />
                <a className="navbar-item"></a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-rounded is-link">Sign Up</a>
                <a className="button is-rounded is-info">Login</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
