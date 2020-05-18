import React, {useState} from "react";
import "./style.css";
import { Link, useHistory } from "react-router-dom";
import API from "../../utils/API"
import photo from "../../assets/images/brandlogo.png"

export default function Nav(props) {
  const [isActive, setisActive] = useState(false);

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
        {!isActive? <a className=" brandlogo" href="/"><img src={photo} alt="logo" height="80px" width="80px"></img></a>:''}


          <a
            onClick={() => {
              setisActive(!isActive);
            }}
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu"
        className={`navbar-menu ${isActive ? "is-active" : ""}`}>

          <div className="navbar-start">
          {isActive?<a className=" brandlogo" href="/"><img src={photo} alt="logo" height="80px" width="80px"></img></a>:''}
            {/* <a className="navbar-item" href="/"> Home</a> */}
            <a className="navbar-item" href="/map">Find Markets</a>
            {props.currentUser?<a className="navbar-item" href="/add-product">Add Product</a>:""}
            <a className="navbar-item" href="/detail">Items for Sale</a>
            {props.currentUser?<a className="navbar-item" href={`/user/${props.id}`}>My Profile</a>:""}
            <a className="navbar-item" href="/about">About</a>

            {/* <a className="navbar-item">Documentation</a> */}

            {/* <div className="navbar-item has-dropdown is-hoverable">
              <span className="navbar-link">More</span>

              <div className="navbar-dropdown">
              
                {/* <span className="navbar-item">Contact</span> */}
                {/* <hr className="navbar-divider" /> */}
              {/* </div> */}
            {/* </div> */} 
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
