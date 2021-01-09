import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import CallCenter from "../components/callCenter/CallCenter";
import BeEffectiveInHealth from "../components/miscOfOnlineStore/BeEffectiveInHealth";
import MiddleBlueBar from "../components/miscOfOnlineStore/MiddleBlueBar";
import DarmanitoServices from "../components/miscOfOnlineStore/DarmanitoServices";

const OnlineStore = () => (
  <Container className="onlineStore">
    <Header />
    <BeEffectiveInHealth />
    <MiddleBlueBar />
    <DarmanitoServices />
    <CallCenter />
    <Footer />
  </Container>
);

export default OnlineStore;
