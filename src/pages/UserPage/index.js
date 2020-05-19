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
import MapPage from '../MapPage'

export default function UserPage() {
    const params = useParams();
    const [singleProdSt, setSingleProdSt] = useState([])
    const [value, setValue] = useState(new Date());
    const [allProdState, setAllProdState] = useState([])
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
            console.log(userState.markets[0])

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
    // const getVendorsclick = event => {
    //     event.preventDefault();
    //     API.getUserFavVendors(params.id).then(res => {
    //         console.log(userState)
    //     })


    // }
    // const getMarketsClick = event => {
    //     event.preventDefault();
    //     API.getUserMarkets(params.id).then(res => {
    //         console.log(userState)
    //     })


    // }
    
    function onChange(nextValue) {
        setValue(nextValue);
      }

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
            <div className="section">
                <div className="box">
                    <h3 className="title">My Profile Page</h3>
                    {/* <div className="buttons is-centered">
                        <button onClick={getAllClick} className="button is-primary is-bold">All Info</button>
                        <button onClick={userProdClick} className="button is-link is bold">Products</button>
                        <button onClick={getVendorsclick} className="button is-info">Vendors</button>
                        <button onClick={getMarketsClick} className="button is-success">Markets</button>

                    </div> */}
                </div>
            </div>
            <div className="section">
                <div className="columns">
                    
                    <div className="column is-10 is-offset-1">
                        <div className="tile is-ancestor">
                            <div className="tile is-vertical is-12">
                                <div className="tile">
                                    <div className="tile is-parent is-vertical has-text-centered">
                                        {userState.products[0] === undefined?'':(<article className="tile is-12 is-child box">
                                            <p className="title is-5">My Products</p>
                                            <ul className="list">
                                        {/* see if you can throw a value on the text content and send the data to the api
                                        so that you don't have to use a form */}
                                                { userState.products.map((product) => (
                                                    <li contentEditable="true" key={product.id} className="list-item">
                                                        {product.name}  
                                                        <button name={product.id} onClick={userProdClick} className="button is-small is-info is-pulled-right">Info</button>
                                                        
                                                    </li>
                                                ))}
                                            </ul>
                                        </article>)}
                                        {userState.markets[0] === undefined?'':(<article className="tile is-12 is-child box">
                                            <p className="title is-5" >My Markets</p>
                                            <ul className="list">

                                                {userState.markets.map((market) => (
                                                    <li key={market.id} className="list-item">
                                                        {market.market_name}
                                                        <button className="button is-small is-info is-pulled-right">Info</button>

                                                    </li>
                                                ))}
                                            </ul>
                                        </article>)}
                                    </div>
                                    {userState.favorites[0] === undefined?'':( <div className="tile is-parent">
                                        <article className="tile is-child box">
                                            <p className="title is-5">My Favorite Sellers</p>
                                            <ul className="list">

                                                {userState.favorites.map((favorite) => (
                                                    <li key={favorite.id} className="list-item">
                                                           {favorite.first_name} {favorite.last_name} 
                                                           <Link to={`/vendor/${favorite.id}`}>
                                                        <button  className="button is-small is-info is-pulled-right">Info</button>
                                                            </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </article>
                                    </div>)}
                                </div>
                                <div className="tile is-parent">
                                    {userState.schedules[0] === undefined?'':(<article className="tile is-primary is-child box">
                                        <p className="title is-5">My schedules</p>
                                        <ul className="list">

                                            {userState.schedules.map((schedule) => (
                                                <li key={schedule.id} className="list-item">
                                                    {"At " + schedule.marketId + " on "}
                                                    <Moment format="MMM Do, YYYY">{schedule.open_time}</Moment>
                                                    <button className="button is-small is-info is-pulled-right">Info</button>

                                                </li>
                                            ))}
                                        </ul>
                                        {userState.schedules[0] !== undefined?(<Calendar onChange={onChange}
                                                    value={value}/>):''}
                                    </article>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

            </div>

            <div className="section">
                
                {singleProdSt? ( <ProductInfo refreshPage={refreshPage} product={singleProdSt} />):''}
               
            </div>
        </div>
       
    )
}



