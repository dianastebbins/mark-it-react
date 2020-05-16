import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import API from "../../utils/API"

export default function Nav(props) {
  
  const handleLogout = event=>{
    API.logout().then(res=>{
        props.logoutHandle();
        console.log(res.data)
    //    history.push('/')
    })
}
  
  return (
    <div>
      <nav className="navbar is-dark is-bold" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <span className="navbar-item" href="#">
            {/* <i className="brandlogo"><img src="assets/images/screenshot4.png" height="100px" width="90px"></img></i> */}
          </span>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true">Home</span>
            <span aria-hidden="true">About</span>
            <span aria-hidden="true">Login</span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu Nav">
          <div className="navbar-start">
          <span className=" brandlogo"><img src="assets/images/brandlogo.png" alt="logo" height="80px" width="80px"></img></span>
            <a className="navbar-item" href="/"> Home</a>
            <a className="navbar-item" href="/add-product">Add Product</a>
            <a className="navbar-item" href="/detail"> Detail</a>
            <a className="navbar-item" href="/listing"> Listing</a>
            <a className="navbar-item" href="/login"> Login</a>
            <a className="navbar-item" href="/map"> Map</a>
            <a className="navbar-item" href="/registration">Registration</a>
            <a className="navbar-item" href="/scheduler"> Calendar</a>
            <a className="navbar-item" href="/user-landing"> User landing</a>
            <a className="navbar-item" href="/about">About</a>
            <a className="navbar-item" href="/signup">Sign Up</a>
            <a className="navbar-item" href="/profile">Profile</a>
            <a className="navbar-item" href="/signup2">signing up</a>


            {/* <a className="navbar-item">Documentation</a> */}

            <div className="navbar-item has-dropdown is-hoverable">
              <span className="navbar-link">More</span>

              <div className="navbar-dropdown">
                <span className="navbar-item">Events</span>
                <a className="navbar-item" href="/about">About</a>
                <span className="navbar-item">Contact</span>
                <hr className="navbar-divider" />
                <span className="navbar-item"></span>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button className="button is-rounded is-inverted"><Link to="/signup" >Sign Up</Link></button>
                <button className="button is-rounded is-inverted" onClick={handleLogout}>LOGOUT</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
