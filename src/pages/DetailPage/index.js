import React, { useState, useEffect } from 'react'
import ProductDetail from "../../components/ProductDetail"
import "./style.css"
import API from "../../utils/API"

export default function DetailPage() {
    const [productState, setProductState] = useState([]);

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

    return (
        <div className="DetailPage">
            <section className="hero is-bold">
                <div className="hero-body color-change-3x">
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
