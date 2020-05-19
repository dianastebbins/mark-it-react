import React from 'react'
// for the next arrow svg icon
// import { ReactComponent as NextArrow } from "../../assets/images/nextarrow.svg";
import "./style.css"
import API from "../../utils/API"
import Footer from '../../components/Footer';
import video from '../../assets/images/farm2.mp4'
import logo from '../../assets/images/brandlogo.png'



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
                <video autoPlay loop muted src={video}></video>

                <div className="splashpagetext">
                    <img src={logo} className="title fade-in" />
                       
                      
                    <h2 className="subtitle">
                        A friendly place for your local farmers market from the comfort of your home
                        </h2>

                </div>

            </section>









            <input className="input zipcodeform" type="text" placeholder="Zip Code"></input><br></br>
            <input className="button" type="submit" value="Find" /><br></br>



        </div>
    )
}