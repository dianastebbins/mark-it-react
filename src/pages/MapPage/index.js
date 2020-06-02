import React from 'react'
import mapboxgl from 'mapbox-gl';
import "./style.css"
import API from "../../utils/API";
import MarketArr from "../../components/MarketArr"
import { toast } from "bulma-toast";

import MapCard from "./MapCard";
import displayMap from "./displayMap"
import SearchForm from "../../components/SearchForm"
mapboxgl.accessToken = 'pk.eyJ1IjoidGhlLW1lZGl1bS1wbGFjZSIsImEiOiJja2EwMHcxOWwwa2ZmM2hvMG9nNHhoZXdrIn0.UBg5PKfAeHOcP_xn2SEkTw';

class MapPage extends React.Component {
    state = {
        lng: null,
        lat: null,
        zoom: '',
        search: '',
        marketname: [],
        id: [],
        marketArrState: [],
        active: false
    }


    componentDidMount() {
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({
                lng: position.coords.longitude,
                lat: position.coords.latitude
            })
            this.getUserLocMarks(position.coords.latitude, position.coords.longitude);
        })
    };



    // =====================================
    // SET MARKET POINT FOR USER ON MAP LOAD
    // =====================================
    getUserLocMarks = () => {
        API.searchLatLong(this.state.lat, this.state.lng)
            .then((data) => {

                const idArr = []
                const nameArr = []

                data.data.results.forEach((market) => {
                    nameArr.push(market.marketname)
                    idArr.push(market.id)
                });
                this.setState({
                    marketname: [...nameArr],
                    id: [...idArr]
                })
                // console.log(data.data.results);
                let counter = 0;
                data.data.results.forEach(market => {
                    this.getDetails(market.id, counter);
                    counter++;

                })
                setTimeout(() => {
                    displayMap(MarketArr)

                }, 1000);
            })
    }



    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.getResults(this.state.search);
    };

    getDetails = (query, count) => {
        if (query === "Error") {
            console.log("it's an error");
        }

        API.searchMarket(query)
            .then((data) => {

                const newMarketObj = {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point'
                    },
                    'properties': {
                        'title': 'awesome spot',
                        'icon': 'circle'
                    }
                };
                const lat = parseFloat(data.data.marketdetails.GoogleLink.split('=').pop().split('%')[0])
                const long = parseFloat("-" + (data.data.marketdetails.GoogleLink.split('%20-').pop().split('%')[0]))

                const coords = [long, lat];


                // GET LAT AND LONG FROM data.marketdetails.GoogleLink 
                // AND MAKE ARRAY [long,lat]
                // console.log(data.marketdetails.GoogleLInk.split('-'))

                // ADD MARKET DETAILS TO GEOJSON OBJECT newMarketObj
                newMarketObj.geometry.coordinates = coords;
                newMarketObj.properties.products = data.data.marketdetails.Products;
                newMarketObj.properties.schedule = data.data.marketdetails.Schedule;
                newMarketObj.properties.address = data.data.marketdetails.Address;
                newMarketObj.properties.googleLink = data.data.marketdetails.GoogleLink;
                newMarketObj.properties.name = this.state.marketname[count];
                newMarketObj.properties.USDA_id = this.state.id[count];
                MarketArr.push(newMarketObj);
                this.setState({
                    marketArrState: [...MarketArr]
                })
            })
    };


    getResults = (zip) => {

        // CLEAR MarketArr BEFORE NEW SEARCH
        MarketArr.splice(0, MarketArr.length);

        // =======================================
        // FIRST AJAX REQUEST FOR MARKET NAME & ID
        // =======================================
        API.search(zip)
            .then((data) => {

                // LOOP THROUGH ARRAY OF MARKET IDS AND NAMES
                // AND RUN getDetails FOR EACH ENTRY - 
                // THIS RUNS THE SECOND AJAX REQUEST
                const nameArr = []
                const idArr = []
                if (!data.data.results) {
                    return console.log('no results');
                }

                data.data.results.forEach((market) => {
                    nameArr.push(market.marketname)
                    idArr.push(market.id)
                });
                this.setState({
                    marketname: [...nameArr],
                    id: [...idArr]
                })
                // console.log(this.state.marketname, "-------", this.state.id)
                let counter = 0
                data.data.results.forEach(market => {
                    this.getDetails(market.id, counter);
                    counter++;
                });

            }).then(() => {
                //FIXME: TIMEOUT CURRENTLY SET TO GIVE ARRAY TIME TO POPULATE
                //FIXME: KINDA HACKY RIGHT NOW, NEED TO FIX LATER
                setTimeout(function () {

                    displayMap(MarketArr);
                }, 1000);
            });

    }

    handleMarketSaveClick = (marketDetails) => {

        // console.log(marketDetails)
        API.addFavMarkets(marketDetails)
            .then(newMarket => {
                // let user know save is complete
                toast({
                    message: newMarket.data.market_name + " added to your favorite market list",
                    type: "is-info",
                    position: "center",
                    duration: 4000,
                    dismissible: true
                });
                return console.log(newMarket);
            })
            .catch(err => console.log(err))
    }

    handleButtonClick = () => {
        !this.state.active ? this.setState({ active: true }) : this.setState({ active: false })
        // console.log(this.state.active)
    }

    render() {
        return (
            <div className="MapPage">
                <section className="hero is-bold">
                    <div className="hero-body color-change-3x">
                        <div className="container">
                            <h1 className="title">
                                Find Markets and Artisans
                            </h1>

                        </div>
                    </div>
                </section>
                <div className="section">
                    <div className="Maps">
                        <div className="mapCards hideMe" id="overflow-fix">
                            {(this.state.marketArrState.length < 1) ?
                                <h1>Markets Loading...</h1> :



                                this.state.marketArrState.map((market, index) => {
                                    return (
                                        <div>
                                            <MapCard
                                                name={market.properties.name.substr(4)}
                                                distance={market.properties.name.slice(0, 4)}
                                                products={market.properties.products}
                                                schedule={market.properties.schedule.slice(0, -16)}
                                                address={market.properties.address}
                                                key={index}
                                                USDA_id={market.properties.USDA_id}
                                                handleMarketSaveClick={this.handleMarketSaveClick}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div style={{ height: "80vh", width: "65vw" }} className="MapContainer" id="map" />
                    </div>

                </div>


                <div className="section">

                    <div className={this.state.active ? "modal is-active" : "modal"}>
                        <div className="modal-background"></div>
                        <div className="modal-card">
                            <header className="modal-card-head">
                                <p className="modal-card-title">Markets Near Me</p>
                                <button className="delete" aria-label="close" onClick={this.handleButtonClick}></button>
                            </header>
                            <section className="modal-card-body">
                                <div className="mapCards" id="overflow-fix">
                                    {(this.state.marketArrState.length < 1) ?
                                        <h1>Markets Loading...</h1> :



                                        this.state.marketArrState.map((market, index) => {

                                            return (
                                                <div>
                                                    <MapCard
                                                        name={market.properties.name.substr(4)}
                                                        distance={market.properties.name.slice(0, 4)}
                                                        products={market.properties.products}
                                                        schedule={market.properties.schedule.slice(0, -16)}
                                                        address={market.properties.address}
                                                        key={index}
                                                        USDA_id={market.properties.USDA_id}
                                                        handleMarketSaveClick={this.handleMarketSaveClick}
                                                    />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </section>

                        </div>
                    </div>
                    <div className="level">
                        <div className="level-item">
                            <button className="button is-large is-info mapButton" onClick={this.handleButtonClick}>See Markets</button>
                        </div>
                    </div>
                    <div className="level">
                        <div className="level-item">

                            <p className="coronavirusalert title is-4">Notice: The search results may be outdated and events <br></br>might have been canceled due to the Corona virus pandemic.</p>
                        </div>
                    </div>
                </div>

                <SearchForm
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
            </div>
        )
    }
}
export default MapPage

