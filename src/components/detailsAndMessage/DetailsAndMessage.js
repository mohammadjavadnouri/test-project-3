import React from 'react';
import {Link} from 'react-router-dom';
import { Container, Col, Row, Button, Nav, Image, Form, Figure } from 'react-bootstrap';

const DetailsAndMessage = () => (
            <Row className="detailsAndMessage">
            <Col sm={6} className="right" >
                <Form>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>نام و نام  خانوادگی</Form.Label>
                        <Form.Control type="text" placeholder="نام و نام  خانوادگی" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>ایمیل یا شماره همراه</Form.Label>
                        <Form.Control type="email" placeholder="ایمیل یا شماره همراه" />
                    </Form.Group>
                    <Form.Group controlId="formBasicText" >
                        <Form.Label >پیام شما</Form.Label>
                        <Form.Control type="text" placeholder="متن پیام" className="message"/>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="button">
                        ارسال پیام
                    </Button>
                </Form>
            </Col>

            <Col sm={6} className="left" >
                <div> 
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3237.681218227109!2d51.53475268972667!3d35.75863932309596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1605524715912!5m2!1sen!2s" 
                    width="100%"
                    height="500" 
                    frameBorder="0" 
                    style={{border:0}}
                    allowFullScreen="" 
                    aria-hidden="false" 
                    tabIndex="0">
                    </iframe>
                </div>

                <div className="address">
                    <div className="address__text__r" >
                        <p>ایمیل</p>
                        <p className="coloring">info@nahiraTech.com</p>
                        <p>شماره ثابت</p>
                        <p className="coloring">021-44219671</p>
                        
                    </div>
                    <div>
                        <p>آدرس</p>
                        <p>
                        تهران، طرشت، خیابان شهید چوب تراش، خیابان شهید حسین مردی، بن بست پنجم، پلاک 15، واحد 1
                        </p>
                    </div>
                </div>
            </Col>
        </Row>
)

export default DetailsAndMessage;