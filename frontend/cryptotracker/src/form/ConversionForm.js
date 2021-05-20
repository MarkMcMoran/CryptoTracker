import React from 'react';
import TextField from '@material-ui/core/TextField';


const ConversionForm = (props) => {
    return (
        <form>
            <TextField
                id="standard-select-currency"
                select
                label="Select"
                helperText="Select cryptocurrency">
        </TextField>
            <TextField
                id="currency-amount"
                label="Units">
            </TextField>
</form>
    );
}
export default ConversionForm;