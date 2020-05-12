import React from 'react'
import { useParams, useHistory } from "react-router-dom"
import { Link } from "react-router-dom";
import MarketDetail from "../../components/MarketDetail"
import ProductDetail from "../../components/ProductDetail"
import VendorDetail from "../../components/VendorDetail"
import "./style.css"
import API from "../../utils/API"
import Footer from '../../components/Footer';


// import SomeComponent from '../../components/SomeComponent';

class DetailPage extends React.Component {
    state = {
        markets: ["Ballard", "Fremont", "Gold Bar", "Maple Valley", "Kirkland", "Mill Creek"],
        products: ["Bread", "Croissant", "Brown Butter Toffee Chocolate Chip Cookies", "Brownies"],
        vendors:["Bob", "Bobbie", "Bobo", "Bobette", "Frank"]
    }

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
    // }
render() {
    return (
        <div className="DetailPage">
            <div className="body">

            <h1>DetailPage</h1>
            <h3>Navbar goes here</h3>
            <MarketDetail markets={this.state.markets}/>
            <VendorDetail vendors={this.state.vendors}/>
            <ProductDetail products={this.state.products}/>

            {/* <h3>Table/List goes here (read/view only data)<br></br>
                IF(Market Detail)<br></br>
                ....Market Name,<br></br>
                ....IF(user is logged in)<br></br>
                ........Favorites/Heart button,<br></br>
                ....Address,City,State,<br></br>
                ....Dates,Start Time,End Time,<br></br>
                ....Details/info<br></br>
                IF(Vendor Detail)<br></br>
                ....Business Name,<br></br>
                ....IF(user is logged in)<br></br>
                ........Favorites/Heart button,<br></br>
                ....Business Email, Business Phone,<br></br>
                ....Website,<br></br>
                ....Chat with Vendor button<br></br>
                IF(user is vendor and on their own vendor page)
                ........Add Product button
                ........THIS BUTTON COULD BE ON VENDOR PROFILE PAGE
                ....Show Products list,<br></br>
                IF(Product Detail)<br></br>
                ....Product Name,Product Description,<br></br>
                ....Price,Unit,<br></br>
                ....Details,<br></br>
                ....Photo<br></br>
                ....IF(user is vendor and on their own product page)<br></br>
                ........update button<br></br>
                .......delete button<br></br>
            </h3> */}
            <button className="button">
            <Link to="/listing" >temporary link to ListingPage</Link>
            </button>
            </div>

        </div>
    )
}
}
export default DetailPage