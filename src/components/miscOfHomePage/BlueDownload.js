import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import TellNumberInput from "../tellNumberInput/TellNumberInput";
import damanitoApp from "../../assets/DarmanitoApp.png";
import { SibAppSVGBlue, DirectSVGBlue, BazzarSVGBlue} from './SVGs';

 
const  BlueDownload = () => (
    <Row className="blueDownload" >
        <Col sm={6} className="right" >
            <h4>دانلود اپلیکیشن درمانیتو</h4>
            <p>برای دریافت لینک دانلود شماره موبایل خود را وارد کنید</p>
            {/* handmade Component start */}
            <TellNumberInput buttonText="بفرست"/>
            {/* handmade Component end */}
            <div className="store">
                <DirectSVGBlue  />
                <BazzarSVGBlue  />
                <SibAppSVGBlue  />
            </div>
        </Col>
        <Col sm={6} className="left" >
            <Image className="left__image"  src={damanitoApp}/>
        </Col>
    </Row>
)

export default BlueDownload;