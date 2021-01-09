import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

class JoinFormNumber3 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container className="joinFormNumber3">
        <Row className="row">
          <Col sm={2}>
            <Image src={this.props.uploadedImageURL} className="thumbnail" />
          </Col>
          <Col sm={2}>
            <div className="feedbacktitle">نام داروخانه: </div>
            <div> {this.props.drugStoreName} </div>
          </Col>
        </Row>

        <Row className="row2">
          <Col sm={3}>
            <div className="feedbacktitle">شماره داروخانه: </div>
          </Col>
          <Col sm={3}>
            <div className="feedbacktitle">شهر: </div>
          </Col>
          <Col sm={3}>
            <div className="feedbacktitle">منطقه: </div>
          </Col>
          <Col sm={3}>
            <div className="feedbacktitle">ساعت کاری: </div>
          </Col>
        </Row>

        <Row className="row3">
          <Col>
            <div>{this.props.drugStoreNumber}</div>
          </Col>
          <Col sm={3}>
            <div>{this.props.cityName}</div>
          </Col>
          <Col sm={3}>
            <div>{this.props.zone}</div>
          </Col>
          <Col sm={3}>
            <div>
              {this.props.daily ? "روزانه" : null}
              {this.props.dayAndNight ? "شبانه روزی" : null}
            </div>
          </Col>
        </Row>

        <Row className="row">
          <Col>
            <div className="feedbacktitle">آدرس دقیق: </div>
            <div>{this.props.address}</div>
          </Col>
        </Row>

        <Row className="row">
          <Col sm={4}>
            <div className="feedbacktitle">نام و نام خانوادگی موسس: </div>
            <div>{this.props.name} </div>
          </Col>
          <Col sm={4}>
            <div className="feedbacktitle">شماره نظام پزشکی: </div>
            <div>{this.props.medicalCouncilID}</div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default JoinFormNumber3;
