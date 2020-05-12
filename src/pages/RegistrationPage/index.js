import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"
import { Link } from "react-router-dom";

import "./style.css"
import API from "../../utils/API"
import Footer from '../../components/Footer';


// import SomeComponent from '../../components/SomeComponent';

export default function RegistrationPage() {
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
        <div className="RegistrationPage">
            <h1>RegistrationPage</h1>
            <h3>Welcome banner, registration option description goes here</h3>
            {/* video as background, gif? */}
            <h3>I am a vendor checkbox goes here</h3>
            <h3>FORM with<br></br>
            <input class="input" type="text" placeholder="First Name"></input>
            <input class="input" type="text" placeholder="Last Name"></input>
            <input class="input" type="text" placeholder="email"></input>
            <input class="input" type="text" placeholder="username"></input>
            <input class="input" type="text" placeholder="password"></input>
                ....first name input,<br></br>
                ....last name input,<br></br>
                ....email input,<br></br>
                ....username input,<br></br>
                ....password input,<br></br>
                ....IF(user is vendor is true) <br></br>
                {/* business id, via UUID package */}
                <input class="input" type="text" placeholder="Business Name"></input>
                <input class="input" type="text" placeholder="Business Email"></input>
                <input class="input" type="text" placeholder="Business phone"></input>
                <input class="input" type="text" placeholder="Website"></input>
                <input class="input" type="text" placeholder="Business License number"></input>
                ........business name input,<br></br>
                ........business email input,<br></br>
                ........business phone input,<br></br>
                ........website input,<br></br>
                ........business license input<br></br>
                <input class="button" type="submit" value="Submit"/>

                ....Register! button <br></br>
                goes here</h3>
            <Link to="/scheduler" >temporary link to SchedulerPage</Link>
            <Footer/>
        </div>
    )
}