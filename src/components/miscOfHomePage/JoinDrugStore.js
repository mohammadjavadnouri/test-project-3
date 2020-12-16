import React from 'react';
import { Container, Col, Row, Button, Nav, Image, Form, Figure } from 'react-bootstrap';
import healthDoctor from "../../assets/healthDoctor.png";
import TellNumberInput from "../tellNumberInput/TellNumberInput";

const JoinDrugStore = () => (
    <Row className="joinDrugStore" >
    <Col sm={6} className="right">
        <h4 className="title">عضویت داروخانه یا مراکز درمانی</h4>
        <p>اگر به عنوان داروخانه یا مرکز درمانی قصد دارید در روند درمان و کسب کار خودتان تغییری ایجاد کنید درمانیتو منتظر شماست</p>
        {/* handmade Component start */}
        <TellNumberInput buttonText="ثبت نام سریع"/>
        {/* handmade Component end */}
    </Col>
    <Col sm={6} className="left">
        <Image src={healthDoctor} />
    </Col>
    </Row>
);

export default JoinDrugStore;