import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import TellNumberInput from '../tellNumberInput/TellNumberInput';
import yourDrugStore from '../../assets/Group 5280.png';

const BeEffectiveInHealth = () => (
    <Container className="beEffectiveInHealth">
        <Row>
            <Col sm={6} className="right">
                <Row>
                    <h3>
                        شما هم در سلامت و بهبود مردم کشورمون موثر باشید 
                    </h3>
                </Row>
                <Row>
                    <p>
                   با ثبت نام به عنوان داروخانه یا فروشگاه و داروخانه شما هم به سیستم درمان کمک کنید و به هزاران کاربر خدمات ارائه بدین و روزانه درآمد سفارش های خودتون رو تسویه کنید
                   </p>
                </Row>

                <TellNumberInput buttonText="ثبت نام سریع"/>

            </Col>

            <Col sm={6}>
                <Image src={yourDrugStore}/>
            </Col>
        </Row>
    </Container>
)

export default BeEffectiveInHealth