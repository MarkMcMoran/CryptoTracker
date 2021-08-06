import React from 'react';
import '../Portfolio/Performance/PerformanceMetricStyling.scss';
import Graph from "../Portfolio/Graph";
import GeneralStats from "../Portfolio/Holdings/GeneralStats";
import Watchlist from "../Watchlist";
import Holdings from "../Portfolio/Holdings/Holdings";
import {Grid} from "@material-ui/core";

import './LandingStyling.scss';


const ParentElem = () => {


    return (
        <div className={"bodyContainer"}>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <GeneralStats/>

                </Grid>
                <Grid item xs={8}>
                    <Graph/>


                </Grid>
                <Grid item xs={6}>
                    <Watchlist/>


                </Grid>
                <Grid item xs={6}>
                    <Holdings/>

                </Grid>

            </Grid>
        </div>

    );
}

export default ParentElem;
