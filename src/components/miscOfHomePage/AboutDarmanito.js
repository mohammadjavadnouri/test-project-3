import React from 'react';
import { Container, Col, Row, Button, Nav, Image, Form, Figure } from 'react-bootstrap';
import playMobile from "../../assets/playMobile.png";
import fastSearch from "../../assets/icons/fast-search.svg";
import efficient from "../../assets/icons/efficent.svg";
import easy from "../../assets/icons/easy.svg";
import search from "../../assets/icons/search.svg";



const AboutDarmanito = () => (
            <Row className="aboutDarmanito" >
            <Col sm={6} >
                <Image className="right" src={playMobile}/>
            </Col>
            <Col sm={6} className="left">
                <Row className="title">
                    <h4>درباره درمانیتو</h4>
                </Row>
                <Row>
                    <p>درمانیتو یک سامانه است که امکان سفارش دارو، محصولات آرایشی بهداشتی نوبت گیری و مشاوره پزشکان را به راحتی و بصورت آنلاین فراهم کرده است.</p>
                </Row>
                <Row className="footer">
                    <Figure>
                        <Figure.Image src={fastSearch} />
                        <Figure.Caption>جستجو سریع </Figure.Caption>
                    </Figure>
                    <Figure>
                        <Figure.Image src={efficient} />
                        <Figure.Caption>به صرفه</Figure.Caption>
                    </Figure>
                    <Figure>
                        <Figure.Image src={easy} />
                        <Figure.Caption>راحت</Figure.Caption>
                    </Figure>
                    <Figure>
                        <Figure.Image src={search} />
                        <Figure.Caption>جستجو سریع</Figure.Caption>
                    </Figure>
                </Row>
            </Col>
        </Row>
)


export default AboutDarmanito;