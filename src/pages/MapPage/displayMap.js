import mapboxgl from 'mapbox-gl';
import API from '../../utils/API';


// GET LIST OF PRODUCTS ADDED BY VENDORS
const vendorArr = [];

API.getProductMapMarkers().then(res => {
    // console.log(JSON.parse(res.data[1].vendorObj))
    //eslint-disable-next-line
    res.data.map((geoJson, index) => {
        vendorArr.push(geoJson.vendorObj)
        console.log(geoJson);
    })
}).then(() => console.log(vendorArr))
    .catch(err => console.log(err))




export default function displayMap(locObjArr, userLong, userLat) {

    mapboxgl.accessToken = 'pk.eyJ1IjoidGhlLW1lZGl1bS1wbGFjZSIsImEiOiJja2EwMHcxOWwwa2ZmM2hvMG9nNHhoZXdrIn0.UBg5PKfAeHOcP_xn2SEkTw';

    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: locObjArr[0].geometry.coordinates, //[-96, 37.8],
        zoom: 6
    });

    map.on('load', function () {
        // Add a new source from our GeoJSON data and
        // set the 'cluster' option to true. GL-JS will
        // add the point_count property to your source data.
        map.addSource('markets', {
            type: 'geojson',
            // Point to GeoJSON data.
            'data': {
                'type': 'FeatureCollection',
                'features': locObjArr
            },
            cluster: true,
            clusterMaxZoom: 14, // Max zoom to cluster points on
            clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
        });

        // ================================
        // ADD LIST OF GEOJSON VENDOR ITEMS
        // ================================
        map.addSource('vendors', {
            type: 'geojson',
            'data': {
                'type': 'FeatureCollection',
                'features': vendorArr
            }
            // cluser: true,
            // clusterMaxZoom: 14,
            // clusterRadius: 50
        })

        // =========================
        // ADD LIST OF FOUND MARKETS
        // =========================
        map.addLayer({
            id: 'clusters',
            type: 'circle',
            source: 'markets',
            filter: ['has', 'point_count'],
            paint: {
                // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
                // with three steps to implement three types of circles:
                //   * Blue, 20px circles when point count is less than 100
                //   * Yellow, 30px circles when point count is between 100 and 750
                //   * Pink, 40px circles when point count is greater than or equal to 750
                'circle-color': [
                    'step',
                    ['get', 'point_count'],
                    '#51bbd6',
                    100,
                    '#f1f075',
                    750,
                    '#f28cb1'
                ],
                'circle-radius': [
                    'step',
                    ['get', 'point_count'],
                    20,
                    100,
                    30,
                    750,
                    40
                ]
            }
        });


        // =========================
        // ADD LIST OF VENDOR ITEMS MARKETS
        // =========================
        // map.addLayer({
        //     id: 'clusters',
        //     type: 'circle',
        //     source: 'vendors',
        //     filter: ['has', 'point_count'],
        //     paint: {
        //         // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
        //         // with three steps to implement three types of circles:
        //         //   * Blue, 20px circles when point count is less than 100
        //         //   * Yellow, 30px circles when point count is between 100 and 750
        //         //   * Pink, 40px circles when point count is greater than or equal to 750
        //         'circle-color': [
        //             'step',
        //             ['get', 'point_count'],
        //             '#51bbd6',
        //             100,
        //             '#f1f075',
        //             750,
        //             '#f28cb1'
        //         ],
        //         'circle-radius': [
        //             'step',
        //             ['get', 'point_count'],
        //             20,
        //             100,
        //             30,
        //             750,
        //             40
        //         ]
        //     }
        // });

        // ================================
        // ADD NEW LAYER FOR MARKET RESULTS
        // ================================
        map.addLayer({
            id: 'cluster-count',
            type: 'symbol',
            source: 'markets',
            filter: ['has', 'point_count'],
            layout: {
                'text-field': '{point_count_abbreviated}',
                'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
                'text-size': 12
            }
        });

        map.addLayer({
            id: 'unclustered-point',
            type: 'circle',
            source: 'markets',
            filter: ['!', ['has', 'point_count']],
            paint: {
                'circle-color': '#11b4da',
                'circle-radius': 10,
                'circle-stroke-width': 1,
                'circle-stroke-color': '#fff'
            }
        });

        // ADD LAYER FOR VENDOR PRODUCTS FROM VENDORS SOURCE
        map.addLayer({
            id: 'vendor-products',
            type: 'circle',
            source: 'vendors'
        })

        // inspect a cluster on click
        map.on('click', 'clusters', function (e) {
            const features = map.queryRenderedFeatures(e.point, {
                layers: ['clusters']
            });
            const clusterId = features[0].properties.cluster_id;
            map.getSource('markets').getClusterExpansionZoom(
                clusterId,
                function (err, zoom) {
                    if (err) return;

                    map.easeTo({
                        center: features[0].geometry.coordinates,
                        zoom: zoom
                    });
                }
            );
        });

        // When a click event occurs on a feature in
        // the unclustered-point layer, open a popup at
        // the location of the feature, with
        // description HTML from its properties.
        map.on('click', 'unclustered-point', function (e) {

            const coordinates = e.features[0].geometry.coordinates.slice();
            const address = e.features[0].properties.address.trim();
            const schedule = e.features[0].properties.schedule.trim();
            const products = e.features[0].properties.products.trim();
            const googleLink = e.features[0].properties.googleLink.trim();
            const name = e.features[0].properties.name.trim();
            // Ensure that if the map is zoomed out such that
            // multiple copies of the feature are visible, the
            // popup appears over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            new mapboxgl.Popup()
                .setLngLat(coordinates)
                .setHTML(
                    `<h1><strong>${name}</strong></h1><p><strong>Address:</strong> ${address}<br><strong>Schedule:</strong> ${schedule}<strong>Products:</strong> ${products}</p>
                        <br><a href="${googleLink}" target="_blank">Google Maps Link</a>`
                )
                .addTo(map);
        });

        map.on('mouseenter', 'clusters', function () {
            map.getCanvas().style.cursor = 'pointer';
        });
        map.on('mouseleave', 'clusters', function () {
            map.getCanvas().style.cursor = '';
        });

        // USER MARKER PULLS FROM GLOBAL USER LOCATION VARIABLES
        var marker = new mapboxgl.Marker()
            .setLngLat([userLong, userLat])
            .addTo(map);

        // add markers to map
        vendorArr.forEach((marker) => {

            // create a HTML element for each feature
            var el = document.createElement('div');
            el.className = 'marker';
            console.log(marker);
            // make a marker for each feature and add to the map
            if(marker.geometry){
                new mapboxgl.Marker(el)
                .setLngLat(marker.geometry.coordinates)
                .addTo(map);
            }
        });
    });


}

