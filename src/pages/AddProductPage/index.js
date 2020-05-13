import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"
import { Link } from "react-router-dom";

import "./style.css"
import API from "../../utils/API"
import Footer from '../../components/Footer';


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

    // start of uploading images
// dw69fw1u3 is my cloudname

    // https://api.cloudinary.com/v1_1/dw69fw1u3/image/upload

    // uploadFile = async e => {
    //     const files = e.target.files;
    //     const data = new FormData();

    //     data.append("file", files[0]);
    //     // this data/preset is required by cloudinary (named sick fits in the cloudinary settings)
    //     data.append("upload_preset", "markit");
    //     const res = await fetch(
    //         "https://api.cloudinary.com/v1_1/dw69fw1u3/image/upload",

    //         {
    //             method: "POST",
    //             body: data
    //         }
    //     );
    //     const file = await res.json();
    //     // this.setState({
    //     //     image: file.secure_url,
    //     //     largeImage: file.eager[0].secure_url
    //     // });
    // }; 

    // end of uploading images


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
        <div className="AddProductPage">

            <div className="container">



                {/* <div className="body"> */}



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
                <div className="section mainSection">

                    <div className="box">



                        <form>
                            <div className="field">

                                <div className="field">
                                    {/* product name */}
                                    <div className="field">
                                        <label className="label">Product Name</label>
                                        <div className="control">
                                            <input className="input is-hovered" type="text" onChange={handleInputChange} name="product_name" value={productState.product_name} placeholder="Product Name" />
                                        </div>
                                    </div>
                                    {/* product description */}
                                    <div className="field">
                                        <label className="label">Product Description</label>
                                        <div className="control">
                                            <input className="input is-hovered" type="text" onChange={handleInputChange} name="product_description" value={productState.product_description} placeholder="Description" />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Price</label>
                                        <div className="control">
                                            <input className="input is-hovered" type="text" onChange={handleInputChange} name="price" value={productState.price} placeholder="Price in USD" />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Unit</label>
                                        <div className="control">
                                            <input className="input is-hovered" type="text" onChange={handleInputChange} name="price_unit" value={productState.unit} placeholder="Unit" />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Photo Placeholder</label>
                                        <div className="control">
                                            <input className="input is-hovered" type="text" onChange={handleInputChange} name="upload_photo" value={productState.upload_photo} placeholder="use upload component instead" />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Details</label>
                                        <div className="control">
                                            <textarea className="textarea is-hovered" type="input" onChange={handleInputChange} name="details" value={productState.details} placeholder="details" />
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
                                    <button className="button is-link is-outlined is-light" onClick={handleFormSubmit}>Add Product</button>

                                </div>
                            </div>
                            {/* <div className="field">
                                <div className="field-body">
                                    <div className="field">
                                        <label className="label">Price</label>
                                        <div className="control">
                                            <input className="input is-hovered" type="text" onChange={handleInputChange} name="price" value={productState.price} placeholder="Price in US$" />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Unit</label>
                                        <div className="control">
                                            <input className="input is-hovered" type="text" onChange={handleInputChange} name="price_unit" value={productState.unit} placeholder="Unit" />
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="field">
                                <div className="field-body">
                                    <div className="field">
                                        <label className="label">Photo Placeholder</label>
                                        <div className="control">
                                            <input className="input is-hovered" type="text" onChange={handleInputChange} name="upload_photo" value={productState.upload_photo} placeholder="use upload component instead" />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Details</label>
                                        <div className="control">
                                            <textarea className="textarea is-hovered" type="input" onChange={handleInputChange} name="details" value={productState.details} placeholder="details" />
                                        </div>
                                    </div>
                                </div>
                            </div> */}



                        </form>
                        {/* <div className="section">
                        <button class="button">
                            <Link to="/detail" >DetailPage</Link>
                        </button>
                    </div> */}
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>

    )
}

