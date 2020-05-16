import React from "react";
import "./style.css";
import { Link, useHistory } from "react-router-dom";
import API from "../../utils/API"
import photo from "../../assets/images/brandlogo.png"

export default function Nav(props) {
  const history = useHistory()
  
  
  const handleLogout = event=>{
    API.logout().then(res=>{
        props.logoutHandle();
        console.log(res.data)
       history.push('/')
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
          <a className=" brandlogo" href="/"><img src={photo} alt="logo" height="80px" width="80px"></img></a>
            {/* <a className="navbar-item" href="/"> Home</a> */}
            <a className="navbar-item" href="/map">Find Markets</a>
            <a className="navbar-item" href="/add-product">Add Product</a>
            <a className="navbar-item" href="/detail">Items for Sale</a>


            {/* <a className="navbar-item">Documentation</a> */}

            <div className="navbar-item has-dropdown is-hoverable">
              <span className="navbar-link">More</span>

              <div className="navbar-dropdown">
              {props.currentUser?<a className="navbar-item" href={`/user/${props.id}`}>My Profile</a>:""}
                <a className="navbar-item" href="/about">About</a>
                {/* <span className="navbar-item">Contact</span> */}
                {/* <hr className="navbar-divider" /> */}
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
              {!props.currentUser?<button className="button is-rounded is-inverted"><Link to="/registration">Sign Up</Link></button>:''}
                {!props.currentUser?<button className="button is-rounded is-inverted"><Link to="/login">Login</Link></button>:''}
                {props.currentUser?<button className="button is-rounded is-inverted" onClick={handleLogout}>Logout</button>:''}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
