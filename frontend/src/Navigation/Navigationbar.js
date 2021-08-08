import React from "react";
import "./Navigationbar.scss";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import ParentElem from "../MainLandingPage";
import LoginPage from "../Authentication";


const NavBar = () => {
    return (
        <Router>
            <div>
                <ul className={"navigationparent"}>
                    <li style={{float: "left"}} className={"mainnav"}>
                        <Link to="/">Cryptoprice Tracker </Link>
                    </li>
                    <li className={"mainnav"}>
                        <Link to="/profile">Profile </Link>
                    </li>
                    <li className={"mainnav"}>
                        <Link to="/login">Login</Link>
                    </li>
                    <li className={"mainnav"}>
                        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/">
                        <ParentElem/>
                    </Route>
                    <Route exact path="/login">
                        <LoginPage/>
                    </Route>
                    <Route exact path="/cryptocurrencies">

                    </Route>
                    <Route exact path="/profile">

                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default NavBar;
