import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import 'bulma/css/bulma.css'
import _ from 'lodash'
// import StatsPage from './pages/examples/StatsPage';
// import AddPlayerPage from './pages/examples/AddPlayerPage';
// import DetailsPage from "./pages/examples/DetailsPage";
import AddProductPage from "./pages/AddProductPage";
import UserPage from "./pages/UserPage"
import ProductPage from "./pages/ProductPage"
import DetailPage from "./pages/DetailPage";
import ListingPage from "./pages/ListingPage";
import LoginPage from "./pages/LoginPage";
import MapPage from "./pages/MapPage";
import RegistrationPage from "./pages/RegistrationPage";
import SchedulerPage from "./pages/Scheduler";
import AboutPage from "./pages/AboutPage";
import SignupPage from "./pages/SignupPage";
import ProfilePage from "./pages/ProfilePage";
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import API from "./utils/API"
import './App.css';
import SplashPage from './pages/SplashPage';







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
    <Router>
      <Nav id={id} logoutHandle={logoutHandle}/>
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
        <Route exact path="/registration">
          <RegistrationPage/>
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
        <Route exact path="/signup">
          <SignupPage/>
        </Route>
        <Route exact path="/profile">
          <ProfilePage/>
        </Route>
        

        {/* <Route exact path ="/player/:id">
          <DetailsPage/>
        </Route> */}
      </Switch>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
