import React, { useState, useEffect } from 'react'
import "./style.css"
import { useParams } from "react-router-dom"
import API from "../../utils/API"
import VendorDetail from "../../components/VendorDetail"
import ProductInfo from "../../components/ProductInfo"

export default function UserPage() {
    const params = useParams();
    const [singleProdSt, setSingleProdSt] = useState([])
    const [userState, setUserState] = useState({
        markets: [],
        products: [],
        favorites: [],
        schedules: []
    });

    useEffect(() => {
        API.getAllUserInfo(params.id).then(res => {
            setUserState({
                markets: res.data[0].markets,
                products: res.data[0].products,
                favorites: res.data[0].favorites,
                schedules: res.data[0].schedules
            })
            

        })

    }, [])


    const getAllClick = event => {
        event.preventDefault();
        API.getAllUserInfo(params.id).then(res => {
            console.log(res.data)
        })


    }
    const userProdClick = event => {
        event.preventDefault();
        console.log(userState)
        API.getProductbyId(event.target.name).then(res => {
            setSingleProdSt(res.data)
        })


    }
    const getVendorsclick = event => {
        event.preventDefault();
        API.getUserFavVendors(params.id).then(res => {
            console.log(userState)
        })


    }
    const getMarketsClick = event => {
        event.preventDefault();
        API.getUserMarkets(params.id).then(res => {
            console.log(userState)
        })


    }
    


    return (
        <div className="UserPage">
            <div className="section">
                <div className="box">
                    <h3 className="title">My Profile Page</h3>
                    <div className="buttons is-centered">
                        <button onClick={getAllClick} className="button is-primary is-bold">All Info</button>
                        <button onClick={userProdClick} className="button is-link is bold">Products</button>
                        <button onClick={getVendorsclick} className="button is-info">Vendors</button>
                        <button onClick={getMarketsClick} className="button is-success">Markets</button>

                    </div>
                </div>
            </div>
            <div className="section">
                <div className="columns">
                    
                    <div className="column is-10 is-offset-1">
                        <div className="tile is-ancestor">
                            <div className="tile is-vertical is-12">
                                <div className="tile">
                                    <div className="tile is-parent is-vertical">
                                        <article className="tile is-12 is-child box">
                                            <p className="title is-5">My Products</p>
                                            <ul className="list">

                                                {userState.products.map((product) => (
                                                    <li key={product.id} className="list-item">
                                                        {product.name}  
                                                        <button name={product.id} onClick={userProdClick} class="button is-small is-info is-pulled-right">Info</button>
                                                        
                                                    </li>
                                                ))}
                                            </ul>
                                        </article>
                                        <article className="tile is-12 is-child box">
                                            <p className="title is-5">My Markets</p>
                                            <ul className="list">

                                                {userState.markets.map((market) => (
                                                    <li key={market.id} className="list-item">
                                                        {market.market_id}
                                                        <button class="button is-small is-info is-pulled-right">Info</button>

                                                    </li>
                                                ))}
                                            </ul>
                                        </article>
                                    </div>
                                    <div className="tile is-parent">
                                        <article className="tile is-child box">
                                            <p className="title is-5">My Favorite Sellers</p>
                                            <ul className="list">

                                                {userState.favorites.map((favorite) => (
                                                    <li key={favorite.id} className="list-item">
                                                           {favorite.first_name} {favorite.last_name} 
                                                        <button  class="button is-small is-info is-pulled-right">Info</button>

                                                    </li>
                                                ))}
                                            </ul>
                                        </article>
                                    </div>
                                </div>
                                <div className="tile is-parent">
                                    <article className="tile is-primary is-child box">
                                        <p className="title is-5">My schedules</p>
                                        <ul className="list">

                                            {userState.schedules.map((schedule) => (
                                                <li key={schedule.id} className="list-item">
                                                    {schedule.open_time}
                                                    <button class="button is-small is-info is-pulled-right">Info</button>

                                                </li>
                                            ))}
                                        </ul>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

            </div>

            <div className="section">
                <div className="columns">
                <div className="column">
                {singleProdSt? ( <ProductInfo product={singleProdSt} />):''}
                </div>
                </div>
            </div>

        </div>

    )
}



