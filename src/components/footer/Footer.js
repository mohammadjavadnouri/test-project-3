import React from 'react';
import { Container, Col, Row, Button, Nav, Image, Form, Figure } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from "../../assets/Group152.svg";
import bazzarBlackButton from "../../assets/bazzarBlackButton.png";
import sibAppBlackButton from "../../assets/sibAppBlackButton.png";

const Footer = () => (
            <Row className="footer" >
            <Col sm={4} >
                <Image src={logo}/>
                <h5>سوپر اپلیکیشن حوزه درمان و سلامت</h5>
                <p>تمام حقوق مادی و معنوی این وبسایت متعلق به درمانیتو است</p>
                <i href="#" className="fa fa-linkedin"></i>
                <i href="#" className="fa fa-twitter"></i>
                <i href="#" className="fa fa-instagram"></i>
            </Col>
            <Col sm={2} >
                <h5>خدمات درمانیتو</h5>
                <p>داروخانه آنلاین</p>
                <Link to="/onlineStore"><p>فروشگاه آنلاین</p></Link>
                <p>ویزیت آنلاین</p>
                <p>پرونده پزشکی</p>
            </Col>
            <Col sm={2}>
                <h5>صفحات درمانیتو</h5>
                <Link to="/contacts" className="link"><p>تماس باما</p></Link>
                <Link to="/about" className="link"><p>درباره ما</p></Link>
                <p>سوالات متداول</p>
                <p>قوانین و شرایط</p>
            </Col>
            <Col sm={4} >
                <h5>دانلود درمانیتو</h5>
                <Image className="store" src={bazzarBlackButton}/>
                <Image className="store" src={sibAppBlackButton}/>
            </Col>
        </Row>
)

export default Footer;