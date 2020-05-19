// to use hooks /functional components instead of classes
import React,{useState,useEffect} from 'react';
// for routes in React
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// importing bulma a css framework
import 'bulma/css/bulma.css'
// npm package for additional array methods
import _ from 'lodash'
// importing pages
import AddProductPage from "./pages/AddProductPage";
import UserPage from "./pages/UserPage"
import ProductPage from "./pages/ProductPage"
import DetailPage from "./pages/DetailPage";
import ListingPage from "./pages/ListingPage";
import SignUpPage from './pages/SignUpPage';
import LoginPage from "./pages/LoginPage";
import MapPage from "./pages/MapPage";
import SchedulerPage from "./pages/Scheduler";
import AboutPage from "./pages/AboutPage";
import ProfilePage from "./pages/ProfilePage";
import SplashPage from './pages/SplashPage';
import VendorProducts from './pages/VendorProducts';
import FavVendor from './pages/FavVendor'
// importing components
import Nav from "./components/Nav"
import Footer from "./components/Footer"
// importing the api routes
import API from "./utils/API"
// the main css file
import './App.css';







function App() {
  const [id, setId] = useState()
  const [currentUser,setCurrentUser] = useState(false);

  useEffect(()=>{
    API.readSessions().then(res=>{
      if(res.data.user){
        setCurrentUser(res.data.user)
        setId(res.data.user.id)
      }else {
        setCurrentUser(false)
      }
    })
  },[])
  
  const loginSubmitHandler= userData=>{
    setCurrentUser(userData)
  }

  const logoutHandle = ()=>{
    setCurrentUser(false)
  }
  
  
  return (
    // all the routes
    <Router>
      <Nav id={id} currentUser= {currentUser} logoutHandle={logoutHandle}/>
      <div id="wrapper">
      <Switch>
        <Route exact path="/">
          <SplashPage />
        </Route>
        <Route exact path="/add-product">
          <AddProductPage currentUser={currentUser}/>
        </Route>
        {/* one per detail type? */}
        <Route exact path="/detail">
          <DetailPage currentUser = {currentUser}/>
        </Route>
        {/* one per listing type? */}
        <Route exact path="/listing">
          <ListingPage/>
        </Route>
        <Route exact path="/login">
          <LoginPage submitHandler={loginSubmitHandler}/>
        </Route>
        <Route exact path="/map">
          <MapPage/>
        </Route>
        <Route exact path="/signup">
          <SignUpPage/>
        </Route>
        <Route exact path="/vendor/:id">
          <VendorProducts  currentUser= {currentUser}/>
        </Route>
        <Route exact path="/user/:id">
          <UserPage/>
        </Route>
        <Route exact path="/product/:id">
          <ProductPage/>
        </Route>
        <Route exact path="/scheduler">
          <SchedulerPage/>
        </Route>
        <Route exact path="/about">
          <AboutPage/>
        </Route>
        <Route exact path="/favvendor/:id">
          <FavVendor currentUser={currentUser}/>
        </Route>
        <Route exact path="/profile">
          <ProfilePage/>
        </Route>
        

       
      </Switch>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
