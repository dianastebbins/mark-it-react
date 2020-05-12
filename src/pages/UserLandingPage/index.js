import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"
import { Link } from "react-router-dom";

import "./style.css"
import API from "../../utils/API"

// import SomeComponent from '../../components/SomeComponent';

export default function UserLandingPage() {
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
        <div className="UserLandingPage">
            <h1>UserLandingPage</h1>
            <h3>Navbar goes here</h3>
            <h3>Notification section...Vendor added product or date, other?</h3>
            <h3>IF(user is Vendor and selected Vendor mgmt)<br></br>
            </h3>
            <button class="button is-dark">Schedule at a market</button><br></br>
            <button class="button is-dark">Manage Products</button><br></br>
            <button class="button is-dark">Manage Product Link</button><br></br>
            <button class="button is-dark">Manage Profile Link</button><br></br>
            <button class="button is-dark">View Upcoming schedule</button><br></br>
            ELSE Favs was selected<br></br>

            <button class="button is-primary">Favorite Markets link</button><br></br>
            <button class="button is-primary">Search All Markets link</button><br></br>
            <button class="button is-primary">Favorite Vendors link</button><br></br>
            <button class="button is-primary">Search All Vendors link</button><br></br>


            <Link to="/" >temporary link to LandingPage</Link>
        </div>
    )
}