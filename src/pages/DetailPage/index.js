import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"
import { Link } from "react-router-dom";

import "./style.css"
import API from "../../utils/API"

// import SomeComponent from '../../components/SomeComponent';

export default function DetailPage() {
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
        <div className="DetailPage">
            <h1>DetailPage</h1>
            <h3>Navbar goes here</h3>
            <h3>Table/List goes here (read/view only data)<br></br>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Position</th>
                            <th>Name</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th><abbr title="Position">Pos</abbr></th>
                            <th>Player</th>
                            <th>
                                <abbr title="Played for the country">Country</abbr>
                            </th>
                        </tr>
                    </tfoot>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Sachin</td>
                            <td>India</td>
                            <td><button class="button is-primary">Details</button><br></br></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Smith</td>
                            <td>Australia</td>
                            <td><button class="button is-primary">Details</button><br></br></td>

                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Joe Root</td>
                            <td>England</td>
                            <td><button class="button is-primary">Details</button><br></br></td>

                        </tr>
                    </tbody>
                </table>
                IF(Market Detail)<br></br>
                <label class="checkbox"><input type="checkbox" /> Market Detail</label><br></br>
                ....Market Name,<br></br>
                ....IF(user is logged in)<br></br>
                ........Favorites/Heart button,<br></br>
                ....Address,City,State,<br></br>
                ....Dates,Start Time,End Time,<br></br>
                ....Details/info<br></br>
                IF(Vendor Detail)<br></br>
                <label class="checkbox"><input type="checkbox" /> Vendor</label><br></br>

                ....Business Name,<br></br>
                ....IF(user is logged in)<br></br>
                ........Favorites/Heart button,<br></br>
                ....Business Email, Business Phone,<br></br>
                ....Website,<br></br>
                ....Chat with Vendor button<br></br>
                IF(user is vendor and on their own vendor page)<br></br>
                <label class="checkbox"><input type="checkbox" /> user vender on their own page</label><br></br>

                ........Add Product button
                ........THIS BUTTON COULD BE ON VENDOR PROFILE PAGE
                ....Show Products list,<br></br>
                IF(Product Detail)<br></br>
                ....Product Name,Product Description,<br></br>
                ....Price,Unit,<br></br>
                ....Details,<br></br>
                ....Photo<br></br>
                ....IF(user is vendor and on their own product page)<br></br>
                ........update button<br></br>
                .......delete button<br></br>
            </h3>
            <Link to="/listing" >temporary link to ListingPage</Link>
        </div>
    )
}