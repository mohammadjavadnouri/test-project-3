import React from 'react';
import { Container, Col, Row, Button, Nav, Image, Form, Figure } from 'react-bootstrap';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import CallCenter from '../components/callCenter/CallCenter';
import UpperBlueBar from '../components/upperBlueBar/UpperBlueBar';


const About = () => (
    <Container className="about">

        {/*start of handmade components*/}
        <Header />
        <UpperBlueBar title="درباره ما"/>
        <Row>
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        </Row>
        <CallCenter />
        <Footer />
        {/*end of handmade components*/}

    </Container>
)

export default About;