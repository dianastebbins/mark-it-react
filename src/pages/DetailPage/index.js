import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import ProductDetail from "../../components/ProductDetail"
// import ProductDetail2 from "../../components/ProductDetail2"
import "./style.css"
import API from "../../utils/API"



export default function DetailPage() {

    // const [marketState,setMarketState] = useState([]);
    const [productState, setProductState] = useState([]);
    // const [vendorState,setVendorState] = useState([]);



    useEffect(() => {
        searchProducts();
    }, [])


    const searchProducts = () => {
        API.getProducts()
            .then((res) =>
                setProductState(res.data)
            )
            .catch((err) => console.log(err));
    };
    // const searchVendors = () => {
    //     API.getAllUsers()
    //         .then((res) => 
    //             setVendorState(res.data)
    //         )
    //         .catch((err) => console.log(err));
    // };







    return (
        <div className="DetailPage">
            <section className="hero is-info is-bold">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            Available Items
                        </h1>
                     
                    </div>
                </div>
            </section>


            {/* <ProductDetail products={productState} /> */}
            <ProductDetail products={productState} />




        </div>
    )
}
