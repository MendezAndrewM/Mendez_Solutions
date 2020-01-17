import React, { useState, Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg'; //Not in use
import { render } from 'react-dom';  //who dis?
import './App.css';

import Page from "./pages" // Fix
import Home from "./pages/Home" //Use until above is fixed
//
//
//            Look up 'render' attribute for react router
//


const App = props => {
    // const [signedIn, setAuth] = useState(0);

    return (
        <Router>
            <div>
                {/* <Nav loggedIn={this.state.isSignedIn} /> */}
                {/* <Route exact path="/" component={Home} render={() => <Page.Home />} />  */}
                <Route exact path="/" component={Page.Home} />
                {/* <Route exact path="/"><Page.Home /></Route> */}
                {/* until pages export is fixed, must reference pages as done with Home above instead of page.thing like below */}
                <Route exact path="/Contact" component={Page.Contact} />
                <Route exact path="/profile" component={Page.Profile} /> 
                {/* <Footer /> */}
            </div>
        </Router>
    )
    
}


export default App;
