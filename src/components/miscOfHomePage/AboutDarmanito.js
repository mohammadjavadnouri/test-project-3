import React from "react";
import { Col, Row, Image, Figure } from "react-bootstrap";
import playMobile from "../../assets/playMobile.png";
import fastSearch from "../../assets/icons/fast-search.svg";
import efficient from "../../assets/icons/efficent.svg";
import easy from "../../assets/icons/easy.svg";
import search from "../../assets/icons/search.svg";

const AboutDarmanito = () => (
  <Row className="aboutDarmanito">
    <Col sm={6}>
      <Image className="right" src={playMobile} />
    </Col>
    <Col sm={6} className="left">
      <Row className="title">
        <h4>درباره درمانیتو</h4>
      </Row>
      <Row>
        <p>
          درمانیتو یک سامانه است که امکان سفارش دارو، محصولات آرایشی بهداشتی
          نوبت گیری و مشاوره پزشکان را به راحتی و بصورت آنلاین فراهم کرده است.
        </p>
      </Row>
      <Row className="footer">
        <Col sm={3}>
          <Figure>
            <Figure.Image src={fastSearch} />
            <Figure.Caption className="figCap">جستجو سریع </Figure.Caption>
          </Figure>
        </Col>
        <Col sm={3}>
          <Figure>
            <Figure.Image src={efficient} />
            <Figure.Caption className="figCap">به صرفه</Figure.Caption>
          </Figure>
        </Col>
        <Col sm={3}>
          <Figure>
            <Figure.Image src={easy} />
            <Figure.Caption className="figCap">راحت</Figure.Caption>
          </Figure>
        </Col>
        <Col sm={3}>
          <Figure>
            <Figure.Image src={search} />
            <Figure.Caption className="figCap">جستجو سریع</Figure.Caption>
          </Figure>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default AboutDarmanito;
