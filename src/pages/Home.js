import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import CallCenter from '../components/callCenter/CallCenter';
import FastJoin from '../components/miscOfHomePage/FastJoin';
import BlueDownload from '../components/miscOfHomePage/BlueDownload';
import DarmanitoOptions from '../components/miscOfHomePage/DarmanitoOptions';
import AboutDarmanito from '../components/miscOfHomePage/AboutDarmanito';
import DarmanitoApp from '../components/miscOfHomePage/DarmanitoApp';



const Home = () => (
        <Container className="home">

            {/*start of handmade components*/}
            <Header />
            <DarmanitoApp />
            <AboutDarmanito />
            <DarmanitoOptions />
            <BlueDownload />
            <FastJoin />
            <CallCenter />
            <Footer />
            {/*end of handmade components*/}

        </Container>
    );

export default Home;