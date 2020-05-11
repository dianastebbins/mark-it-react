import React, {useState,useEffect} from 'react'
import "./style.css"
import {useParams,useHistory} from "react-router-dom"
import API from "../../../utils/API"


export default function DetailsPage() {
    const params = useParams(); // for retrieving id from .../path/:id apis
    const history = useHistory(); // to save page visited, can return back
    const [playerState,setPlayerState]=useState({});
    const [atBatState,setAtBatState] = useState({
        result:"none",
        RBIS:0
    })
    
    useEffect(()=>{
        API.getPlayerById(params.id).then(res=>{
            setPlayerState(res.data)
        })
    },[])

    const handleDeleteBtnClick = event=>{
        event.preventDefault();
        API.deletePlayerById(params.id).then(res=>{
            history.push('/')
        })
    }

    const handleInputChange = event=>{
        const {name,value} = event.target;
        setAtBatState({
            ...atBatState,
            [name]:value
        })
    }
    const handleFormSubmit = event=>{
        event.preventDefault();
        const copyOfPlayer = {...playerState};
        copyOfPlayer.at_bats++;
        copyOfPlayer.runs_batted_in += parseInt(atBatState.RBIS);
        switch (atBatState.result) {
            case "none":
                
                break;
        
            case "single":
                copyOfPlayer.singles++;
                break;
        
            case "double":
                copyOfPlayer.doubles++;
                break;
        
            case "triple":
                copyOfPlayer.triples++;
                break;
        
            case "home_run":
                copyOfPlayer.home_runs++;
                break;
        
            default:
                break;
        }

        API.updatePlayerById(params.id,copyOfPlayer).then(res=>{
            setPlayerState(copyOfPlayer);
        })

    }
    
    return (
        <div className="DetailsPage">
            {/* {playerState?<h1>{playerState.name}</h1>:<h1>Loading...</h1>} */}
            <h1>{playerState.name} <button onClick={handleDeleteBtnClick}>Delete Me!</button></h1>
            <h3>{playerState.team}</h3>
            <h5>Stats</h5>
            <ul>
                <li>At bats:{playerState.at_bats}</li>
                <li>Hits:{playerState.singles+playerState.doubles+playerState.triples+playerState.home_runs}</li>
                <li>Batting Average:{((playerState.singles+playerState.doubles+playerState.triples+playerState.home_runs)/playerState.at_bats).toFixed(3)}</li>
                <li>singles:{playerState.singles}</li>
                <li>doubles:{playerState.doubles}</li>
                <li>triples:{playerState.triples}</li>
                <li>home runs:{playerState.home_runs}</li>
                <li>rbis:{playerState.runs_batted_in}</li>
            </ul>
            <form>
                <select value={atBatState.result} onChange={handleInputChange} name="result">
                    <option value="none">None</option>
                    <option value="single">Single</option>
                    <option value="double">Double</option>
                    <option value="triple">Triple</option>
                    <option value="home_run">Home Run</option>
                </select>
                <input type="text" value={atBatState.RBIS} onChange = {handleInputChange} name= "RBIS" placeholder="RBIs"/>
                <button onClick={handleFormSubmit}>Add at bat!</button>
            </form>
        </div>
    )
}
