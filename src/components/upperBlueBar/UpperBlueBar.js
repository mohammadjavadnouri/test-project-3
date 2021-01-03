import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { RightPath, LeftPath} from './SVGs';

function UpperBlueBar (props)  {
    return(
    <Row className="upperBlueBar" >
        <Col sm={4} className="bgr">
            <RightPath />
        </Col>
        <Col sm={4} className="text">
            <h4>{props.title}</h4>
        </Col>
        <Col sm={4} className="bgl">
            <LeftPath />
        </Col>
    </Row>
    )
}

export default UpperBlueBar;