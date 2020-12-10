import React from 'react';
import {Link} from 'react-router-dom';
import { Container, Col, Row, Button, Nav, Image, Form, Figure } from 'react-bootstrap';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import CallCenter from '../components/callCenter/CallCenter';
import UpperBlueBarOfContactsPage from '../components/UpperBlueBarOfContactsPage/UpperBlueBarOfContactsPage';
import DetailsAndMessage from '../components/detailsAndMessage/DetailsAndMessage';

const Contacts = () => (
    <Container className="contacts">
            <Header />
            <UpperBlueBarOfContactsPage />
            
            <DetailsAndMessage />

            <CallCenter />

            <Footer />
    </Container>
)

export default Contacts;