import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import 'bulma/css/bulma.css'
import _ from 'lodash'
// import StatsPage from './pages/examples/StatsPage';
// import AddPlayerPage from './pages/examples/AddPlayerPage';
// import DetailsPage from "./pages/examples/DetailsPage";
import AddProductPage from "./pages/AddProductPage";
import DetailPage from "./pages/DetailPage";
import LandingPage from "./pages/LandingPage";
import ListingPage from "./pages/ListingPage";
import LoginPage from "./pages/LoginPage";
import MapPage from "./pages/MapPage";
import RegistrationPage from "./pages/RegistrationPage";
import SchedulerPage from "./pages/SchedulerPage";
import UserLandingPage from "./pages/UserLandingPage";
import AboutPage from "./pages/AboutPage";
import SignupPage from "./pages/SignupPage";
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import API from "./utils/API"
import './App.css';






function App() {
  const [currentUser,setCurrentUser] = useState(false);

  useEffect(()=>{
    API.readSessions().then(res=>{
      if(res.data.user){
        setCurrentUser(res.data.user)
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
      <Nav />
      <div id="wrapper">
      <Switch>
        <Route exact path="/">
          <LandingPage />
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
        <Route exact path="/scheduler">
          <SchedulerPage/>
        </Route>
        one per 
        <Route exact path="/user-landing">
          <UserLandingPage/>
        </Route>
        <Route exact path="/about">
          <AboutPage/>
        </Route>
        <Route exact path="/signup">
          <SignupPage/>
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
