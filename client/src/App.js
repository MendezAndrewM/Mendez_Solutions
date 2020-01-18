import React, { useState, Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg'; //Not in use
import { render } from 'react-dom';  //who dis?
import './App.css';
import page from "./pages";


const App = props => {
    // const [signedIn, setAuth] = useState(0);

    return (
        <Router>
            <div>
                {/* <Nav loggedIn={this.state.isSignedIn} /> */}
                <Route exact path="/" component={page.Home} />
                <Route exact path="/Contact" component={page.Contact} />
                <Route exact path="/profile" component={page.Profile} /> 
                {/* <Footer /> */}
            </div>
        </Router>
    )
    
}


export default App;
