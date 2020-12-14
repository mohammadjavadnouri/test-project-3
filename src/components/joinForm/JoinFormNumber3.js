import React from 'react';
import {Container, Row, Col, Form, Button } from 'react-bootstrap';

class JoinFormNumber3 extends React.Component {
    constructor() {
        super();
    }


    render () {
        return(
            <Container className="joinFormNumber3">
            <Row>
                <Col>
                    <div>esme yaru: {this.props.name}</div>
                </Col>
            </Row>

            <Row>
                <Col sm={3}>
                    <div>Drug Store Data</div>
                </Col>
                <Col sm={3}>
                    <div>Drug Store Data</div>
                </Col>
                <Col sm={3}>
                    <div>Drug Store Data</div>
                </Col>
                <Col sm={3}>
                    <div>Drug Store Data</div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div>Address</div>
                </Col>
            </Row>
            
            <Row>
                <Col sm={2}>
                    <div>Name</div>
                </Col>
                <Col sm={2}>
                    <div>Name</div>
                </Col>
            </Row>

        </Container>
        )
    }

}

export default JoinFormNumber3;