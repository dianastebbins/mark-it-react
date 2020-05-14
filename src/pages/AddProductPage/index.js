import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"
import { Link } from "react-router-dom";

import "./style.css"
import API from "../../utils/API"
import Footer from '../../components/Footer';


// import SomeComponent from '../../components/SomeComponent';
class AddProductPage extends React.Component {
    state = {
        name: '',
        description: '',
        price: '',
        details: '',
        userId: ''
    }

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

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.addProduct(this.state).then(newProduct => {
            console.log(this.state)
            this.setState({
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
    uploadFile = async e => {
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
        this.setState({
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
    render() {
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
                                            <input className="input is-hovered" type="text" onChange={this.handleInputChange} name="name" value={this.state.className} placeholder="Product Name" />
                                        </div>
                                    </div>
                                   
                                    <div className="field">
                                        <label className="label">Product Description</label>
                                        <div className="control">
                                            <input className="input is-hovered" type="text" onChange={this.handleInputChange} name="description" value={this.state.description} placeholder="Description" />
                                        </div>
                                    </div>

                                    <div className="field">
                                        <label className="label">Price</label>
                                        <div className="control">
                                            <input className="input is-hovered" type="text" onChange={this.handleInputChange} name="price" value={this.state.price} placeholder="Price" />
                                        </div>
                                    </div>

                                    <div className="field">
                                        <label className="label">Details</label>
                                        <div className="control">
                                            <input className="input is-hovered" type="text" onChange={this.handleInputChange} name="details" value={this.state.details} placeholder="details" />
                                        </div>
                                    </div>

                                    <div className="field">
                                        <label className="label">Photo Placeholder</label>
                                        <div className="control">

                                            <input className="input is-hovered" type="file" onChange={this.uploadFile} name="userId" value={this.state.userId} placeholder="use upload component instead" />


                                            <i class="fas fa-upload uploadicon"></i>
                                        </div>
                                    </div>
                                    
                                    <div class="field">
                                        <div class="control">
                                            <label class="checkbox">
                                                <input type="checkbox" />
                                            I agree to the <a href="#">terms and conditions</a>
                                            </label>
                                        </div>
                                    </div>
                             
                             {/* units input should be added later */}
                                    <button className="button is-success is-light" onClick={this.handleFormSubmit}>Add Product!</button>

                                </div>
                            </form>
                        </div>
                    </div>

                </div>

            </div >

        )
    }
}

export default AddProductPage