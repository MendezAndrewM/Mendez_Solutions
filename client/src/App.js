import React, { useState, Component, useEffect} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useLocation, Switch } from "react-router"
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import page from "./pages";

const domain = window.location.href.match(/Mendez-Solutions/i) 
    ? `https://www.mendez-solutions.com/`
    : `http://localhost:3000/`;

const App = props => {
  
    const homeContainer = () => <Route exact path="/" component={page.Home} />

    const defaultContainer = () => (
        <>
            <Nav />
            <div>
                {/* <Nav loggedIn={this.state.isSignedIn} /> */}
                <Route exact path="/" component={page.Home} />
                <Route exact path="/Contact" component={page.Contact} />
                <Route exact path="/Profile" component={page.Profile} /> 
                
            </div>
            {window.location.href === domain ? null : <Footer />}
        </>
    )

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={homeContainer}/>
                <Route component={defaultContainer}/>
            </Switch>
        </Router>
    )
}

export default App;
