import React, {useState} from 'react'
import {useHistory} from "react-router-dom"
import API from "../../../utils/API"
import "./style.css"

export default function AddPlayerPage() {
    const [playerState,setPlayerState]= useState({
        name:'',
        team:'',
        at_bats:"",
        singles:"",
        doubles:"",
        triples:"",
        home_runs:"",
        runs_batted_in:""
    })

    const history = useHistory();

    const handleInputChange = event=>{
        const {name,value} = event.target;
        setPlayerState({
            ...playerState,
            [name]:value
        })
    }

    const handleFormSubmit = event=>{
        event.preventDefault();
        API.createPlayer(playerState).then(newPlayer=>{
            console.log(newPlayer)
            setPlayerState({
                name:'',
                team:'',
                at_bats:"",
                singles:"",
                doubles:"",
                triples:"",
                home_runs:"",
                runs_batted_in:""
            })
            history.push("/")
        })

    }

    return (
        <div className="AddPlayerPage">
            <h1>Add Page</h1>
            <form>
                <input type = "text"  onChange = {handleInputChange} name = "name" value = {playerState.name} placeholder="name"/>
                <input type = "text"  onChange = {handleInputChange} name = "team" value = {playerState.team} placeholder="team"/>
                <br/>
                <input type = "text"  onChange = {handleInputChange} name = "at_bats" value = {playerState.at_bats} placeholder="at_bats"/>
                <input type = "text"  onChange = {handleInputChange} name = "singles" value = {playerState.singles} placeholder="singles"/>
                <br/>
                <input type = "text"  onChange = {handleInputChange} name = "doubles" value = {playerState.doubles} placeholder="doubles"/>
                <input type = "text"  onChange = {handleInputChange} name = "triples" value = {playerState.triples} placeholder="triples"/>
                <br/>
                <input type = "text"  onChange = {handleInputChange} name = "home_runs" value = {playerState.home_runs} placeholder="home_runs"/>
                <input type = "text"  onChange = {handleInputChange} name = "runs_batted_in" value = {playerState.runs_batted_in} placeholder="runs_batted_in"/>
                <br/>
                <button onClick={handleFormSubmit}>Add Player!</button>
            </form>
        </div>
    )
}
