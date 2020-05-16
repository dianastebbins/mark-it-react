import axios from "axios";
const BASE_URL = "http://localhost:8080"
// const BASE_URL = "https://awesome-mark-it.herokuapp.com/"

const API = {

    search: function (zip) {
        return axios.get("http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=" + zip);
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

    createUser: function (userData) {
        return axios.post(`${BASE_URL}/api/users`, userData, { withCredentials: true })
    },

    addProduct: function (productData) {
        return axios.post(`${BASE_URL}/api/products`, productData, { withCredentials: true })
    },
    getProducts: function () {
        return axios.get(`${BASE_URL}/api/products`, { withCredentials: true })
    },
    getMarkets: function () {
        return axios.get(`${BASE_URL}/api/markets`, { withCredentials: true })
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
    

   
   


   
}
export default API
