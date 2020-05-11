import React from 'react';
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
import Nav from "./components/Nav"


function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <LandingPage />
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
        one per 
        <Route exact path="/user-landing">
          <UserLandingPage/>
        </Route>
        {/* <Route exact path ="/player/:id">
          <DetailsPage/>
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
