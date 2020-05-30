import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"
import "./style.css"
import API from "../../utils/API"
import _ from 'lodash'
import { toast } from "bulma-toast"
import BrandLogo from "./../../assets/images/brandlogo.png"


export default function VendorProducts(props) {
    const history = useHistory()
    const params = useParams();
    const [vendorState, setVendorState] = useState({
        seller: '',
        products: ''
    });


    useEffect(() => {
        API.getUserProducts(params.id)
            .then((res) =>
                setVendorState({
                    seller: res.data[0],
                    products: res.data[0].products,

                })

            )
            .catch((err) => console.log(err));
    }, [])

    const handleClickEvent = () => {
        API.addVendorToFavs(props.currentUser.id, vendorState.seller.id)
            .then((newFav) => {
                // let user know favorite is complete
                toast({
                    message: vendorState.seller.vendor_name + " added to your favorite vendor list",
                    type: "is-info",
                    position: "center",
                    duration: 4000,
                    dismissible: true
                });
            }
            ).catch((err) => console.log(err))
    }

    console.log(vendorState.seller)

    return (

        <div className="VendorProducts">

            <section className="hero is-info is-bold">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            {vendorState.seller.first_name} {vendorState.seller.last_name}
                        </h1>

                    </div>
                </div>
            </section>

            <div className="section">
                <div className="container">
                    <div className="columns is-multiline is-centered">

                        <div className="column">
                            <div className="card ">
                                <header className="card-header">
                                    <p className="card-header-title">Get in touch with {vendorState.seller.first_name} </p>
                                    {props.currentUser ? <button onClick={handleClickEvent} className="button is-small is-info">Mark-It!</button> : ''}

                                </header>

                                <div className="card-content">

                                    <nav className="level">

                                        <div className="level-item has-text-centered">
                                            <div>
                                                <p className="heading">DBA</p>
                                                <p className="title">{vendorState.seller.vendor_name}</p>
                                            </div>
                                        </div>
                                        <div className="level-item has-text-centered">
                                            <div>
                                                <p className="heading">Email</p>
                                                <p className="title">{vendorState.seller.vendor_email}</p>
                                            </div>
                                        </div>
                                        <div className="level-item has-text-centered">
                                            <div>
                                                <p className="heading">Phone</p>
                                                <p className="title">{vendorState.seller.vendor_phone}</p>
                                            </div>
                                        </div>

                                    </nav>



                                </div>
                            </div>
                        </div>







                    </div>

                </div>
            </div>
            <div className="favven section">
                <div className="container">
                    <div className="columns is-multiline is-centered">

                        {vendorState.products ? vendorState.products.map((product) => (
                            <div className="column is-full-mobile is-half-tablet is-one-third-desktop is-one-quarter-widescreen is-one-fifth-fullhd">
                                <div className="card has-background-light">
                                    <div className="card-image">
                                        <figure className="image is-4by3">{product.image ?
                                            <img
                                                src={product.image}
                                                alt="the item for sale"
                                            /> : <img className="logoImageAdd" src={BrandLogo} alt="Mark-It Logo" />}


                                        </figure>
                                    </div>

                                    <header className="card-header">
                                        <p className="card-header-title">{product.name} </p>

                                    </header>

                                    <div className="list is-hoverable">
                                        <p className="list-item">{product.description}</p>
                                        <p className="list-item">{product.details}</p>
                                        <p className="list-item">{product.price}</p>

                                    </div>
                                </div>
                            </div>

                        )) : "loading"}

                    </div>

                </div>
            </div>
        </div>
    )
}
