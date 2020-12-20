import React from 'react';
import { Container, Col, Row, Button, Nav, Image, Form, Figure } from 'react-bootstrap';
 

function UpperBlueBar (props)  {
    return(
    <Row className="upperBlueBar" >
        <Col sm={4} className="bgr">
            <svg xmlns= "http://www.w3.org/2000/svg" width= "150" height= "100" 
            viewBox= "0 0 1000 500"> 
            
                <path id= "Path_15701"
                data-name= "Path 15701" d=
                "M-154.953,356.268c61.376-70.487,182.582,20.7,358.2-19.207,152.109-34.582,160.86-126.439,282.392-121.884,88.789,3.31,185.541,54.578,238.714,143.895C783,457.551,761.68,557.81,755.7,582.139c-26.713,109.124-106,166.687-133.968,186.348-115.24,80.953-244.555,66.767-306.592,59.992C82.1,802.957-167.386,636.583-178.495,455.7-179.971,432.021-182.658,388.1-154.953,356.268Z"
                transform= "translate(179.337 -215.014)" fill= "#e6f3ff" opacity= "0.31" /> 
            </svg>
        </Col>
        <Col sm={4} className="text">
            <h4>{props.title}</h4>
        </Col>
        <Col sm={4} className="bgl">
            <svg xmlns= "http://www.w3.org/2000/svg" width= "150" height= "100" 
            viewBox= "0 0 1000 500"> 
            
                <path id= "Path_15701"
                data-name= "Path 15701" d=
                "M-154.953,356.268c61.376-70.487,182.582,20.7,358.2-19.207,152.109-34.582,160.86-126.439,282.392-121.884,88.789,3.31,185.541,54.578,238.714,143.895C783,457.551,761.68,557.81,755.7,582.139c-26.713,109.124-106,166.687-133.968,186.348-115.24,80.953-244.555,66.767-306.592,59.992C82.1,802.957-167.386,636.583-178.495,455.7-179.971,432.021-182.658,388.1-154.953,356.268Z"
                transform= "translate(179.337 -215.014)" fill= "#e6f3ff" opacity= "0.31" /> 
            </svg>
        </Col>
    </Row>
    )
}

export default UpperBlueBar;