import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
import { useParams } from "react-router-dom"
import API from "../../utils/API"
// import VendorDetail from "../../components/VendorDetail"
import ProductInfo from "../../components/ProductInfo"
// import Calendar from 'react-calendar';
import TileContent from 'react-calendar';
// import 'react-calendar/dist/Calendar.css'
import Moment from 'react-moment';
// import _ from 'lodash'
import BrandLogo from "./../../assets/images/brandlogo.png"


export default function UserPage() {
    const params = useParams();
    const [singleProdSt, setSingleProdSt] = useState([])
    // const [value, setValue] = useState([]);
    const [schedState, setSchedState] = useState([])
    const [userState, setUserState] = useState({
        markets: [],
        products: [],
        favorites: [],
        schedules: []
    });

    useEffect(() => {
        if (params.id) {
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
        } else {
            console.log("loading")
        }
        // eslint-disable-next-line
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
    const isDateOnSchedule = (calendarDate) => {
        for (let i = 0; i < schedState.length; i++) {
            const schedule = schedState[i];
            const scheduleDate = new Date(schedule.open_time)
            if (calendarDate.getYear() === scheduleDate.getYear() && calendarDate.getMonth() === scheduleDate.getMonth() && calendarDate.getDate() === scheduleDate.getDate()) {
                return schedState[i].market.market_name;
            }
        }
        return '';
    }
    console.log(userState.markets[0])
    return (
        <div className="UserPage">
            <section className="hero is-bold">
                <div className="hero-body color-change-3x">
                    <div className="container">
                        <h1 className="title">
                            Profile
                        </h1>

                    </div>
                </div>
            </section>
            {userState.products[0] === undefined && userState.markets[0] === undefined && userState.favorites[0] === undefined && userState.schedules[0] === undefined ? (
                <div>
                    <div className="section">
                        <div className="container">
                            <div className="box logobox">
                                <figure className="image is-1x1">
                                    <img alt="Mark-It Logo" src={BrandLogo} />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div id="topSectionUser" className="section">

                        {/* <div className="column is-12 is-offset-2"> */}
                        <div className="container">

                            <div className="tile is-ancestor is-12">
                                <div className="tile is-vertical is-12">
                                    <div className="tile">
                                        <div className="tile is-parent">
                                            <article className="tile is-child notification is-dark box">
                                                <p className="newuser title">Welcome To Mark-It!</p>
                                                {/* <p className="subtitle">Subtitle</p> */}
                                                <div className="content">
                                                    <p>To get started, we suggest you check out one of these options:</p>
                                                </div>
                                            </article>
                                        </div>
                                        <div className="tile is-8 is-vertical">
                                            <div className="tile">
                                                <div className="tile is-parent is-full-mobile">
                                                    <article id="orangebox" className="tile is-child box">
                                                        <p className="newuser title">Find Something Amazing</p>
                                                        <div className="content">
                                                            <p>Head over to our "Items for Sale" section to see what artisans in your area have to offer</p>
                                                            <Link to={`/detail`}>
                                                                <button className="button is-small is-info">Go Now!</button>
                                                            </Link>
                                                        </div>
                                                    </article>
                                                </div>
                                                <div className="tile is-parent">
                                                    <article id="greenbox" className="tile is-child notification is-bold box">
                                                        <p className="newuser title">List Something Amazing</p>
                                                        <div className="content">
                                                            <p>Artisan? Maker? Baker? Creator? List something to share with the folks in you neighborhood</p>
                                                            <Link to={`/add-product`}>
                                                                <button className="button is-small is-info">Well, go on then!</button>
                                                            </Link>
                                                        </div>
                                                    </article>
                                                </div>
                                            </div>
                                            <div className="tile is-parent">
                                                <article id="purplebox" className="tile is-child notification  box">
                                                    <p className="newuser title">Explore your Neighborhood</p>
                                                    <div className="content">
                                                        <p>Head over to the map to find markets and artisans near you</p>
                                                        <Link to={`/map`}>
                                                            <button className="button is-small is-info">Off you go!</button>
                                                        </Link>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* </div> */}
                            </div>
                        </div>
                    </div>
            ) :
                (<div id="bottomSectionUser" className="section">
                        <div className="columns">

                            <div className="column is-10 is-offset-1">
                                <div className="tile is-ancestor">
                                    <div className="tile is-vertical is-12">
                                        <div className="tile">
                                            <div className="tile is-parent is-vertical has-text-centered">
                                                {userState.products[0] === undefined ? '' : 
                                                (<article className="tile is-12 is-child card">
                                                    <header className="card-header">
                                                    <p className="card-header-title title userTitle">My Products</p>

                                                    </header>
                                                    <div className="card-content">
                                                    {/* <div className="card-content"> */}
                                                    <ul className="list">
                                                        
                                                        {userState.products.map((product) => (
                                                            <li key={product.id} className="list-item">
                                                                {/* eslint-disable-next-line */}
                                                                <a name={product.id} data="product" onClick={handleDeleteBtnProd} className="delete is-pulled-left">&nbsp</a>
                                                                {product.name}
                                                                <button name={product.id} onClick={userProdClick} className="button is-small is-info is-pulled-right">Edit</button>

                                                            </li>
                                                        ))}
                                                    </ul>
                                                    </div>
                                                    {/* </div> */}
                                                </article>)}
                                                {userState.markets[0] === undefined ? '' : (<article className="tile is-12 is-child card">
                                                <header className="card-header">
                                                    <p className="card-header-title title userTitle">My Markets</p>

                                                    </header>
                                                    <div className="card-content">
                                                    <ul className="list">

                                                        {userState.markets.map((market) => (
                                                            <li key={market.id} className="list-item">
                                                                {/* eslint-disable-next-line */}
                                                                <a name={market.id} data="market" onClick={handleDeleteBtnMarket} className="delete is-pulled-left">&nbsp</a>
                                                                {market.market_name ? market.market_name:''}
                                                                {/* <button className="button is-small is-info is-pulled-right">Info</button> */}

                                                            </li>
                                                        ))}
                                                    </ul>
                                                    </div>
                                                </article>)}
                                            </div>
                                            {userState.favorites[0] === undefined ? '' : (<div className="tile is-parent has-text-centered">
                                                <article className="tile is-child card">
                                                <header className="card-header">
                                                    <p className="card-header-title title userTitle">My Favorite Sellers</p>

                                                    </header>
                                                    <div className="card-content">
                                                    <ul className="list">

                                                        {userState.favorites.map((favorite) => (
                                                            <li key={favorite.id} className="list-item">
                                                                {/* eslint-disable-next-line */}
                                                                <a name={favorite.id} data="favorite" onClick={handleDeleteBtnFav} className="delete is-pulled-left">&nbsp</a>
                                                                {favorite.first_name} {favorite.last_name}
                                                                <Link to={`/favvendor/${favorite.id}`}>
                                                                    <button className="button is-small is-info is-pulled-right">Info</button>
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    </div>
                                                </article>
                                            </div>)}
                                        </div>
                                        <div className="tile is-parent has-text-centered">
                                            {userState.schedules[0] === undefined ? '' : (<article className="tile is-primary is-child card">
                                            <header className="card-header">
                                                    <p className="card-header-title title userTitle">My Schedules</p>

                                                    </header>
                                                    <div className="card-content">
                                                <ul className="list">

                                                    {schedState.map((schedule) => (
                                                        <li key={schedule.id} className="list-item">
                                                            {/* eslint-disable-next-line */}
                                                            <a name={schedule.id} data="schedule" onClick={handleDeleteBtnSch} className="delete is-pulled-left">&nbsp</a>
                                                            {"At " + schedule.market.market_name + " on "}
                                                            <Moment format="MMM Do, YYYY">{schedule.open_time}</Moment>
                                                            {/* <button className="button is-small is-info is-pulled-right">Info</button> */}
                                                        </li>
                                                    ))}
                                                </ul>
                                                </div>
                                                {/* original calendar
                                        {userState.schedules[0] !== undefined ? (<Calendar
                                            value={[newArr[0], newArr[newArr.length - 1]]} />) : ''} */}
                                                <div className="columns">
                                                    <div className="column">
                                                <div className="container">
                                                
                                                <div id="calendarBox" className="box">
                                                {userState.schedules[0] !== undefined ? (<TileContent
                                                    value={newArr[0]} // s/b "today"
                                                    tileContent={({ date, view }) => view === 'month' ? <p>{isDateOnSchedule(date)}</p> : null} />) : ''}
                                                {/* tileContent={ ({ date, view }) => view === 'month' && isDateOnSchedule(date)  ? <p>{isDateOnSchedule(date)}</p> : null } />) : ''} */}
                                                </div>
                                                </div>
                                                </div>
                                                </div>
                                            </article>)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>)}

                    <div id="productEdit" className="section">

                        {singleProdSt ? (<ProductInfo refreshPage={refreshPage} product={singleProdSt} />) : ''}

                    </div>
                </div>

            )
}



