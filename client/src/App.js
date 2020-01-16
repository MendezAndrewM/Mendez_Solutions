import React, { useState, Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg'; //Not in use
import { render } from 'react-dom';  //who dis?
import './App.css';

import page from "./pages" // Fix
import Home from "./pages/Home" //Use until above is fixed


const App = props => {
    const [signedIn, setAuth] = useState(0);

    return (
        <Router>
            <div>
                {/* <Nav loggedIn={this.state.isSignedIn} /> */}
                <Route exact path="/" component={Home} />
                {/* until pages export is fixed, must reference pages as done with Home above instead of page.thing like below */}
                <Route exact path="/profile" component={page.Profile} /> 
                <Route exact path="/Contact" component={page.Contact} />
                {/* <Footer /> */}
            </div>
        </Router>
    )
    
}


export default App;
