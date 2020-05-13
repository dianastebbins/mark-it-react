import React from 'react'
import { useParams, useHistory } from "react-router-dom"
import { Link } from "react-router-dom";
import mapboxgl from 'mapbox-gl';
import "./style.css"
import API from "../../utils/API";
import MarketArr from "../../components/MarketArr"
import userLat from "../../components/userLat"
import userLong from "../../components/userLong"
import displayMap from "./displayMap"
import SearchForm from "../../components/SearchForm"
mapboxgl.accessToken = 'pk.eyJ1IjoidGhlLW1lZGl1bS1wbGFjZSIsImEiOiJja2EwMHcxOWwwa2ZmM2hvMG9nNHhoZXdrIn0.UBg5PKfAeHOcP_xn2SEkTw';


// import SomeComponent from '../../components/SomeComponent';

class MapPage extends React.Component {
    state = {
        lng: '',
        lat: '',
        zoom: '',
        search: '',
        results: []
    }



    // USER MARKER PULL FROM GLOBAL LOCATION VARIABLE




    componentDidMount(userLat, userLong) {
        navigator.geolocation.getCurrentPosition(function (position) {
             userLat = position.coords.latitude
             userLong = position.coords.longitude  
             
            const map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v9',
                center: [position.coords.longitude, position.coords.latitude],  // [-96, 37.8]
                zoom: 9
            });
            console.log(position.coords.latitude)
            const marker = new mapboxgl.Marker()
                .setLngLat([userLong, userLat])
                .addTo(map);

        })
        console.log(userLat)
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
        console.log(event.target.value)
        this.getResults(this.state.search);
        console.log(userLat)
    };

    getDetails = (query) => {

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
                MarketArr.push(newMarketObj);
                console.log(newMarketObj)
            })
    };


     getResults = (zip) => {
        // create array to hold geojson objects
        const marketArr = [];
        // or
        // function getResults(lat, lng) {

        // =======================================
        // FIRST AJAX REQUEST FOR MARKET NAME & ID
        // =======================================
        API.search(zip)
            .then((data) => {

                console.log(data.data.results)
                // LOOP THROUGH ARRAY OF MARKET IDS AND NAMES
                // AND RUN getDetails FOR EACH ENTRY - 
                // THIS RUNS THE SECOND AJAX REQUEST
                data.data.results.forEach(market => {
                    this.getDetails(market.id);
                    console.log(market.marketname)
                });

            }).then(() => {
                //FIXME: TIMEOUT CURRENTLY SET TO GIVE ARRAY TIME TO POPULATE
                //FIXME: KINDA HACKY RIGHT NOW, NEED TO FIX LATER
                setTimeout(function () {
                    console.log(MarketArr);
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


        // displayMap = (locObjArr) => {
        // mapboxgl.accessToken = 'pk.eyJ1IjoidGhlLW1lZGl1bS1wbGFjZSIsImEiOiJja2EwMHcxOWwwa2ZmM2hvMG9nNHhoZXdrIn0.UBg5PKfAeHOcP_xn2SEkTw';
        // const map = new mapboxgl.Map({
        //     container: 'map',
        //     style: 'mapbox://styles/mapbox/streets-v9',
        //     center: locObjArr[0].geometry.coordinates, //[-96, 37.8],
        //     zoom: 6
        // });

        // map.on('load', function () {
        //     // Add a new source from our GeoJSON data and
        //     // set the 'cluster' option to true. GL-JS will
        //     // add the point_count property to your source data.
        //     map.addSource('markets', {
        //         type: 'geojson',
        //         // Point to GeoJSON data.
        //         'data': {
        //             'type': 'FeatureCollection',
        //             'features': locObjArr
        //         },
        //         cluster: true,
        //         clusterMaxZoom: 14, // Max zoom to cluster points on
        //         clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
        //     });

        //     map.addLayer({
        //         id: 'clusters',
        //         type: 'circle',
        //         source: 'markets',
        //         filter: ['has', 'point_count'],
        //         paint: {
        //             // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
        //             // with three steps to implement three types of circles:
        //             //   * Blue, 20px circles when point count is less than 100
        //             //   * Yellow, 30px circles when point count is between 100 and 750
        //             //   * Pink, 40px circles when point count is greater than or equal to 750
        //             'circle-color': [
        //                 'step',
        //                 ['get', 'point_count'],
        //                 '#51bbd6',
        //                 100,
        //                 '#f1f075',
        //                 750,
        //                 '#f28cb1'
        //             ],
        //             'circle-radius': [
        //                 'step',
        //                 ['get', 'point_count'],
        //                 20,
        //                 100,
        //                 30,
        //                 750,
        //                 40
        //             ]
        //         }
        //     });

        //     map.addLayer({
        //         id: 'cluster-count',
        //         type: 'symbol',
        //         source: 'markets',
        //         filter: ['has', 'point_count'],
        //         layout: {
        //             'text-field': '{point_count_abbreviated}',
        //             'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
        //             'text-size': 12
        //         }
        //     });

        //     map.addLayer({
        //         id: 'unclustered-point',
        //         type: 'circle',
        //         source: 'markets',
        //         filter: ['!', ['has', 'point_count']],
        //         paint: {
        //             'circle-color': '#11b4da',
        //             'circle-radius': 10,
        //             'circle-stroke-width': 1,
        //             'circle-stroke-color': '#fff'
        //         }
        //     });

        //     // inspect a cluster on click
        //     map.on('click', 'clusters', function (e) {
        //         const features = map.queryRenderedFeatures(e.point, {
        //             layers: ['clusters']
        //         });
        //         const clusterId = features[0].properties.cluster_id;
        //         map.getSource('markets').getClusterExpansionZoom(
        //             clusterId,
        //             function (err, zoom) {
        //                 if (err) return;

        //                 map.easeTo({
        //                     center: features[0].geometry.coordinates,
        //                     zoom: zoom
        //                 });
        //             }
        //         );
        //     });

        //     // When a click event occurs on a feature in
        //     // the unclustered-point layer, open a popup at
        //     // the location of the feature, with
        //     // description HTML from its properties.
        //     map.on('click', 'unclustered-point', function (e) {
        //         const coordinates = e.features[0].geometry.coordinates.slice();
        //         const address = e.features[0].properties.address.trim();
        //         const schedule = e.features[0].properties.schedule.trim();
        //         const products = e.features[0].properties.products.trim();
        //         const googleLink = e.features[0].properties.googleLink.trim();

        //         // Ensure that if the map is zoomed out such that
        //         // multiple copies of the feature are visible, the
        //         // popup appears over the copy being pointed to.
        //         while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        //             coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        //         }

        //         new mapboxgl.Popup()
        //             .setLngLat(coordinates)
        //             .setHTML(
        //                 `<h1>Mark-It!</h1><p><strong>Address:</strong> ${address}<br><strong>Schedule:</strong> ${schedule}<strong>Products:</strong> ${products}</p>
        //                 <br><a href="${googleLink}" target="_blank">click here</a>`
        //             )
        //             .addTo(map);
        //     });

        //     map.on('mouseenter', 'clusters', function () {
        //         map.getCanvas().style.cursor = 'pointer';
        //     });
        //     map.on('mouseleave', 'clusters', function () {
        //         map.getCanvas().style.cursor = '';
        //     });

        //     // USER MARKER PULLS FROM GLOBAL USER LOCATION VARIABLES
        //     var marker = new mapboxgl.Marker()
        //         .setLngLat([userLong, userLat])
        //         .addTo(map);
        // });
    // }








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




// const [playerState,setPlayerState]= useState({
    //     name:'',
    //     team:''
    // })

    // useEffect(()=>{
    //     API.getAllPlayers().then(res=>{
    //         console.log(res.data)
    //         setPlayersState(res.data)
    //         setFilteredPlayersState(res.data)
    //     }).catch(err=>{
    //         console.log(err);
    //     })
    // },[])

    // const params = useParams(); // for retrieving id from .../path/:id apis
    // const history = useHistory();

    // const handleDeleteBtnClick = event=>{
    //     event.preventDefault();
    //     API.deletePlayerById(params.id).then(res=>{
    //         history.push('/')
    //     })
    // }

    // const handleFormSubmit = event=>{
    // OR
    // const handleInputChange = event=>{
    //     event.preventDefault();
    //     API.createPlayer(playerState).then(newPlayer=>{
    //         console.log(newPlayer)
    //         setPlayerState({
    //             name:'',
    //             team:''
    //         })
    //         history.push("/")
    //     })