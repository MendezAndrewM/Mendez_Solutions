import React, { useState, Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg'; //Not in use
import { render } from 'react-dom';  //who dis?
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import page from "./pages";

const domain = window.location.href.match(/Mendez-Solutions/i) 
    ? `https://www.mendez-solutions.com/`
    : `http://localhost:3000/`;

const App = props => {
    // const [signedIn, setAuth] = useState(0);

    return (
        <>
            <Router>
                {window.location.href === domain ? null : <Nav />}
                <div>
                    {/* <Nav loggedIn={this.state.isSignedIn} /> */}
                    <Route exact path="/" component={page.Home} />
                    <Route exact path="/Contact" component={page.Contact} />
                    <Route exact path="/profile" component={page.Profile} /> 
                    
                </div>
                {window.location.href === domain ? null : <Footer />}
            </Router>
        </>
    )
    
}


export default App;
