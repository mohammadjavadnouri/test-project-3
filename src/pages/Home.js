import React from "react";
import { Container } from "react-bootstrap";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import CallCenter from "../components/callCenter/CallCenter";
import JoinDrugStore from "../components/miscOfHomePage/JoinDrugStore";
import BlueDownload from "../components/miscOfHomePage/BlueDownload";
import DarmanitoOptions from "../components/miscOfHomePage/DarmanitoOptions";
import AboutDarmanito from "../components/miscOfHomePage/AboutDarmanito";
import DarmanitoApp from "../components/miscOfHomePage/DarmanitoApp";

const Home = () => (
  <Container className="home">
    {/*start of handmade components*/}
    <Header />
    <DarmanitoApp />
    <AboutDarmanito />
    <DarmanitoOptions />
    <BlueDownload />
    <JoinDrugStore />
    <CallCenter />
    <Footer />
    {/*end of handmade components*/}
  </Container>
);

export default Home;
