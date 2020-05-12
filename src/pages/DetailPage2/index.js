// import React, { useState, useEffect } from 'react'
// import { useParams, useHistory } from "react-router-dom"
// import { Link } from "react-router-dom";

// import "./style.css"
// import API from "../../utils/API"

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
            <h3>Table/List goes here (read/view only data) </h3><br></br>
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
            <button class="button is-primary">Chat with Vendor</button><br></br>

                IF(user is vendor and on their own vendor page)<br></br>
            <label class="checkbox"><input type="checkbox" /> user vender on their own page</label><br></br>

                ........Add Product button
                ........THIS BUTTON COULD BE ON VENDOR PROFILE PAGE
                ....Show Products list,<br></br>
                IF(Product Detail)<br></br>

            <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src="https://place-hold.it/300x300" alt="Placeholder image" />
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img src="https://versions.bulma.io/0.7.1/images/placeholders/96x96.png" alt="Placeholder image" />
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">John Smith</p>
                            <p class="subtitle is-6">@johnsmith</p>
                        </div>
                    </div>

                    <div class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                             <a href="#">#css</a> <a href="#">#responsive</a>
                        <br></br>
                            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </div>
                    </div>
                </div>



                ....Product Name,Product Description,<br></br>
                ....Price,Unit,<br></br>
                ....Details,<br></br>
                ....Photo<br></br>
                <img src="https://place-hold.it/300x300" /><br></br>
                ....IF(user is vendor and on their own product page)<br></br>

                ........update button<br></br>
                <button class="button is-primary">Update</button><br></br>

                .......delete button<br></br>
                <button class="button is-primary">Delete</button><br></br>

                <Link to="/listing" >temporary link to ListingPage</Link>
            </div>
    )
}