import React from 'react'
// import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"
import { Link } from "react-router-dom";

import "./style.css"
import API from "../../utils/API"
import Footer from '../../components/Footer';

export default function AboutPage() {
    return (
        <div>
         {/* start of card for our photos */}
            {/* card 1 */}
            {/* <div className="columns">
  <div className="column">
    First column
  </div>
  <div className="column">
    Second column
  </div>
  <div className="column">
    Third column
  </div>
  <div className="column">
    Fourth column
  </div>
</div> */}
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="" alt="Placeholder image"/>
                     </figure>
                </div>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-left">
                                     <figure className="image is-48x48">
                                           <img src="https://place-hold.it/300x300" alt="Placeholder image"/>
                                     </figure>
                                </div>
                                     <div className="media-content">
                                      <p className="title is-4">John Smith</p>
                                      <p className="subtitle is-6">@johnsmith</p>
                          </div>
                        </div>

                         <div className="content">
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                         <a href="#">#css</a> <a href="#">#responsive</a>
                        <br></br>
      {/* <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> */}
    </div>
  </div>
</div>
        
        
        </div>
    )
}
