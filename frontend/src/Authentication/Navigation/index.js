import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Button} from "@material-ui/core";
import './authnavstyling.scss';

const AuthenticationNav = () => {
    return (

        <Router>

            <ul className={"authNavUlist"}>
                <li className={"authNavList"}>
                    <Link to={"/profile"}><Button> Login</Button></Link>

                </li>
                <div className={"forgotregister"}>
                    <li className={"authNavList"}>
                        <Link to={"/resetpassword"}> <Button> Forgot password</Button></Link>
                    </li>
                    <li className={"authNavList"}>
                        <Link to={"/register"}><Button>Register</Button> </Link>
                    </li>
                </div>

            </ul>


            <Switch>
                <Route exact path="/profile">
                </Route>
                <Route exact path="/resetpassword">
                </Route>
                <Route exact path="/register">
                </Route>
            </Switch>
        </Router>

    );


}

export default AuthenticationNav;