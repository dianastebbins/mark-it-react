import React, {useState, useEffect} from 'react'
import "./style.css"
import {useParams} from "react-router-dom"
import API from "../../utils/API"
import ProductDetailDetail from "../../components/ProductInfo"

export default function ProductPage() {
    const params = useParams();
    const [prodState, setProdState]=useState([]);
    
    
    useEffect(()=>{
        API.getUserProducts(params.id).then(res=>{
        //    console.log(res.data[0].products)
            setProdState(res.data[0].products)
        })
    })

    


    return (
        <div>
            <ProductDetailDetail products={prodState} />
            
        </div>
    )
}
