import React, {Component} from 'react';
import {Button, Card, CardContent, Container, Grid, TextField, Typography} from "@material-ui/core";

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
                    <Card>
                        <CardContent>
                            <Typography>
                                Login
                            </Typography>
                            <form>
                                <TextField   id="Username" label={"Username"}/> <br/>
                                <TextField  type="password" id="password"  label={"Password"}/>
                                <br/>
                                <br/>
                                <Button> Login </Button>
                                <br/>
                                <br/>
                                <Button> Forgot password</Button>
                                <br/>
                                <br/>
                                <Button>Register</Button>
                            </form>

                        </CardContent>
                    </Card>
                </Grid>

            </Grid>

        );

    }
}

export default LoginPage;