import React from 'react';
import {
    Card,
    CardContent,
    Typography
} from "@material-ui/core";


const PerformanceMetricCards = (props) => {

    return (
        <Card className={"StatisticSideCards"}>
            <Typography className={"headingText"}>
                {props.heading}
            </Typography>
            <CardContent className={"subheadingText"}>
                {props.cardtext}
                {props.children}
            </CardContent>
        </Card>
    );
}

export default PerformanceMetricCards;