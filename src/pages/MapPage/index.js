import React from 'react'
import { useParams, useHistory } from "react-router-dom"
import { Link } from "react-router-dom";
import mapboxgl from 'mapbox-gl';
import "./style.css"
import API from "../../utils/API";
import MarketArr from "../../components/MarketArr"

import displayMap from "./displayMap"
import SearchForm from "../../components/SearchForm"
mapboxgl.accessToken = 'pk.eyJ1IjoidGhlLW1lZGl1bS1wbGFjZSIsImEiOiJja2EwMHcxOWwwa2ZmM2hvMG9nNHhoZXdrIn0.UBg5PKfAeHOcP_xn2SEkTw';


// import SomeComponent from '../../components/SomeComponent';

class MapPage extends React.Component {
    state = {
        lng: null,
        lat: null,
        zoom: '',
        search: '',
        marketname: [],
        id:[]
    }



    // USER MARKER PULL FROM GLOBAL LOCATION VARIABLE




    componentDidMount(userLat, userLong) {
        navigator.geolocation.getCurrentPosition(position => {
             this.setState({
                 lng: position.coords.longitude,
                 lat: position.coords.latitude
             })
             
            const map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v9',
                center: [this.state.lng, this.state.lat],  // [-96, 37.8]
                zoom: 9
            });
            console.log(position.coords.latitude)
            const marker = new mapboxgl.Marker()
                .setLngLat([this.state.lng, this.state.lat])
                .addTo(map);

        })
    };

        


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
                const long = parseFloat("-" + (data.data.marketdetails.GoogleLink.split('-').pop().split('%')[0]))

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
                newMarketObj.properties.name = this.state.marketname[count]
                MarketArr.push(newMarketObj);
            })
    };


     getResults = (zip) => {
        // create array to hold geojson objects
        // or
        // function getResults(lat, lng) {

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
                const userLat = this.state.lat
                const userLong = this.state.lng
                setTimeout(function () {
                    
                    displayMap(MarketArr, userLong, userLat);
                }, 1000);
            });
            
    }

    searchZips = (input) => {

        API.search(input)
            .then((res) => console.log(res)
                //   this.setState({ results: res.data.results })



            )
            .catch((err) => console.log(err));
    };




    render() {
        return (
            <div className="MapPage section">
                <div className="container">
                    
                
                        <div style={{height: "80vh", width: "80vw"}} className="MapContainer" id="map" />
                    </div>
                

                <SearchForm
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <Link to="/registration" >temporary link to RegistrationPage</Link>
            </div>
        )
    }


}
export default MapPage

