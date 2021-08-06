import React from 'react';
import {Card, CardContent} from "@material-ui/core";
import PerformanceMetricCards from "../Performance/PerformanceMetricCards";
import {Statistic} from "antd";
import {ArrowUpOutlined} from "@ant-design/icons";

const GeneralStats = () => {

    return (
        <Card className={"GlobalCards"}>
            <CardContent>
                <div className={"PerformanceCards"}>
                    <PerformanceMetricCards heading={"Portfolio"}>
                        <Statistic
                            title="Performance to date"
                            value={700}
                            valueStyle={{color: '#3f8600'}}
                            precision={2}
                            prefix={<ArrowUpOutlined/>}
                            suffix="%"

                        />
                    </PerformanceMetricCards>

                    <PerformanceMetricCards heading={"Account Value"} cardtext={"$10,750,000"}/>
                    <PerformanceMetricCards heading={"Top Holding"} cardtext={"Bitcoin"}/>
                    <PerformanceMetricCards heading={"Cash held"} cardtext={"$50,000"}/>
                </div>
            </CardContent>
        </Card>
    );
}

export default GeneralStats;