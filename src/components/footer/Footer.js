import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/Group152.svg";
import { BazzarSVGIcon, SibAppSVGIcon } from "./SVGs";

const Footer = () => (
  <Row className="footer">
    <Col className="meta">
      <Image src={logo} className="logo" />
      <h5>سوپر اپلیکیشن حوزه درمان و سلامت</h5>
      <p>تمام حقوق مادی و معنوی این وبسایت متعلق به درمانیتو است</p>
      <i href="#" className="fa fa-linkedin socialIcon"></i>
      <i href="#" className="fa fa-twitter socialIcon"></i>
      <i href="#" className="fa fa-instagram socialIcon"></i>
    </Col>
    <Col className="services">
      <h5>خدمات درمانیتو</h5>
      <br />
      <p>داروخانه آنلاین</p>
      <Link to="/onlineStore">
        <p>فروشگاه آنلاین</p>
      </Link>
      <p>ویزیت آنلاین</p>
      <p>پرونده پزشکی</p>
    </Col>
    <Col className="pages">
      <h5>صفحات درمانیتو</h5>
      <br />
      <Link to="/contacts" className="link">
        <p>تماس باما</p>
      </Link>
      <Link to="/about" className="link">
        <p>درباره ما</p>
      </Link>
      <p>سوالات متداول</p>
      <p>قوانین و شرایط</p>
    </Col>
    <Col className="download">
      <h5 className="title">دانلود درمانیتو</h5>
      <br />
      <Row>
        <Col lg={6} className="storeImageCol">
          <SibAppSVGIcon className="storeImage" />
        </Col>
        <Col lg={6} className="storeImageCol">
          <BazzarSVGIcon className="storeImage" />
        </Col>
      </Row>
    </Col>
  </Row>
);

export default Footer;
