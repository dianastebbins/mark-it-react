import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"
import { Link } from "react-router-dom";

import "./style.css"
import API from "../../utils/API"

// import SomeComponent from '../../components/SomeComponent';

export default function LandingPage() {
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
        <div className="LandingPage">
            <section className="hero is-success is-bold">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">Mark-It</h1>
                        <h2 className="subtitle">Farm/Kitchen/Garage to App to Table/Home</h2>
                    </div>
                </div>
            </section>
            <h1>Front/Landing/Splash/Home Page</h1>
            <h1>FLSH</h1>
            <h3>Navbar goes here</h3>
            {/* navbar has Favs link, Vendors Only link, Reg/Login  */}
            <h3>Banner goes here...bulma hero?</h3>
            <h3>IF(user is logged in)<br></br>
                ....Vendor List link goes here</h3>
            <h3>Label "Markets near me:" goes here</h3>
            <h3>Map button goes here</h3>
            <h3>NOT HERE, just map Market List result goes here</h3>
            <h3>FORM with<br></br>
                ...."or find by"<br></br>
                ....zipcode input<br></br>
                ....Go! button<br></br>
                goes here</h3>
            <Link to="/add-product" >temporary link to AddProductPage</Link>
        </div>
    )
}