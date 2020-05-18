import React, {useState,useEffect} from 'react'
import { useParams, useHistory } from "react-router-dom"
import "./style.css"
import API from "../../utils/API"
import _ from 'lodash'

export default function VendorProducts()  {
    const history = useHistory()
    const params = useParams();
    const [vendorState,setVendorState] = useState({
        seller: '',
        products: ''
    });
 
    
    useEffect(() => {
        API.getUserProducts(params.id)
            .then((res) => 
                setVendorState({
                    seller: res.data[0],
                    products: res.data[0].products
                })
                
            )
            .catch((err) => console.log(err));
    },[])

    const handleClickEvent = () => {
        API.addVendorToFavs(params.id)
        .then((res) =>
            history.push('/')
        ).catch((err) => console.log(err))
    }
    
    console.log(vendorState.products)
    
        return (
            <div>

        <div className="section">
            <div className="container">
                <div className="columns is-multiline is-centered">

                    <div className="column">
                        <div className="card  has-background-light">
                            <header className="card-header">
                                <p className="card-header-title">{vendorState.seller.first_name} </p>
                                <p className="card-header-title">{vendorState.seller.last_name} </p>
                                <button onClick={handleClickEvent} className="button">Add Vendor to Favorites</button>
                            </header>

                            <div className="card-content">
                                <div className="list is-hoverable">
                                    <p className="list-item">{vendorState.seller.vendor_name}</p>
                                    <p className="list-item">{vendorState.seller.vendor_email}</p>
                                    <p className="list-item">{vendorState.seller.vendor_phone}</p>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>

            </div>
        </div>
        <div className="section">
            <div className="container">
                <div className="columns is-multiline is-centered">

                     {vendorState.products ? vendorState.products.map((product) => ( 
                    <div className="column">
                        <div className="card  has-background-light">
                            <header className="card-header">
                                <p className="card-header-title">{product.name} </p>

                            </header>

                            <div className="card-content">
                                <div class="list is-hoverable">
                                    <p className="list-item">{product.description}</p>
                                    <p className="list-item">{product.details}</p>
                                    <p className="list-item">{product.price}</p>
                                    <p className="list-item"><img alt="product" src={product.img}/></p>

                                </div>
                            </div>
                        </div>
                    </div>

                     )) :"loading"}

                </div>

            </div>
        </div>
    </div>
        )
    }
