import React from 'react';
import {Container, Row, Col, Form, Button, Image } from 'react-bootstrap';

class JoinFormNumber3 extends React.Component {
    constructor() {
        super();
    }


    render () {
        let x;
        switch(this.props.dayOrNight){
            case "dayAndNight":
                x = "شبانه روزی"
                break;
            case "daily":
                x = "روزانه"
                break;
        }
        console.log(this.props.dayOrNight)
        return(
            <Container className="joinFormNumber3">
            <Row>
                <Col sm={2}>
                    <Image src={this.props.uploadedImageURL} className="thumbnail" />
                </Col>
                <Col sm={2}>
                    <div>نام داروخانه: {this.props.drugStoreName}</div>
                </Col>
            </Row>

            <Row>
                <Col sm={3}>
                    <div>شماره داروخانه: </div>
                </Col>
                <Col sm={3}>
                    <div>شهر: </div>
                </Col>
                <Col sm={3}>
                    <div>منطقه: </div>
                </Col>
                <Col sm={3}>
                    <div>ساعت کاری: 
                    </div>
                </Col>
            </Row>

            <Row>
                <Col sm={3}>
                    <div>{this.props.drugStoreNumber}</div>
                </Col>
                <Col sm={3}>
                    <div>{this.props.cityName}</div>
                </Col>
                <Col sm={3}>
                    <div>{this.props.zone}</div>
                </Col>
                <Col sm={3}>
                    <div>{x}</div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div>آدرس دقیق: {this.props.address}</div>
                </Col>
            </Row>
            
            <Row>
                <Col sm={4}>
                    <div>نام و نام خانوادگی موسس: {this.props.name}</div>
                </Col>
                <Col sm={4}>
                    <div>شماره نظام پزشکی: {this.props.medicalCouncilID}</div>
                </Col>
            </Row>

        </Container>
        )
    }

}

export default JoinFormNumber3;