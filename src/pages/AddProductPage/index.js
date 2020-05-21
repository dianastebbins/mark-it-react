import React, { useState, useEffect } from 'react'

import { toast } from "bulma-toast";


import "./style.css"
import API from "../../utils/API"



export default function AddProductPage() {
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


    useEffect(() => {
        API.readSessions().then(res => {
            const ID = res.data.user.id
            setProductState({
                userId: ID
            })

            navigator.geolocation.getCurrentPosition(position => {
                setGeoState({
                    lng: position.coords.longitude,
                    lat: position.coords.latitude
                })
            })


        })
        //  the component runs on page load   

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
                name: productState.name,
                description: productState.description,
                price: productState.price,
                details: productState.description,
                userId: productState.userId,
                image: productState.image,
                userId: productState.userId
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

            if (newProduct.data.name) {
                // let user know product was created
                toast({
                    message: newProduct.data.name + " added to products",
                    type: "is-info",
                    position: "center",
                    duration: 4000,
                    dismissible: true
                });

                setProductState({
                    name: '',
                    description: '',
                    price: '',
                    details: '',
                    userId: '',
                    image: ''
                })
            } else {
                // let user know what went wrong
                toast({
                    message: newProduct.data,
                    type: "is-danger",
                    position: "center",
                    duration: 4000,
                    dismissible: true
                });
            }
        })


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
            <section id="prodHero" class="hero is-info is-bold">
                <div class="hero-body">
                    <div class="addProd container">
                        <h1 class="title">
                            Add a Product
                        </h1>

                    </div>
                </div>
            </section>

            <div className="container addProduct">

                <div className="section mainSection">
                    <div className="box formbox">
                        <form>
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


                                {productState.image ? (
                                    <div>
                                        <img alt="product" src={productState.image}></img>
                                    </div>
                                ) : ""}
                                <div className="field">
                                    <div className="control">
                                        <label className="checkbox">
                                            <input required type="checkbox" />
                                            I agree to the <a href="https://gist.github.com/zahraaliaghazadeh/7f5bbde80804ca1ae0cb6f9ed1fbc540">terms and conditions</a>
                                        </label>
                                    </div>
                                </div>

                                {/* TODO: units input should be added later */}
                                <button className="button is-link" onClick={handleFormSubmit}>Add Product!</button>

                            </div>


                            {/* </div> */}
                        </form>
                    </div>
                </div>

            </div>

        </div >

    )
}
