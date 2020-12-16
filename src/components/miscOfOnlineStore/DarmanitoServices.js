import React from 'react';
import {Container, Col, Row, Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import tabletAndpaper from '../../assets/tabletAndPaper.png';
import phoneWithUmbrella from '../../assets/phoneWithUmbrella.png';


const DarmanitoServices = () => (
    <div className="darmanitoServices">
        <Row>
            <Col>
                <h5>درمانیتو چه خدماتی ارایه خواهد داد</h5>
                <p>خدمت مورد نظر خود را برای ثبت نام انتخاب کنید</p>
            </Col>
        </Row>
        <Row className="cards">
            <Col sm={6} className="cardRightCol">
                <Card className="cardRight">
                    <Card.Img variant="top" src={tabletAndpaper} className="cardImageRight"/>
                    <Card.Body>
                        <Card.Title>داروخانه</Card.Title>
                        <Card.Text>
                        مایل هستم فقط بعنوان داروخانه فعالیت کنم و در بخش صرفا سفارش دارو با عکس نسخه به بیماران کمک رسانی کنم 
                        </Card.Text>
                        <div className="buttonContainer">
                            <Link to="/join">
                                <Button className="button">ثبت نام</Button>
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col sm={6} className="cardLeftCol">
                <Card className="cardLeft">
                    <Card.Img variant="top" src={phoneWithUmbrella} className="cardImageLeft"/>
                    <Card.Body>
                        <Card.Title>فروشگاه آرایشی و بهداشتی</Card.Title>
                        <Card.Text>
                        مایل هستم فقط بعنوان فروشگاه آرایشی بهداشتی فعالیت کنم 
                        </Card.Text>
                        <div className="buttonContainer">
                            <Button className="button">ثبت نام</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </div>
)

export default DarmanitoServices