import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

class JoinFormNumber2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { city2: "", zone1: "", zone2: "", zone3: "" };
    this.handleCityName2 = this.handleCityName2.bind(this);
  }

  handleCityName2(evt) {
    this.setState({ city2: evt.target.value });

    switch (evt.target.value) {
      case "تهران":
        this.setState({ zone1: "تهران منطقه 1" });
        this.setState({ zone2: "تهران منطقه 2" });
        this.setState({ zone3: "تهران منطقه 3" });
        break;
      case "اصفهان":
        this.setState({ zone1: "اصفهان منطقه 1" });
        this.setState({ zone2: "اصفهان منطقه 2" });
        this.setState({ zone3: "اصفهان منطقه 3" });
        break;
      case "شیراز":
        this.setState({ zone1: "شیراز منطقه 1" });
        this.setState({ zone2: "شیراز منطقه 2" });
        this.setState({ zone3: "شیراز منطقه 3" });
        break;
      case "یزد":
        this.setState({ zone1: "یزد منطقه 1" });
        this.setState({ zone2: "یزد منطقه 2" });
        this.setState({ zone3: "یزد منطقه 3" });
        break;
      case "گیلان":
        this.setState({ zone1: "گیلان منطقه 1" });
        this.setState({ zone2: "گیلان منطقه 2" });
        this.setState({ zone3: "گیلان منطقه 3" });
        break;
    }
  }

  render() {
    return (
      <Container className="joinFormNumber1">
        <Row>
          <Col sm={6}>
            <Form>
              <Form.Group controlId="formBasicText">
                <Form.Label>نام و نام خانوادگی موسس 2</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="2 نام شما در اپلیکیشن"
                  value={this.props.name2}
                  onChange={this.props.handleName2}
                />
              </Form.Group>
              <Form.Group controlId="formBasicText">
                <Form.Label> نام داروخانه / فروشگاه 2</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="نام داروخانه یا فروشگاه 2 شما"
                  value={this.props.drugStoreName2}
                  onChange={this.props.handleDrugstoreName2}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>شهر 2</Form.Label>
                <Form.Control
                  as="select"
                  onChange={(evt) => {
                    this.handleCityName2(evt);
                    this.props.handleCityName2(evt);
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
                  {" "}
                  شماره نظام پزشکی 2<span> فقط عدد </span>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="فقط بخش عددی را وارد کنید"
                  value={this.props.medicalCouncilID2}
                  onChange={this.props.handleMedicalCouncilID2}
                />
              </Form.Group>
              <Form.Group controlId="formBasicText">
                <Form.Label>شماره داروخانه 2</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="اطلاعات تماس به کاربر نمایش داده میشود"
                  value={this.props.drugStoreNumber2}
                  onChange={this.props.handleDrugstoreNumber2}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>منطقه 2</Form.Label>
                <Form.Control
                  as="select"
                  value={this.props.zone2}
                  onChange={this.props.handleZone2}
                >
                  <option>{this.state.zone1}</option>
                  <option>{this.state.zone2}</option>
                  <option>{this.state.zone3}</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form>
              <Form.Group controlId="formBasicText">
                <Form.Label> آدرس دقیق داروخانه 2</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="آدرس را با - جدا کنید"
                  value={this.props.address2}
                  onChange={this.props.handleAddress2}
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>

        <Row>
          <Col sm={6}>
            <div>
              <p>ساعات کاری داروخانه 2</p>
            </div>
            <Form>
              <Row>
                <Col sm={3}>
                  <div className="workHours">
                    <Form.Check
                      type="radio"
                      id="daily"
                      label="روزانه"
                      checked={this.props.daily2}
                      name="workHours"
                      className="radio"
                      onChange={this.props.handleDaily2}
                    />
                  </div>
                </Col>
                <Col sm={4}>
                  <div className="workHours">
                    <Form.Check
                      type="radio"
                      id="dayAndNight"
                      label="شبانه روزی"
                      checked={this.props.dayAndNight2}
                      name="workHours"
                      className="radio"
                      onChange={this.props.handleDayAndNight2}
                    />
                  </div>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col sm={6}>
            <div>
              <p>ساعت کاری داروخانه 2</p>
            </div>
            <Form>
              <Row>
                <Col sm={3}>
                  <Form.Control
                    type="string"
                    value={this.props.fromHour2}
                    onChange={this.props.handleFromHour2}
                  />
                </Col>
                <Col sm={3}>
                  <Form.Control
                    type="string"
                    value={this.props.tillHour2}
                    onChange={this.props.handleTillHour2}
                  />
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default JoinFormNumber2;
