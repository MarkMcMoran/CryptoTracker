import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {MenuItem} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));
const currencies = [
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'ETH',
        label: 'Ξ',
    },
    {
        value: 'DOGE',
        label: 'Ɖ',
    },
    {
        value: 'ADA',
        label: 'CARDANO',
    },
];

const ConversionForm = (props) => {
    const classes = useStyles();

    return (
        <form className={classes.root}>
            <TextField
                id="standard-select-currency"
                select
                label="Select"
                helperText="Select cryptocurrency">
                {currencies.map((curr) =>(
                    <MenuItem key={curr.value} value={curr.value}>
                        {curr.label}
                    </MenuItem>
                ))}
        </TextField>

            <TextField
                id="currency-amount"
                label="Units" />

        </form>
    );
}
export default ConversionForm;