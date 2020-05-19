import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"
import { Link } from "react-router-dom";
import VendorArr from "../../components/VendorArr.js";

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
    const [geoState, setGeoState] = useState({
        lat: null,
        lng: null
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
    navigator.geolocation.getCurrentPosition(position => {
        setGeoState({
            lng: position.coords.longitude,
            lat: position.coords.latitude
        })
    })
    useEffect(() => {
        API.readSessions().then(res => {
            const ID = res.data.user.id
            setProductState({
                userId: ID
            })
        })
    }, [])



    const handleInputChange = event => {
        const { name, value } = event.target;

        setProductState({
            ...productState, [name]: value
        })
    }

    const handleFormSubmit = event => {
        event.preventDefault();

        console.log(productState);
        console.log(geoState);
        // if (geoState.lng != null) {
        const vendorObj = {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [geoState.lng, geoState.lat]
            },
            properties: {
                timestamp: Date.now(),
                icon: 'star', //'circle',
                name: productState.name,
                description: productState.description,
                price: productState.price,
                details: productState.description,
                userId: productState.userId,
                image: productState.image
            }
        }
        // CALL TO MAP MARKER TABLE FOR ALL MARKER DATA
        // FROM USER PRODUCTS
        API.addProductMapMarker(vendorObj)
            .then(newGeoObj => {
                console.log('item added to marker list')
                console.log(newGeoObj);
            })
        // }

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
        // history.push('/')
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
            ...productState, image: file.secure_url
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
