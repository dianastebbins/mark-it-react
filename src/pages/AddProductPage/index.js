import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"
import { Link } from "react-router-dom";

import "./style.css"
import API from "../../utils/API"

export default function AddProductPage() {
    const [productState, setProductState] = useState({
        
        name: '',
        description: '',
        price: '',
        details: '',
        userId: ''
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
        const { name, value } = event.target;

        setProductState({
            [name]: value
        })
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        API.addProduct(productState).then(newProduct => {
            console.log(productState)
            setProductState({
                name: '',
                description: '',
                price: '',
                details: '',
                userId: ''
            })
        })
    }
   
   

// dw69fw1u3 is my cloudname
    // https://api.cloudinary.com/v1_1/dw69fw1u3/image/upload
    const uploadFile = async e => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        // this data/preset is required by cloudinary (named sick fits in the cloudinary settings)
        data.append("upload_preset", "k0kdipbb");
        const res = await fetch(
            "https://api.cloudinary.com/v1_1/dw69fw1u3/image/upload",
            {
                method: "POST",
                body: data
            }
        );
        const file = await res.json();
        console.log(file);
        setProductState({
            image: file.secure_url,
            // largeImage: file.eager[0].secure_url
        });
    }

    // const handleFormSubmit = event=>{
    // OR
    // const this.handleInputChange = event=>{
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
            <div className="AddProductPage">
                <div className="container addProduct">

                    <div className="section mainSection">
                        <div className="box">
                            <form>
                                <div className="field">
                                    <div className="field">
                                        <label className="label">Product Name</label>
                                        <div className="control">
                                            <input className="input is-hovered" type="text" onChange={handleInputChange} name="name" value={productState.className} placeholder="Product Name" />
                                        </div>
                                    </div>
                                   
                                    <div className="field">
                                        <label className="label">Product Description</label>
                                        <div className="control">
                                            <input className="input is-hovered" type="text" onChange={handleInputChange} name="description" value={productState.description} placeholder="Description" />
                                        </div>
                                    </div>

                                    <div className="field">
                                        <label className="label">Price</label>
                                        <div className="control">
                                            <input className="input is-hovered" type="text" onChange={handleInputChange} name="price" value={productState.price} placeholder="Price" />
                                        </div>
                                    </div>

                                    <div className="field">
                                        <label className="label">Details</label>
                                        <div className="control">
                                            <input className="input is-hovered" type="text" onChange={handleInputChange} name="details" value={productState.details} placeholder="details" />
                                        </div>
                                    </div>

                                    <div className="field">
                                        <label className="label">Photo Placeholder</label>
                                        <div className="control">

                                            <input className="input is-hovered" type="file" onChange={uploadFile} name="userId" value={productState.userId} placeholder="use upload component instead" />


                                            <i class="fas fa-upload uploadicon"></i>
                                        </div>
                                    </div>
                                    {productState.image ? (
                                        <div>
                                            <img src={productState.image}></img>
                                        </div>
                                    ) : (<div />)}
                                    <div class="field">
                                        <div class="control">
                                            <label class="checkbox">
                                                <input type="checkbox" />
                                            I agree to the <a href="#">terms and conditions</a>
                                            </label>
                                        </div>
                                    </div>
                             
                             {/* units input should be added later */}
                                    <button className="button is-success is-light" onClick={handleFormSubmit}>Add Product!</button>

                                </div>
                            </form>
                        </div>
                    </div>

                </div>

            </div >

        )
    }
