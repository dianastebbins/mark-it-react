import React, { useState, useEffect } from 'react'
import "./style.css"
import { useParams } from "react-router-dom"
import API from "../../utils/API"
import VendorDetail from "../../components/VendorDetail"


export default function UserPage() {
    const params = useParams();
    const [userState, setUserState] = useState([]);

    useEffect(() => {
        
            console.log(userState)
        
    },[userState])


    const getAllClick = event => {
        event.preventDefault();
        API.getAllUserInfo(params.id).then(res => {
            setUserState(res.data)
        })
        
    
      }
    const userProdClick = event => {
        event.preventDefault();
        API.getUserProducts(params.id).then(res => {
            setUserState(res.data)
        })
        
    
      }
    const getVendorsclick = event => {
        event.preventDefault();
        API.getUserFavVendors(params.id).then(res => {
            setUserState(res.data)
        })
        
    
      }
    const getMarketsClick = event => {
        event.preventDefault();
        API.getUserMarkets(params.id).then(res => {
            setUserState(res.data)
        })
        
    
      }
    
      

    return (
        <div>
            {/* <VendorDetail vendors={userState.favorites} /> */}
            <div className="section">
                <div className="box">
                    <h3 className="title">Button Farm</h3>
                    <div className="buttons is-centered">
                        <button onClick={getAllClick} className="button is-primary is-bold">All Info</button>
                        <button onClick={userProdClick}className="button is-link is bold">Products</button>
                        <button onClick={getVendorsclick}className="button is-info">Vendors</button>
                        <button onClick={getMarketsClick}className="button is-success">Markets</button>
                        
                    </div>
                </div>
            </div>
             {/* <VendorDetail vendors={userState.favorites} /> */}
        </div>

    )
}



