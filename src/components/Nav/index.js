import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav className="navbar is-dark is-bold" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            <i class="brandlogo"><img src="assets/images/screenshot4.png"></img></i>
            <i class="fas fa-bread-slice"></i>
            <i class="fas fa-soap"></i>
            <i class="fas fa-carrot"></i>
            <i class="fas fa-people-arrows"></i>
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
            <a className="navbar-item">Home</a>

            {/* <a className="navbar-item">Documentation</a> */}

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">Events</a>
                <a className="navbar-item">About</a>
                <a className="navbar-item">Contact</a>
                <hr className="navbar-divider" />
                <a className="navbar-item"></a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-rounded is-link">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-rounded is-info">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
