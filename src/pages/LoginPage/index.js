import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"
import { Link } from "react-router-dom";

import "./style.css"
import API from "../../utils/API"
import Footer from '../../components/Footer';


// import SomeComponent from '../../components/SomeComponent';

export default function LoginPage() {
  // const [playerState,setPlayerState]= useState({
  //     name:'',
  //     team:''
  // })

  // useEffect(()=>{
  //     API.getAllPlayers().then(res=>{
  //         console.log(res.data)
  //         setPlayersState(res.data)
  //         setFilteredPlayersState(res.data)
  //     }).catch(err=>{
  //         console.log(err);
  //     })
  // },[])

  // const params = useParams(); // for retrieving id from .../path/:id apis
  // const history = useHistory();

  // const handleDeleteBtnClick = event=>{
  //     event.preventDefault();
  //     API.deletePlayerById(params.id).then(res=>{
  //         history.push('/')
  //     })
  // }

  // const handleFormSubmit = event=>{
  // OR
  // const handleInputChange = event=>{
  //     event.preventDefault();
  //     API.createPlayer(playerState).then(newPlayer=>{
  //         console.log(newPlayer)
  //         setPlayerState({
  //             name:'',
  //             team:''
  //         })
  //         history.push("/")
  //     })
  // }

  return (
    // <div className="LoginPage">
    //     <h1>LoginPage</h1>
    //     <h3>FORM with <br></br>
    //         ....username input,<br></br>
    //         ....password input, <br></br>
    //         ....Login! button <br></br>
    //         goes here</h3>
    //     
    // </div>
    <div className="section">
      <div className="body">

        <div className="container">
          <div className="card">
            <div className="card-header">
              <p className="card-header-title">
                Please Login:
            </p>
            </div>
            <div className="card-content">
              <form>
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input className="input" type="email" placeholder="Email" />
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control has-icons-left">
                    <input className="input" type="password" placeholder="Password" />
                    <span className="icon is-small is-left">
                      <i className="fas fa-lock"></i>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <button className="button is-success">
                      Login
          </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div className="section">
            <button className="button">
              <Link to="/map" >temporary link to MapPage</Link>
            </button>

          </div>
        </div>

      </div>

    </div>
  )
}