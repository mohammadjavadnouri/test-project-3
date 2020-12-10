import React from 'react';
import { Container, Col, Row, Button, Nav, Image, Form, Figure } from 'react-bootstrap';
import callCenter from "../../assets/callCenter.png";

const CallCenter = () => (
    <Row className="callCenter" >
        <Col sm={6} className="right" >
            <h5>پشتبانی درمانیتو</h5>
            <p>پاسخگویی روزهای کاری از 9 صبح تا 9 شب</p>
        </Col>
        <Col sm={6} className="left" >
            <Image src={callCenter} />
        </Col>
    </Row>
)

export default CallCenter;