import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"
import { Link } from "react-router-dom";

import "./style.css"
import API from "../../utils/API"
import Footer from '../../components/Footer';


// import SomeComponent from '../../components/SomeComponent';

export default function ListingPage() {
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
      <div className="ListingPage">
         <div className="body">
            <h1>ListingPage</h1>
            <h3>Navbar goes here</h3>
            <h3>Market Table/List goes here<br></br>

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
                ....OR<br></br>
                Vendor Table/List goes here<br></br>
               <table class="table">
                  <thead>
                     <tr>
                        <th>Position</th>
                        <th>Name</th>
                        <th>Country</th>
                        <td><button class="button is-primary">Details</button><br></br></td>

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
                ....OR<br></br>
                Product Table/List goes here<br></br>
               <table class="table">
                  <thead>
                     <tr>
                        <th>Position</th>
                        <th>Name</th>
                        <th>Country</th>
                        <td><button class="button is-primary">Details</button><br></br></td>

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
            </h3>
            <h3>Each row has Detail button</h3>
            <Link to="/login" >temporary link to LoginPage</Link>

         </div>
         <Footer />
      </div>
   )
}