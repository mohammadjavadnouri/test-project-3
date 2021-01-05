import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

class JoinFormNumber1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { city: "" };
    this.handleCityName = this.handleCityName.bind(this);
  }

  handleCityName(evt) {
    this.setState({ city: evt.target.value });
  }

  render() {
    if (this.props.currentStep !== 0) {
      return null;
    }
    let zone1;
    let zone2;
    let zone3;

    switch (this.state.city) {
      case "تهران":
        zone1 = "تهران منطقه 1";
        zone2 = "تهران منطقه 2";
        zone3 = "تهران منطقه 3";
        break;
      case "اصفهان":
        zone1 = "اصفهان منطقه 1";
        zone2 = "اصفهان منطقه 2";
        zone3 = "اصفهان منطقه 3";
        break;
      case "شیراز":
        zone1 = "شیراز منطقه 1";
        zone2 = "شیراز منطقه 2";
        zone3 = "شیراز منطقه 3";
        break;
      case "یزد":
        zone1 = "یزد منطقه 1";
        zone2 = "یزد منطقه 2";
        zone3 = "یزد منطقه 3";
        break;
      case "گیلان":
        zone1 = "گیلان منطقه 1";
        zone2 = "گیلان منطقه 2";
        zone3 = "گیلان منطقه 3";
        break;
    }

    return (
      <Container className="joinFormNumber1">
        <Row>
          <Col sm={6}>
            <Form>
              <Form.Group controlId="formBasicText">
                <Form.Label>نام و نام خانوادگی موسس</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="نام داروخانه شما در اپلیکیشن"
                  value={this.props.name}
                  onChange={this.props.handleName}
                />
              </Form.Group>
              <Form.Group controlId="formBasicText">
                <Form.Label>نام داروخانه / فروشگاه</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="نام داروخانه یا فروشگاه شما"
                  value={this.props.drugStoreName}
                  onChange={this.props.handleDrugstoreName}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>شهر</Form.Label>
                <Form.Control
                  as="select"
                  value={this.props.city}
                  onChange={(evt) => {
                    this.handleCityName(evt);
                    this.props.handleCityName(evt);
                  }}
                >
                  <option></option>
                  <option>تهران</option>
                  <option>اصفهان</option>
                  <option>شیراز</option>
                  <option>یزد</option>
                  <option>گیلان</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </Col>

          <Col sm={6}>
            <Form>
              <Form.Group controlId="formBasicText">
                <Form.Label>
                  شماره نظام پزشکی
                  <span> فقط عدد </span>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="فقط بخش عددی را وارد کنید"
                  value={this.props.medicalCouncilID}
                  onChange={this.props.handleMedicalCouncilID}
                />
              </Form.Group>
              <Form.Group controlId="formBasicText">
                <Form.Label>شماره داروخانه</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="اطلاعات تماس به کاربر نمایش داده میشود"
                  value={this.props.drugStoreNumber}
                  onChange={this.props.handleDrugstoreNumber}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>منطقه</Form.Label>
                <Form.Control
                  as="select"
                  value={this.props.zone}
                  onChange={this.props.handleZone}
                >
                  <option>{zone1}</option>
                  <option>{zone2}</option>
                  <option>{zone3}</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form>
              <Form.Group controlId="formBasicText">
                <Form.Label>آدرس دقیق</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="آدرس را با - جدا کنید"
                  value={this.props.address}
                  onChange={this.props.handleAddress}
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>

        <Row>
          <Col sm={6}>
            <div>
              <p>ساعات کاری</p>
            </div>
            <Form>
              <Row>
                <Col sm={3}>
                  <div className="workHours">
                    <Form.Check
                      type="radio"
                      id="daily"
                      label="روزانه"
                      checked={this.props.daily}
                      name="workHours"
                      className="radio"
                      onChange={this.props.handleDaily}
                    />
                  </div>
                </Col>
                <Col sm={4}>
                  <div className="workHours">
                    <Form.Check
                      type="radio"
                      id="dayAndNight"
                      label="شبانه روزی"
                      checked={this.props.dayAndNight}
                      name="workHours"
                      className="radio"
                      onChange={this.props.handleDayAndNight}
                    />
                  </div>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col sm={6}>
            <div>
              <p>ساعت کاری</p>
            </div>
            <Form>
              <Row>
                <Col sm={4}>
                  <Form.Group>
                    <Form.Label>پایان کار</Form.Label>
                    <Form.Control
                      type="number"
                      value={this.props.fromHour}
                      onChange={this.props.handleFromHour}
                    />
                  </Form.Group>
                </Col>
                <Col sm={4}>
                  <Form.Group>
                    <Form.Label>شروع کار</Form.Label>
                    <Form.Control
                      type="number"
                      value={this.props.tillHour}
                      onChange={this.props.handleTillHour}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default JoinFormNumber1;
