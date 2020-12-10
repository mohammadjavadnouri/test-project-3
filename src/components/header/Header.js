import React from 'react';
import { Container, Col, Row, Button, Nav, Image, Form, Figure } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from "../../assets/Group152.svg";

const Header = () => (
        <Row className="header">
            <Col md={2} className="logo">
                <Image src={logo} alt="Logo" />
            </Col>
            <Col md={8} className="links">
                <Nav className="justify-content-center" activeKey="/home" >
                    <Nav.Item>
                        <Link to="/" className="link">صفحه اصلی</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/about" className="link">درباره ما</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/contacts" className="link">تماس باما</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/" className="link">عضویت داروخانه ها</Link>
                    </Nav.Item>
                </Nav>
            </Col>
            <Col md={2} className="button">
                <Button variant="primary">دانلود درمانیتو</Button>
            </Col>
        </Row>
)

export default Header;

