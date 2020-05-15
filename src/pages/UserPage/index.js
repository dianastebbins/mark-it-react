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
                        <div className="tile is-ancestor">
                            <div className="tile is-vertical is-8">
                                <div className="tile">
                                    <div className="tile is-parent is-vertical">
                                        <article className="tile is-child box">
                                            <p className="title is-5">My Products</p>
                                            <ul className="list">

                                                {userState.products.map((product) => (
                                                    <li key={product.id} className="list-item">
                                                        {product.name}
                                                    </li>
                                                ))}
                                            </ul>
                                        </article>
                                        <article className="tile is-child box">
                                            <p className="title is-5">My Markets</p>
                                            <ul className="list">

                                                {userState.markets.map((market) => (
                                                    <li key={market.id} className="list-item">
                                                        {market.market_id}
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
                                                        {favorite.last_name}
                                                    </li>
                                                ))}
                                            </ul>
                                        </article>
                                    </div>
                                </div>
                                <div className="tile is-parent is-primary">
                                    <article className="tile is-child box">
                                        <p className="title is-5">My schedules</p>
                                        <ul className="list">

                                            {userState.schedules.map((schedule) => (
                                                <li key={schedule.id} className="list-item">
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



