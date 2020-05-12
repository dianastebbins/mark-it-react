import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"
import { Link } from "react-router-dom";

import "./style.css"
import API from "../../utils/API"

// import SomeComponent from '../../components/SomeComponent';

export default function AddProductPage() {
    const [productState, setProductState] = useState({
        product_name: '',
        product_description: '',
        price: '',
        price_unit: '',
        details: '',
        upload_photo: ''
    })

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

    const handleInputChange = event => {
        event.preventDefault();
        console.log("update state if necessary...")
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        console.log("implement API proxy for database call to save product");
    }

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
        <div className="AddProductPage container">
            <h1>AddProductPage</h1>
            <h3>Navbar goes here</h3>
            {/* <h3>FORM with<br></br>
                ....Product Category, <br></br>
                ....Product Name input,<br></br>
                ....Short Description input,<br></br>
                ....Price input,<br></br>
                ....Unit input,<br></br>
                ....Detailed description (optional) input,<br></br>
                ....Upload Photo component,<br></br>
                ....Add Product! button<br></br>
                goes here
            </h3> */}
            {/* <div className="section">
                <div className="field container">
                    <label className="label">Name</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="e.g Alex Smith" />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
                    </div>
                </div>
            </div> */}
            <div className="section">

                <form>
                    <div className="field is-horizontal">
                        <div className="field-body">
                            <div className="field">
                                <label className="label">Product Name</label>
                                <div className="control">
                                    <input className="input" type="text" onChange={handleInputChange} name="product_name" value={productState.product_name} placeholder="Product Name" />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Product Description</label>
                                <div className="control">
                                    <input className="input" type="text" onChange={handleInputChange} name="product_description" value={productState.product_description} placeholder="Description" />
                                    <input className="input" onChange={handleInputChange} name="product_description" placeholder="Description"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <label className="label">Price</label>
                    <div className="control">
                        <input className="input" type="text" onChange={handleInputChange} name="price" value={productState.price} placeholder="price" />
                    </div>
                    <label className="label">Unit</label>
                    <div className="control">
                        <input className="input" type="text" onChange={handleInputChange} name="price_unit" value={productState.price_unit} placeholder="unit - each, dozen, etc." />
                    </div>
                    <label className="label">Details</label>
                    <div className="control">
                        <input className="input" type="text" onChange={handleInputChange} name="details" value={productState.details} placeholder="details" />
                    </div>
                    <div className="field">
                        <label className="label">Photo Placeholder</label>
                        <div className="control">
                            <input className="input" type="text" onChange={handleInputChange} name="upload_photo" value={productState.upload_photo} placeholder="use upload component instead" />
                        </div>
                    </div>
                    <button className="button is-success is-light" onClick={handleFormSubmit}>Add Product!</button>
                </form>
                <Link to="/detail" >temporary link to DetailPage</Link>
            </div>
        </div>

    )
}