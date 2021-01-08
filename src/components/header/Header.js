import React from "react";
import {
  Col,
  Row,
  Button,
  Nav,
  Image,
  Navbar,
  CloseButton,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/Group152.svg";

class Header extends React.Component {
  constructor() {
    super();
    this.state = { toggleMenu: false };
    this.handleDropDownMenu = this.handleDropDownMenu.bind(this);
  }

  handleDropDownMenu() {
    this.setState({ toggleMenu: !this.state.toggleMenu });
  }

  render() {
    return (
      <div>
        <Navbar sticky="top" className="navbar">
          <Row className="header">
            <Col md={2} className="logo">
              <Image src={logo} alt="Logo" className="logo-self" />
            </Col>
            <Col md={8} className="links">
              <Nav
                className="justify-content-center Navlinks"
                activeKey="/home"
              >
                <Nav.Item className="linkItem">
                  <Link to="/" className="link">
                    صفحه اصلی
                  </Link>
                </Nav.Item>
                <Nav.Item className="linkItem">
                  <Link to="/about" className="link">
                    درباره ما
                  </Link>
                </Nav.Item>
                <Nav.Item className="linkItem">
                  <Link to="/contacts" className="link">
                    تماس باما
                  </Link>
                </Nav.Item>
                <Nav.Item className="linkItem">
                  <Link to="/join" className="link">
                    عضویت داروخانه ها
                  </Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col md={2} className="buttonCol">
              <Button variant="primary" className="button">
                دانلود درمانیتو
              </Button>
            </Col>
          </Row>
        </Navbar>

        <Navbar sticky="top" className="navbar__small">
          <Col className="header">
            <Row>
              <Col className="logo">
                <Image src={logo} alt="Logo" />
              </Col>
              <Col className="sandwichButtonCol">
                <div
                  onClick={this.handleDropDownMenu}
                  className="sandwichButton"
                >
                  <i
                    className="fa fa-align-justify"
                    style={
                      this.state.toggleMenu ? { color: "lightBlue" } : null
                    }
                  ></i>
                </div>
              </Col>
            </Row>
            {this.state.toggleMenu === true ? (
              <div>
                <Row className="links">
                  <div className="linkItem">
                    <Link to="/" className="link">
                      صفحه اصلی
                    </Link>
                  </div>
                  <div className="linkItem">
                    <Link to="/about" className="link">
                      درباره ما
                    </Link>
                  </div>
                  <div className="linkItem">
                    <Link to="/contacts" className="link">
                      تماس باما
                    </Link>
                  </div>
                  <div className="linkItem">
                    <Link to="/join" className="link">
                      عضویت داروخانه ها
                    </Link>
                  </div>
                </Row>
                <Row className="buttonCol">
                  <Button variant="primary" className="button">
                    دانلود درمانیتو
                  </Button>
                </Row>
              </div>
            ) : null}
          </Col>
        </Navbar>
      </div>
    );
  }
}

export default Header;
