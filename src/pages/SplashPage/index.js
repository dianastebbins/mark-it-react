import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"
import { Link } from "react-router-dom";
// for the next arrow svg icon
// import { ReactComponent as NextArrow } from "../../assets/images/nextarrow.svg";
import "./style.css"
import API from "../../utils/API"
import Footer from '../../components/Footer';
import video from '../../assets/images/farm2.mp4'

// import SomeComponent from '../../components/SomeComponent';

export default function SplashPage() {



    return (
        <div className="SplashPage">

            {/* hero */}
            {/* <section class="hero is-dark is-fullheight">
                        <div class="hero-body">
                            <div class="container">
                            <video autoPlay loop muted src={video}></video>
                            </div>
                        </div>
                        </section> */}

            <section>
                <video autoPlay playsinline loop muted src={video}></video>

                <div className="splashpagetext">
                    <h1 class="title">
                        Mark-It
                        </h1>
                    <h2 class="subtitle">
                        A friendly place for your local farmers market from the comfort of your home
                        </h2>

                </div>

            </section>









            <input class="input zipcodeform" type="text" placeholder="Zip Code"></input><br></br>
            <input class="button" type="submit" value="Find" /><br></br>



        </div>
    )
}