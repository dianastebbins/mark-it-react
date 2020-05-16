import React, {useState,useEffect} from 'react'
import { useParams, useHistory } from "react-router-dom"
import { Link } from "react-router-dom";
import MarketDetail from "../../components/MarketDetail"
import ProductDetail from "../../components/ProductDetail"
import VendorDetail from "../../components/VendorDetail"
import "./style.css"
import API from "../../utils/API"



export default function DetailPage()  {
    const params = useParams();
    const history = useHistory();
    const [marketState,setMarketState] = useState([]);
    const [productState,setProductState] = useState([]);
    const [vendorState,setVendorState] = useState([]);
 
    
    // useEffect(()=>{
    //     API.getAllPlayers().then(res=>{
    //         console.log(res.data)
    //         setPlayersState(res.data)
    //         setFilteredPlayersState(res.data)
    //     }).catch(err=>{
    //         console.log(err);
    //     })
    // },[])
    useEffect(() => {
        searchProducts();
        searchVendors();
    },[])


    const searchProducts = () => {
        API.getProducts()
            .then((res) => 
                setProductState(res.data)
            )
            .catch((err) => console.log(err));
    };
    const searchVendors = () => {
        API.getAllUsers()
            .then((res) => 
                setVendorState(res.data)
            )
            .catch((err) => console.log(err));
    };

    const searchMarkets = () => {
        API.getMarkets()
            .then((res) =>
                console.log(res.data)
                // setMarketState( res.data)
                
            )
            .catch((err) => console.log(err));
    };
    
    

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
  
        return (
            <div className="DetailPage">
                <div className="body">

                    <h1>DetailPage</h1>
                    <MarketDetail markets={marketState} />
                    <VendorDetail vendors={vendorState} />
                    <ProductDetail products={productState} />

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
