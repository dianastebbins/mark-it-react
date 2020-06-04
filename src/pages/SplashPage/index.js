import React from 'react'
// for the next arrow svg icon
// import { ReactComponent as NextArrow } from "../../assets/images/nextarrow.svg";
import "./style.css"
import video from '../../assets/images/flowers.mp4'
import logo from '../../assets/images/brandlogo.png'



export default function SplashPage() {



    return (
        <div className="SplashPage">
            <section>
                {/* this video tag is looping the video and muting it
                 and autoplaying on splash page */}
                <video autoPlay loop muted src={video} id="vid"></video>

                <div className="splashpagetext overlay">

                    <div className="">

                    {/*TODO need to adjust the logo on the screen above the text */}
                    {/* <img src={logo} alt="logo" className=" title fade-in" /> */}


                    <img src={logo} alt="logo" className="frontlogo rotate-scale-up-ver"/>


                        <p className="SplashSubtitle">
                           
                    Bringing the Farmer's Market experience to your desktop or phone.
                    </p>
                    

                    </div>

                </div>
            </section>


            {/* input fields if we want to have access to map on the splash page */}
            {/* <input className="input zipcodeform" type="text" placeholder="Zip Code"></input><br></br> */}
            {/* <input className="button" type="submit" value="Find" /><br></br> */}
        </div>
    )
}