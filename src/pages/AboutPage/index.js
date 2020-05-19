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

      <div className="section is-large">
        <div className="columns">
          <div className="box column is-10">

            <h1 className="title has-text-centered"> Meet the Team</h1>

            {/* start of card for our photos */}
            {/* card 1 */}


            {/* first column */}
            <div className="columns">
              <div className="column is-3">

                <div className="card">
                  <div className="card-image">
                    <figure className="image is-3by3">
                      <img src="../../../assets/images/Diana2.png" alt="A Diana" />
                    </figure>
                  </div>
                  <div className="card-content">

                    <p className="title">Diana Stebbins</p>
                    <p className="subtitle has-text-centered">Back End Developer<br></br>Git Master</p>

                    <div className="content">
                      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/diana-stebbins-b618b034/">LinkedIn</a> <br></br>
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/dianastebbins">Github</a>
                    </div>
                  </div>
                </div>

              </div>

              {/* second column */}
              <div className="column is-3">

                <div className="card">
                  <div className="card-image">
                    <figure className="image is-3by3">
                      <img src="../../../assets/images/John1.png" alt="A John" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <p className="title">John Huntsperger</p>
                    <p className="subtitle has-text-centered">Front End Developer<br></br>UI/UX Designer</p>
                    <div className="content">
                      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/john-huntsperger-4854b01a1/">LinkedIn</a><br></br>
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/Huelsdonk">Github</a>

                    </div>
                  </div>
                </div>
              </div>

              {/* third column */}
              <div className="column is-3">

                <div className="card">
                  <div className="card-image">
                    <figure className="image is-3by3">
                      <img src="../../../assets/images/Yalda1.png" alt="A Yalda" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <p className="title">Yalda Ali Aghazadeh</p>
                    <p className="subtitle has-text-centered">Project Manager <br></br>Front End Developer<br></br>UI/UX Designer</p>

                    <div className="content">

                      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/zahraaliaghazadeh/">LinkedIn</a><br></br>
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/zahraaliaghazadeh">Github</a>

                    </div>
                  </div>
                </div>
              </div>

              {/* forth column */}
              <div className="column is-3">

                <div className="card">
                  <div className="card-image">
                    <figure className="image is-3by3">
                      <img src="../../../assets/images/zac.png" alt="A Zac" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <p className="title">Zac Stowell</p>
                    <p className="subtitle has-text-centered">Back End Developer<br></br>Front End Developer</p>

                    <div className="content">
                      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/zachary-stowell">LinkedIn</a> <br></br>
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/the-medium-place">Github</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>



    </div >
  )
}




