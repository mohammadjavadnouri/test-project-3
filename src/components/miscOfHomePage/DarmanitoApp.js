import React from 'react';
import { Container, Col, Row, Button, Nav, Image, Form, Figure } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import doctor from "../../assets/doctor_two_color.svg";


const DarmanitoApp = () => (
    <Row className="darmanitoApp" >
        <Col sm={6} className="right">
            <Row className="title">
                <h4>اپلیکیشن درمانیتو</h4>
            </Row>
            <Row>
                <p>درمانیتو سامانه هوشمند درمان و سلامت</p>
            </Row>
            <Row>
                <Button className="button">دانلود درمانیتو</Button>
                <Link to="/join"><Button className="button">عضویت داروخانه ها</Button></Link>
            </Row>
        </Col>
        <Col sm={6} className="left">
            <Image src={doctor}/>
            <svg xmlns= "http://www.w3.org/2000/svg" width= "700" className="bg"
            height= "618.916" viewBox= "0 0 943.749 618.916" > 
                <path id= "Path_15701"
                data-name= "Path 15701" d=
                "M-154.953,356.268c61.376-70.487,182.582,20.7,358.2-19.207,152.109-34.582,160.86-126.439,282.392-121.884,88.789,3.31,185.541,54.578,238.714,143.895C783,457.551,761.68,557.81,755.7,582.139c-26.713,109.124-106,166.687-133.968,186.348-115.24,80.953-244.555,66.767-306.592,59.992C82.1,802.957-167.386,636.583-178.495,455.7-179.971,432.021-182.658,388.1-154.953,356.268Z"
                transform= "translate(179.337 -215.014)" fill= "#e6f3ff" opacity= "0.41" /> 
            </svg>
        </Col>
    </Row>
)

export default DarmanitoApp;