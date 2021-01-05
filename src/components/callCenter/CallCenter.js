import React from 'react';
import {Col, Row, Image } from 'react-bootstrap';
import CallCenterNumber from './CallCenterNumberSVG.js';

 
const CallCenter = () => (
    <Row className="callCenter ">
        <Col sm={6} className="right">
            <h5>پشتبانی درمانیتو</h5>
            <p>پاسخگویی روزهای کاری از 9 صبح تا 9 شب</p>
        </Col>
        <Col sm={6} className="left">
            <CallCenterNumber />
        </Col>
    </Row>
)

export default CallCenter;