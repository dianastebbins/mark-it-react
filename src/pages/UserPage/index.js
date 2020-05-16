import React, { useState, useEffect } from 'react'
import "./style.css"
import { useParams } from "react-router-dom"
import API from "../../utils/API"
import VendorDetail from "../../components/VendorDetail"


export default function UserPage() {
    const params = useParams();
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

        console.log(userState)
    }, [])


    const getAllClick = event => {
        event.preventDefault();
        API.getAllUserInfo(params.id).then(res => {
            console.log(res.data)
        })


    }
    const userProdClick = event => {
        event.preventDefault();
        API.getUserProducts(params.id).then(res => {
            console.log(res.data)
        })


    }
    const getVendorsclick = event => {
        event.preventDefault();
        API.getUserFavVendors(params.id).then(res => {
            console.log(res.data)
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
            {/* <VendorDetail vendors={userState.favorites} /> */}
            <div className="section">
                <div className="box">
                    <h3 className="title">Button Farm</h3>
                    <div className="buttons is-centered">
                        <button onClick={getAllClick} className="button is-primary is-bold">All Info</button>
                        <button onClick={userProdClick} className="button is-link is bold">Products</button>
                        <button onClick={getVendorsclick} className="button is-info">Vendors</button>
                        <button onClick={getMarketsClick} className="button is-success">Markets</button>

                    </div>
                </div>
            </div>
            <div className="section">

                <div className="columns is-centered">

                    <div className="column">
                        <div class="tile is-ancestor">
                            <div class="tile is-vertical is-8">
                                <div class="tile">
                                    <div class="tile is-parent is-vertical">
                                        <article class="tile is-child box">
                                            <p class="title is-5">My Products</p>
                                            <ul className="list">

                                                {userState.products.map((product) => (
                                                    <li className="list-item">
                                                        {product.name}
                                                    </li>
                                                ))}
                                            </ul>
                                        </article>
                                        <article class="tile is-child box">
                                            <p class="title is-5">My Markets</p>
                                            <ul className="list">

                                                {userState.markets.map((market) => (
                                                    <li className="list-item">
                                                        {market.market_id}
                                                    </li>
                                                ))}
                                            </ul>
                                        </article>
                                    </div>
                                    <div class="tile is-parent">
                                        <article class="tile is-child box">
                                            <p class="title is-5">My Favorite Sellers</p>
                                            <ul className="list">

                                                {userState.favorites.map((favorite) => (
                                                    <li className="list-item">
                                                        {favorite.last_name}
                                                    </li>
                                                ))}
                                            </ul>
                                        </article>
                                    </div>
                                </div>
                                <div class="tile is-parent is-primary">
                                    <article class="tile is-child box">
                                        <p class="title is-5">My schedules</p>
                                        <ul className="list">

                                            {userState.schedules.map((schedule) => (
                                                <li className="list-item">
                                                    {schedule.open_time}
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
            {/* <VendorDetail vendors={userState.favorites} /> */}
        </div>

    )
}



