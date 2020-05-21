// importing axios 
import axios from "axios";
const BASE_URL = "http://localhost:8080"
// const BASE_URL = "https://mark-it.herokuapp.com"

const API = {
    // api call by zipcode form US Dept of agriculture
    search: function (zip) {
        return axios.get("http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=" + zip);
    },
    // api call with latitude and longitude
    searchLatLong: function(lat, long) {
        return axios.get("http://search.ams.usda.gov/farmersmarkets/v1/data.svc/locSearch?lat=" + lat + "&lng=" + long)
    },
    // api call for each id
    searchMarket: function (id) {
        return axios.get("http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=" + id);
    },
    // part of login
    login: function (userData) {
        return axios.post(`${BASE_URL}/login`, userData, { withCredentials: true })
    },
    // part of logout
    logout: function () {
        return axios.get(`${BASE_URL}/logout`, { withCredentials: true })
    },
    // part of creating user
    readSessions: function () {
        return axios.get(`${BASE_URL}/readsessions`, { withCredentials: true })
    },
    // to get all users
    getAllUsers: function () {
        return axios.get(`${BASE_URL}/api/users`)
    },

    updateProduct: function (productData,id) {
        return axios.put(`${BASE_URL}/api/products/${id}`, productData, { withCredentials: true})
    },
    // to help with catching errors on sign up page
    createUser: function (userData) {
        return axios.post(`${BASE_URL}/api/users`, userData, { validateStatus: () => true, withCredentials: true })
    },
    // for all products 
    addProduct: function (productData) {
        return axios.post(`${BASE_URL}/api/products`, productData, { withCredentials: true })
    },
    // to get products
    getProducts: function () {
        return axios.get(`${BASE_URL}/api/products`, { withCredentials: true })
    },
    // to get products by id
    getProductbyId: function (id) {
        return axios.get(`${BASE_URL}/api/products/${id}`, { withCredentials: true })
    },
    // to get markets
    getMarkets: function () {
        return axios.get(`${BASE_URL}/api/markets`, { withCredentials: true })
    },
    // to delete product by id
    deleteProduct: function (id) {
        return axios.delete(`${BASE_URL}/api/products/${id}`, { withCredentials: true})
    },
   // to add a favorite market
    addFavMarkets: function (marketDetails) {
        return axios.post(`${BASE_URL}/api/market`, marketDetails, { withCredentials: true })
    },    
    // to get user by id
    getUserById: function (id) {
        return axios.get(`${BASE_URL}/api/users/${id}`, { withCredentials: true })
    },
    // to get user products
    getUserProducts: function (id) {
        return axios.get(`${BASE_URL}/api/users/${id}/products`, { withCredentials: true })
    },
    // to get all info
    getAllInfo: function () {
        return axios.get(`${BASE_URL}/api/user/allinfo`, { withCredentials: true })
    },
    // to get all the user info
    getAllUserInfo: function (id) {
        return axios.get(`${BASE_URL}/api/users/${id}/allinfo`, { withCredentials: true })
    },
    // to get user favorite vendors
    getUserFavVendors: function (id) {
        return axios.get(`${BASE_URL}/api/users/${id}/vendors`, { withCredentials: true })
    },
    // to get user markets
    getUserMarkets: function (id) {
        return axios.get(`${BASE_URL}/api/users/${id}/markets`, { withCredentials: true })
    },  

    // to add vendor to favorites
    addVendorToFavs: function(id, vendor_id) {
        return axios.post(`${BASE_URL}/api/users/${id}/vendors`,{vendor_id: vendor_id}, { withCredentials: true })
    },
    getUserSchedules: function(id) {
        return axios.get(`${BASE_URL}/api/users/${id}/markets/schedules`, { withCredentials: true })
    },
    deleteFavoriteVendor: function (id, vendor_id) {
        return axios.put(`${BASE_URL}/api/users/unfavor/vendor/${id}`,{vendor_id: vendor_id}, { withCredentials: true})
    },
    deleteMarket: function (id) {
        return axios.delete(`${BASE_URL}/api/markets/${id}`, { withCredentials: true})
    },
    deleteSchedule: function (id) {
        return axios.delete(`${BASE_URL}/api/schedules/${id}`, { withCredentials: true})
    },
    addProductMapMarker: function(productData){
        return axios.post(`${BASE_URL}/api/vendorgeojson`, productData, { withCredentials: true })
    },
    getProductMapMarkers: function() {
        return axios.get(`${BASE_URL}/api/vendorgeojson`, { withCredentials: true })
    }


}
export default API
