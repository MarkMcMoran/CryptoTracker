import React, {Component} from 'react';
import {Button, Card, CardContent, Container, Grid, TextField, Typography} from "@material-ui/core";
import './LoginPageStyling.scss';

import AuthenticationNav from "./Navigation";

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    render() {
        return (

            <Grid container>
                <Grid item>
                    <Card className={"AuthCard"}>
                        <CardContent>
                            <Typography>
                                Login
                            </Typography>
                            <form>
                                <TextField id="Username" label={"Username"}/> <br />
                                <TextField type="password" id="password" label={"Password"}/><br />

                             <AuthenticationNav />
                             </form>

                        </CardContent>
                    </Card>
                </Grid>

            </Grid>

        );

    }
}

export default LoginPage;