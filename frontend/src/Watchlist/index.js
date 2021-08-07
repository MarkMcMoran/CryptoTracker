import React from 'react';
import {Card, CardContent, Typography} from "@material-ui/core";
import './watchliststyling.scss';
const currencies = [
    {
        longname: 'BTC',
        symbol: '฿',
    },
    {
        longname: 'ETH',
        symbol: 'Ξ',
    },
    {
        longname: 'DOGE',
        symbol: 'Ɖ',
    },
    {
        longname: 'CARDANO',
        symbol: 'ADA',
    },
];


const Watchlist = () => {

    return (

            <Card className={"watchlist"}>
                <CardContent>
                    <Typography>
                        Watchlist
                    </Typography>
                    {currencies.map((curr) => (
                        <ul key={curr.symbol} value={curr.longname}>
                            {curr.symbol} | {curr.longname}
                        </ul>
                    ))}
                </CardContent>
            </Card>
    );
}

export default Watchlist;