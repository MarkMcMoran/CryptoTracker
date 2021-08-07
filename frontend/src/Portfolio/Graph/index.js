import React, {Component} from 'react';
import Chart from "react-apexcharts";
import './Graph.scss';
import {Card, CardContent} from "@material-ui/core";

class Graph extends Component {

    constructor(props) {
        super(props);

        this.state = {
            options: {
                xaxis: {
                    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"]
                }
            },
            series: [
                {

                    name: "Account value",
                    data: [150000, 300000, 1750000, 750000, 2750000, 4550000, 6750000, 10700000]
                }
            ]
        };

    }


    render() {
        return (
            <Card>
                <CardContent>
                    <div className={"Chart-div"}>

                        <h3> Performance (YTD) </h3>
                        <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="line"

                            width="450"
                        />
                    </div>
                </CardContent>

            </Card>

        )
            ;
    }
}


export default Graph;