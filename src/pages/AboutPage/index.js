import React from 'react'
// import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"
import { Link } from "react-router-dom";

import "./style.css"
import API from "../../utils/API"
import Footer from '../../components/Footer';

export default function AboutPage() {
  return (
    <div className="AboutPage">

      <div className="section">
        <div className="container">

          <div className="box">

           <h1 className="title"> Meet the Team</h1>

            {/* start of card for our photos */}
            {/* card 1 */}
            <div className="columns">

              {/* first comlumn */}
              <div className="column is-3">
                
             <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="../../../assets/images/Diana2.png" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">

                      <div className="media-content">
                        <p className="title is-4">Diana Stebbins</p>
                        <p className="subtitle is-6">Back End Developer<br></br>Git Master</p>
                      </div>
                    </div>

                    <div className="content">
                    <a target="_blank" href="https://www.linkedin.com/in/diana-stebbins-b618b034/">LinkedIn</a> <br></br>
                    <a target="_blank" href="https://github.com/dianastebbins">Github</a>
                    </div>
                  </div>
                </div>

              </div>

              {/* second column */}
              <div className="column is-3">
                
          <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="../../../assets/images/John1.png" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title is-4">John Huntsperger</p>
                        <p className="subtitle is-6">Front End Developer<br></br>UI/UX Designer</p>
                      </div>
                    </div>

                    <div className="content">
                    <a target="_blank" href="https://www.linkedin.com/in/john-huntsperger-4854b01a1/">LinkedIn</a><br></br>
                    <a target="_blank" href="https://github.com/Huelsdonk">Github</a>

                    </div>
                  </div>
                </div>
              </div>

              {/* third column */}
              <div className="column is-3">
                
          <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="../../../assets/images/Yalda1.png" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left">
                      </div>
                      <div className="media-content">
                        <p className="title is-4">Yalda Ali Aghazadeh</p>
                        <p className="subtitle is-6">Project Manager <br></br>Front End Developer<br></br>UI/UX Designer</p>
                      </div>
                    </div>

                    <div className="content">
                      
                    <a target="_blank" href="https://www.linkedin.com/in/zahraaliaghazadeh/">LinkedIn</a><br></br>
                    <a target="_blank" href="https://github.com/zahraaliaghazadeh">Github</a>
                
                    </div>
                  </div>
                </div>
              </div>

              {/* forth column */}
              <div className="column is-3">
                
          <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="../../../assets/images/zac.png" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title is-4">Zac Stowell</p>
                        <p className="subtitle is-6 is-centered">Back End Developer<br></br>Front End Developer</p>
                      </div>
                    </div>

                    <div className="content">
                    <a target="_blank" href="https://www.linkedin.com/in/zachary-stowell">LinkedIn</a> <br></br>
                    <a target="_blank" href="https://github.com/the-medium-place">Github</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>

      </div>



    </div>
  )
}




