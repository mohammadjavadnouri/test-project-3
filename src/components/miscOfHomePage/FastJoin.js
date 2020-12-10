import React from 'react';
import { Container, Col, Row, Button, Nav, Image, Form, Figure } from 'react-bootstrap';
import healthDoctor from "../../assets/healthDoctor.png";

const FastJoin = () => (
    <Row className="fastJoin" >
    <Col sm={6} className="right">
        <h4 className="title">عضویت داروخانه یا مراکز درمانی</h4>
        <p>اگر به عنوان داروخانه یا مرکز درمانی قصد دارید در روند درمان و کسب کار خودتان تغییری ایجاد کنید درمانیتو منتظر شماست</p>
        <Form>
            <Form.Group controlId="number">
                <Form.Control className="input" type="number" placeholder="شماره همراه را وارد کنید 09000000000" />
            </Form.Group>
            <Button className="button" variant="primary" type="submit">
                ثبت نام سریع
            </Button>
        </Form>
    </Col>
    <Col sm={6} className="left">
        <Image src={healthDoctor} />
    </Col>
    </Row>
);

export default FastJoin;