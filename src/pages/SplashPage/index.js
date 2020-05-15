import React from 'react'
// for the next arrow svg icon
import { ReactComponent as NextArrow } from "../../assets/images/nextarrow.svg";
import "./style.css"



export default function SplashPage() {



    return (
        <div className="SplashPage">


            <div className="body">

                <section class="hero is-dark is-medium">
                    {/* <!-- Hero head: will stick at the top --> */}
                    <div class="hero-head">
                        {/* <nav class="navbar">
                            <div class="container">
                                <div class="navbar-brand">
                                    <a class="navbar-item">
                                    <a className=" brandlogo"><img src="assets/images/brandlogo.png"  height="100px" width="100px"></img></a>

                                        <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
                                    </a>
                                    <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                                        <span>Login</span>
                                        <span>SignUp</span>
                                        <span>Home</span>
                                    </span>
                                </div>
                                <div id="navbarMenuHeroA" class="navbar-menu">
                                    <div class="navbar-end">
                                        <a class="navbar-item is-active">
                                            Home
                                        </a>
                                        <a class="navbar-item">
                                            Examples
                                         </a>
                                        <a class="navbar-item">
                                            Documentation
                                          </a>
                                        <span class="navbar-item">
                                            <a class="button is-primary is-inverted">
                                                <span class="icon">
                                                    <i class="fab fa-github"></i>
                                                </span>
                                                <span>Download</span>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </nav> */}
                    </div>

                    {/* <!-- Hero content: will be in the middle --> */}
                    {/* <div class="hero-body">
                        <div class="container has-text-centered splashpagetext">
                            <h1 class="title">
                                Mark-It
                            </h1>
                            <h2 class="subtitle">
                                A friendly place for your local farmers market from the comfort of your home
                             </h2>
                            <NextArrow className="nextarrow" onClick={() => console.log("next arrow was clicked")} />
                        </div>
                    </div> */}

                    <img className="mainImage" src="https://images.unsplash.com/photo-1505872342847-6dbb5e76cd31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2208&q=80"></img>
                    <div className="splashpagetext">
                        <h1 class="title">
                            Mark-It
                        </h1>
                        <h2 class="subtitle">
                            A friendly place for your local farmers market from the comfort of your home
                        </h2>
                        <NextArrow className="nextarrow" onClick={() => console.log("next arrow was clicked")} />

                    </div>

                    {/* <!-- Hero footer: will stick at the bottom --> */}
                    <div class="hero-foot">
                        <nav class="tabs is-fullwidth">
                            <div class="container">
                                <ul>
                                    <li class="is-active"><a>Overview</a></li>
                                    <li><a>Home</a></li>
                                    <li><a>Events</a></li>
                                    <li><a>About</a></li>

                                </ul>
                            </div>
                        </nav>
                    </div>
                </section>

                {/* <section className="hero is-bold MainImage">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title mainIntro">Mark-It</h1>
                            <h2 className="subtitle mainIntro">Farm/Kitchen/Garage to App to Table/Home</h2>
                        </div>
                    </div>
                </section> */}

                <input class="input zipcodeform" type="text" placeholder="Zip Code"></input><br></br>
                <input class="button" type="submit" value="Find" /><br></br>


            </div>
        </div>
    )
}