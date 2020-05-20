import React, {useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import ProductDetail from "../../components/ProductDetail"
import "./style.css"
import API from "../../utils/API"



export default function DetailPage()  {
   
    // const [marketState,setMarketState] = useState([]);
    const [productState,setProductState] = useState([]);
    // const [vendorState,setVendorState] = useState([]);
 
    
    
    useEffect(() => {
        searchProducts();
    },[])


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
                <div className="body">

                    <h1>Products for Sale</h1>
                    
                    <ProductDetail products={productState} />

               
                    <button className="button">
                        <Link to="/listing" >temporary link to ListingPage</Link>
                    </button>
                </div>

            </div>
        )
    }
