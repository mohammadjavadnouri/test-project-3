import React from 'react';
import { Col, Row, Button, Nav, Image, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from "../../assets/Group152.svg";
 
class Header extends React.Component {
    constructor(){
        super();
        this.state = {toggleMenu: false}
        this.handleDropDownMenu = this.handleDropDownMenu.bind(this)
    }

    handleDropDownMenu(){
        this.setState({toggleMenu: !this.state.toggleMenu})
    }

    render () {
        return(
            <div>
                <Navbar sticky="top"  className="navbar">
                    <Row className="header" >
                        <Col md={2} className="logo">
                            <Image src={logo} alt="Logo" />
                        </Col>
                        <Col md={8} className="links">
                            <Nav className="justify-content-center Navlinks" activeKey="/home" >
                                <Nav.Item className="linkItem">
                                    <Link to="/" className="link">صفحه اصلی</Link>
                                </Nav.Item>
                                <Nav.Item className="linkItem">
                                    <Link to="/about" className="link">درباره ما</Link>
                                </Nav.Item>
                                <Nav.Item className="linkItem">
                                    <Link to="/contacts" className="link">تماس باما</Link>
                                </Nav.Item>
                                <Nav.Item className="linkItem">
                                    <Link to="/join" className="link">عضویت داروخانه ها</Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col md={2} className="buttonCol">
                            <Button variant="primary" className="button">دانلود درمانیتو</Button>
                        </Col>
                    </Row>
                </Navbar>

                <Navbar sticky="top"  className="navbar__small">
                    <Row className="header" >
                        <Col md={2} className="logo">
                            <Image src={logo} alt="Logo" />
                        </Col>
                        <Col>
                            <Button onClick={this.handleDropDownMenu}> dokme </Button>
                        </Col>
                        {this.state.toggleMenu === true ?
                            <div>
                                <Col md={8} className="links">
                                    <Nav className="justify-content-center Navlinks" activeKey="/home" >
                                        <Nav.Item className="linkItem">
                                            <Link to="/" className="link">صفحه اصلی</Link>
                                        </Nav.Item>
                                        <Nav.Item className="linkItem">
                                            <Link to="/about" className="link">درباره ما</Link>
                                        </Nav.Item>
                                        <Nav.Item className="linkItem">
                                            <Link to="/contacts" className="link">تماس باما</Link>
                                        </Nav.Item>
                                        <Nav.Item className="linkItem">
                                            <Link to="/join" className="link">عضویت داروخانه ها</Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col md={2} className="buttonCol">
                                    <Button variant="primary" className="button">دانلود درمانیتو</Button>
                                </Col>
                            </div>
                        :
                        null
                        }
                    </Row>
                </Navbar>
            </div>
        )
    }
}

export default Header;

