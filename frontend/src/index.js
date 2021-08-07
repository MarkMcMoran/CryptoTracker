import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Box, CssBaseline} from "@material-ui/core";

ReactDOM.render(
    <React.StrictMode>
        <Box>
            <CssBaseline/>
            <App/>
        </Box>
    </React.StrictMode>,
    document.getElementById('root')
);
reportWebVitals();
