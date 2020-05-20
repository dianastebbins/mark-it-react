import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
import { useParams } from "react-router-dom"
import API from "../../utils/API"
import VendorDetail from "../../components/VendorDetail"
import ProductInfo from "../../components/ProductInfo"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import Moment from 'react-moment';
import _ from 'lodash'

export default function UserPage() {
    const params = useParams();
    const [singleProdSt, setSingleProdSt] = useState([])
    const [value, setValue] = useState([]);
    const [schedState, setSchedState] = useState([])
    const [userState, setUserState] = useState({
        markets: [],
        products: [],
        favorites: [],
        schedules: []
    });

    useEffect(() => {
        API.getAllUserInfo(params.id).then(res => {
            if (res.data) {
                setUserState({
                    markets: res.data[0].markets,
                    products: res.data[0].products,
                    favorites: res.data[0].favorites,
                    schedules: res.data[0].schedules,
                    dates: [...res.data[0].schedules]
                });
                API.getUserSchedules(params.id).then(res => {
                    setSchedState(res.data[0].schedules)
                });
            }
        })
    }, [])

    const newArr = []
    if (userState.dates) {
        userState.dates.forEach(element => {
            newArr.push(new Date(element.open_time))
        })
    }

    const userProdClick = event => {
        event.preventDefault();
        API.getProductbyId(event.target.name).then(res => {
            setSingleProdSt(res.data)
        })
    }
    const handleDeleteBtnSch = event => {
        event.preventDefault();
        API.deleteSchedule(event.target.name).then(res => {
            refreshPage();
        })
    }
    const handleDeleteBtnFav = event => {
        event.preventDefault();
        API.deleteFavoriteVendor(params.id, event.target.name).then(res => {
            refreshPage();
        })
    }
    const handleDeleteBtnMarket = event => {
        event.preventDefault();
        API.deleteMarket(event.target.name).then(res => {
            refreshPage();
        })
    }
    const handleDeleteBtnProd = event => {
        event.preventDefault();
        API.deleteProduct(event.target.name).then(res => {
            refreshPage();
        })
    }
    // function onChange(nextValue) {
    //     setValue(nextValue);
    // }
    const refreshPage = () => {
        window.location.reload(false);
    }

    // const getMarketInfo = (marketId) => {
    //     API.searchMarket(marketId)
    //     .then((dbMarkets) => {
    //         console.log(dbMarkets)
    //         return (
    //             <li>

    //             </li>
    //         )
    //     })
    // }

    return (
        <div className="UserPage">
           <section class="hero is-success is-bold">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title">
                            Profile
                        </h1>
                     
                    </div>
                </div>
                </section>
            <div className="section">
                <div className="columns">

                    <div className="column is-10 is-offset-1">
                        <div className="tile is-ancestor">
                            <div className="tile is-vertical is-12">
                                <div className="tile">
                                    <div className="tile is-parent is-vertical has-text-centered">
                                        {userState.products[0] === undefined ? '' : (<article className="tile is-12 is-child box">
                                            <p className="title is-5">My Products</p>
                                            <ul className="list">
                                                {/* see if you can throw a value on the text content and send the data to the api
                                        so that you don't have to use a form */}
                                                {userState.products.map((product) => (
                                                    <li key={product.id} className="list-item">
                                                        {/* eslint-disable-next-line */}
                                                        <a name={product.id} data="product" onClick={handleDeleteBtnProd} className="delete">&nbsp</a>
                                                        {product.name}
                                                        <button name={product.id} onClick={userProdClick} className="button is-small is-info is-pulled-right">Info</button>

                                                    </li>
                                                ))}
                                            </ul>
                                        </article>)}
                                        {userState.markets[0] === undefined ? '' : (<article className="tile is-12 is-child box">
                                            <p className="title is-5" >My Markets</p>
                                            <ul className="list">

                                                {userState.markets.map((market) => (
                                                    <li key={market.id} className="list-item">
                                                        {/* eslint-disable-next-line */}
                                                        <a name={market.id} data="market" onClick={handleDeleteBtnMarket} class="delete">&nbsp</a>
                                                        {market.market_name}
                                                        <button className="button is-small is-info is-pulled-right">Info</button>

                                                    </li>
                                                ))}
                                            </ul>
                                        </article>)}
                                    </div>
                                    {userState.favorites[0] === undefined ? '' : (<div className="tile is-parent">
                                        <article className="tile is-child box">
                                            <p className="title is-5">My Favorite Sellers</p>
                                            <ul className="list">

                                                {userState.favorites.map((favorite) => (
                                                    <li key={favorite.id} className="list-item">
                                                        {/* eslint-disable-next-line */}
                                                        <a name={favorite.id} data="favorite" onClick={handleDeleteBtnFav} className="delete">&nbsp</a>
                                                        {favorite.first_name} {favorite.last_name}
                                                        <Link to={`/favvendor/${favorite.id}`}>
                                                            <button className="button is-small is-info is-pulled-right">Info</button>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </article>
                                    </div>)}
                                </div>
                                <div className="tile is-parent">
                                    {userState.schedules[0] === undefined ? '' : (<article className="tile is-primary is-child box">
                                        <p className="title is-5">My schedules</p>
                                        <ul className="list">

                                            {schedState.map((schedule) => (
                                                <li key={schedule.id} className="list-item">
                                                    {/* eslint-disable-next-line */}
                                                    <a name={schedule.id} data="schedule" onClick={handleDeleteBtnSch} className="delete">&nbsp</a>
                                                    {"At " + schedule.market.market_name + " on "}
                                                    <Moment format="MMM Do, YYYY">{schedule.open_time}</Moment>
                                                    <button className="button is-small is-info is-pulled-right">Info</button>
                                                </li>
                                            ))}
                                        </ul>
                                        {userState.schedules[0] !== undefined ? (<Calendar
                                            value={[newArr[0], newArr[newArr.length - 1]]} />) : ''}
                                    </article>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div className="section">

                {singleProdSt ? (<ProductInfo refreshPage={refreshPage} product={singleProdSt} />) : ''}

            </div>
        </div>

    )
}



