import React from 'react';
import {
    Card,
    CardContent,
    Typography
} from "@material-ui/core";

import './holdingsstyling.scss';

const Holdings = () => {
    return (
            <Card className={"holdings"}>
                <CardContent>
                    <Typography>
                        Top 5 holdings
                    </Typography>


                    <ul>150 Bitcoin</ul>
                    <ul>100 Ethereum</ul>
                    <ul>100,000 Dogecoin</ul>
                    <ul>500,000 Cardano</ul>

                </CardContent>
            </Card>
    );
}

export default Holdings;