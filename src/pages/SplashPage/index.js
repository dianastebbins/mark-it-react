import React from 'react'
// for the next arrow svg icon
// import { ReactComponent as NextArrow } from "../../assets/images/nextarrow.svg";
import "./style.css"
import video from '../../assets/images/farm2.mp4'
import logo from '../../assets/images/brandlogo.png'



export default function SplashPage() {



    return (
        <div className="SplashPage">



            <section>
                {/* this video tag is looping the video and muting it
                 and autoplaying on splash page */}
                <video autoPlay loop muted src={video}></video>

                <div className="splashpagetext">
                    <img src={logo} alt="logo" className="title fade-in" />


                    <h2 className="SplashSubtitle">
                        A friendly place for your local farmers market from the comfort of your home
                    </h2>
                    <h1>Would you like to sell your products?</h1>
                    <h1>Are you looking to buy fresh products from local vendors to help in saving Energy?</h1>
                    <h1>Mark It has made it Easy! You can get started by creating an account</h1>
                </div>

            </section>









            {/* <input className="input zipcodeform" type="text" placeholder="Zip Code"></input><br></br> */}
            {/* <input className="button" type="submit" value="Find" /><br></br> */}



        </div>
    )
}