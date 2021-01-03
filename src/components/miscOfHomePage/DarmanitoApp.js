import React from 'react';
import { Col, Row, Button, Image } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import doctor from "../../assets/doctor_two_color.svg";
import { DoctorsBackground } from './SVGs';
 
const DarmanitoApp = () => (
    <Row className="darmanitoApp" >
        <Col sm={6} className="right">
            <Row className="title">
                <h4>اپلیکیشن درمانیتو</h4>
            </Row>
            <Row>
                <p>درمانیتو سامانه هوشمند درمان و سلامت</p>
            </Row>
            <Row>
                <Button className="button">دانلود درمانیتو</Button>
                <Link to="/join"><Button className="button">عضویت داروخانه ها</Button></Link>
            </Row>
        </Col>
        <Col sm={6} className="left">
            <Image src={doctor} className="doctorSVGStyle"/>
            <DoctorsBackground />
        </Col>
    </Row>
)

export default DarmanitoApp;