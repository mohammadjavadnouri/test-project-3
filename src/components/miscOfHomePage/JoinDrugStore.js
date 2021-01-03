import React from 'react';
import { Col, Row } from 'react-bootstrap';
import TellNumberInput from "../tellNumberInput/TellNumberInput";
import { DoctorPaper } from "./SVGs";


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
            <DoctorPaper />
        </Col>
    </Row>
);

export default JoinDrugStore;