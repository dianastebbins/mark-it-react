import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import 'bulma/css/bulma.css'
import _ from 'lodash'
// import StatsPage from './pages/examples/StatsPage';
// import AddPlayerPage from './pages/examples/AddPlayerPage';
// import DetailsPage from "./pages/examples/DetailsPage";
import AddProductPage from "./pages/AddProductPage";
import DetailPage from "./pages/DetailPage";
import ListingPage from "./pages/ListingPage";
import LoginPage from "./pages/LoginPage";
import MapPage from "./pages/MapPage";
import RegistrationPage from "./pages/RegistrationPage";
import SchedulerPage from "./pages/SchedulerPage";
import AboutPage from "./pages/AboutPage";
import SignupPage from "./pages/SignupPage";
import ProfilePage from "./pages/ProfilePage";
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import './App.css';
import SplashPage from './pages/SplashPage';


function App() {
  return (
    <Router>
      <Nav />
      <div id="wrapper">
      <Switch>
        <Route exact path="/">
          <SplashPage />
        </Route>
        <Route exact path="/add-product">
          <AddProductPage/>
        </Route>
        {/* one per detail type? */}
        <Route exact path="/detail">
          <DetailPage/>
        </Route>
        {/* one per listing type? */}
        <Route exact path="/listing">
          <ListingPage/>
        </Route>
        <Route exact path="/login">
          <LoginPage/>
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
