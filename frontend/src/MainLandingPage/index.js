import React from 'react';
import '../Portfolio/Performance/PerformanceMetricStyling.scss';
import Graph from "../Portfolio/Graph";
import GeneralStats from "../Portfolio/Holdings/GeneralStats";
import Watchlist from "../Watchlist";
import Holdings from "../Portfolio/Holdings/Holdings";
import {Container, Grid} from "@material-ui/core";

import './LandingStyling.scss';


const ParentElem = () => {


    return (
        <Container>

            <div className={"bodyContainer"}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <GeneralStats/>
                    </Grid>
                    <Grid item xs={8}>
                        <Graph/>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Watchlist/>
                        </Grid>
                        <Grid item xs={6}>
                            <Holdings/>
                        </Grid>


                    </Grid>


                </Grid>
            </div>
        </Container>
    );
}

export default ParentElem;
