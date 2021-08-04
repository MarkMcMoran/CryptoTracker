import React from "react";
import {Statistic, Row, Col} from 'antd';
import {ArrowUpOutlined, ArrowDownOutlined} from '@ant-design/icons';
import {Card} from "@material-ui/core";
import './CryptoPerformance.css';

const CryptoPerformance = () => {

    return (
        <div className="Performance-card">
            <Row gutter={16}>
                <Col span={12}>
                    <Card>
                        <Statistic
                            title="Overall performance (YTD)"
                            value={15}
                            valueStyle={{color: '#3f8600'}}
                            prefix={<ArrowUpOutlined/>}
                            suffix="%"

                        />
                    </Card>
                </Col>
            </Row>
        </div>);
}

export default CryptoPerformance;