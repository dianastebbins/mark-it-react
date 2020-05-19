import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"
import { Link } from "react-router-dom";

import "./style.css"
import API from "../../utils/API"

export default function AddProductPage() {
    const history = useHistory();
    const [productState, setProductState] = useState({
        
        name: '',
        description: '',
        price: '',
        details: '',
        userId: '',
        image: ''
    })
    
    
    useEffect(() => {
        API.readSessions().then(res=>{
           const ID = res.data.user.id
            setProductState({
                userId: ID
            })
                
            
          })
    //  the component runs on page load   

    },[])



    const handleInputChange = event => {
        const { name, value } = event.target;

        setProductState({
            ...productState, [name]: value
        })
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        console.log(productState);
       
        API.addProduct(productState).then(newProduct => {
            console.log(productState)
            setProductState({
                name: '',
                description: '',
                price: '',
                details: '',
                userId: '',
                image: ''
            })
        })
        history.push('/')
    }
   
   

// Function to upload image on add product
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
            ...productState, image: file.secure_url
            // largeImage: file.eager[0].secure_url
        });
    }

   
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
                                        {/* calling the upload file function for uploading image on card */}
                                            <input className="input is-hovered" type="file" onChange={uploadFile} name="userId" placeholder="use upload component instead" />


                                            <i className="fas fa-upload uploadicon"></i>
                                        </div>
                                    </div>
                                    {productState.image ? (
                                        <div>
                                            <img src={productState.image}></img>
                                        </div>
                                    ) : (<div />)}
                                    <div className="field">
                                        <div className="control">
                                            <label className="checkbox">
                                                <input required type="checkbox" />
                                            I agree to the <a href="https://gist.github.com/zahraaliaghazadeh/7f5bbde80804ca1ae0cb6f9ed1fbc540">terms and conditions</a>
                                            </label>
                                        </div>
                                    </div>
                             
                             {/* TODO: units input should be added later */}
                                    <button className="button is-success is-light" onClick={handleFormSubmit}>Add Product!</button>

                                </div>
                            </form>
                        </div>
                    </div>

                </div>

            </div >

        )
    }
