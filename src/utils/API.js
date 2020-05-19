import axios from "axios";
const BASE_URL = "http://localhost:8080"
// const BASE_URL = "https://mark-it.herokuapp.com"

const API = {

    search: function (zip) {
        return axios.get("http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=" + zip);
    },

    searchLatLong: function(lat, long) {
        return axios.get("http://search.ams.usda.gov/farmersmarkets/v1/data.svc/locSearch?lat=" + lat + "&lng=" + long)
    },

    searchMarket: function (id) {
        return axios.get("http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=" + id);
    },

    login: function (userData) {
        return axios.post(`${BASE_URL}/login`, userData, { withCredentials: true })
    },
    
    logout: function () {
        return axios.get(`${BASE_URL}/logout`, { withCredentials: true })
    },
    readSessions: function () {
        return axios.get(`${BASE_URL}/readsessions`, { withCredentials: true })
    },

    getAllUsers: function () {
        return axios.get(`${BASE_URL}/api/users`)
    },

    updateProduct: function (productData,id) {
        return axios.put(`${BASE_URL}/api/products/${id}`, productData, { withCredentials: true})
    },

    createUser: function (userData) {
        return axios.post(`${BASE_URL}/api/users`, userData, { validateStatus: () => true, withCredentials: true })
    },
    
    addProduct: function (productData) {
        return axios.post(`${BASE_URL}/api/products`, productData, { withCredentials: true })
    },
    getProducts: function () {
        return axios.get(`${BASE_URL}/api/products`, { withCredentials: true })
    },
    getProductbyId: function (id) {
        return axios.get(`${BASE_URL}/api/products/${id}`, { withCredentials: true })
    },
    getMarkets: function () {
        return axios.get(`${BASE_URL}/api/markets`, { withCredentials: true })
    },
    deleteProduct: function (id) {
        return axios.delete(`${BASE_URL}/api/products/${id}`, { withCredentials: true})
    },

    addFavMarkets: function (marketDetails) {
        return axios.post(`${BASE_URL}/api/market`, marketDetails, { withCredentials: true })
    },    
    
    getUserById: function (id) {
        return axios.get(`${BASE_URL}/api/users/${id}`, { withCredentials: true })
    },
    getUserProducts: function (id) {
        return axios.get(`${BASE_URL}/api/users/${id}/products`, { withCredentials: true })
    },
    getAllInfo: function () {
        return axios.get(`${BASE_URL}/api/user/allinfo`, { withCredentials: true })
    },
    getAllUserInfo: function (id) {
        return axios.get(`${BASE_URL}/api/users/${id}/allinfo`, { withCredentials: true })
    },
    getUserFavVendors: function (id) {
        return axios.get(`${BASE_URL}/api/users/${id}/vendors`, { withCredentials: true })
    },
    getUserMarkets: function (id) {
        return axios.get(`${BASE_URL}/api/users/${id}/markets`, { withCredentials: true })
    },  
    addVendorToFavs: function(id, vendor_id) {
        return axios.post(`${BASE_URL}/api/users/${id}/vendors`,vendor_id, { withCredentials: true })

    },
    getUserSchedules: function(id) {
        return axios.get(`${BASE_URL}/api/users/${id}/markets/schedules`, { withCredentials: true })

    }

}
export default API
