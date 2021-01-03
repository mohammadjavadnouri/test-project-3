import React from 'react';
import { Container, Col, Row, Button, Nav, Image, Form, Figure } from 'react-bootstrap';
//import drugStore from "../../assets/drugStore.png";
//import store from "../../assets/store.png";
//import visitOnline from "../../assets/visitOnline.png";
//import nobatDehi from "../../assets/nobatDehi.png";
import { DrugStore, Store, VisitOnline, NobatDehi } from './SVGs';
 
const DarmanitoOptions = () => (
    <Row className="darmanitoOptions">
        <Container >
            <Row>
                <Col sm={12}  >
                    <h4 className="up">امکانات درمانیتو</h4>
                </Col>
            </Row>
            <Row >
                <Col sm={6} className="images">
                    <DrugStore className="image"  />
                    <Store className="image" />
                    <VisitOnline className="image"  />
                    <NobatDehi className="image"  />
                </Col>
                <Col sm={6} className="down__left" >
                    <h5>داروخانه آنلاین</h5>
                    <p>در سرویس داروخانه شما میتوانید نسخه دارویی ی ا محصول بهداشتی خودتون رو برای پیدا شدن به داروخانه و فروشگاه ها سفارش بدید.</p>
                    <div className="steps">
                        <i className="fa fa-arrow-circle-down" aria-hidden="true"></i>
                        <p className="step">قدم اول</p>
                        <p className="step__description">وارد بخش سفارش با عکس نسخه شوید و عکس و توضیحات را وارد کنید.</p>
                        <i className="fa fa-arrow-circle-down" aria-hidden="true"></i>
                        <p className="step">قدم دوم</p>
                        <p className="step__description">بعد از ارسال عکس نسخه، باید آدرس محل خودتون رو وارد کنید.</p>
                        <i className="fa fa-check-circle" aria-hidden="true"></i>
                        <p className="step">قدم سوم</p>
                        <p className="step__description">اگر نتیجه جستجوی نسخه موفقیت آمیز باشه باید منتظر تحویل سفارش باشید.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </Row>
);

export default DarmanitoOptions;