import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import JoinForm from '../components/joinForm/JoinForm';

const Join = () => (
    <Container>
        <Header />
        <JoinForm />
    </Container>
)

export default Join;