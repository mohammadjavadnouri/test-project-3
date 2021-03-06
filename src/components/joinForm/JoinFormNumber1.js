import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

class JoinFormNumber1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { city: "", zone1: "", zone2: "", zone3: "" };
    this.handleCityName = this.handleCityName.bind(this);
  }

  handleCityName(evt) {
    this.setState({ city: evt.target.value });
  }

  render() {
    return (
      <Container className="joinFormNumber1">
        <Row>
          <Col sm={6}>
            <Form>
              <Form.Group controlId="formBasicText">
                <Form.Label>نام و نام خانوادگی موسس</Form.Label>
                <Form.Label>
                  <small style={{ color: "red" }}>
                    *
                    {this.props.errors["name"]
                      ? this.props.errors["name"]
                      : null}
                  </small>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="نام شما در اپلیکیشن"
                  value={this.props.name}
                  onChange={this.props.handleName}
                />
              </Form.Group>
              <Form.Group controlId="formBasicText">
                <Form.Label>نام داروخانه / فروشگاه</Form.Label>
                <Form.Label>
                  <small style={{ color: "red" }}>
                    *
                    {this.props.errors["drugStoreName"]
                      ? this.props.errors["drugStoreName"]
                      : null}
                  </small>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="نام داروخانه یا فروشگاه شما"
                  value={this.props.drugStoreName}
                  onChange={this.props.handleDrugstoreName}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>شهر</Form.Label>
                <Form.Label>
                  <small style={{ color: "red" }}>
                    *
                    {this.props.errors["city"]
                      ? this.props.errors["city"]
                      : null}
                  </small>
                </Form.Label>
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
                <Form.Label>شماره نظام پزشکی</Form.Label>
                <Form.Label>
                  <small style={{ color: "red" }}>
                    *
                    {this.props.errors["medicalCouncilID"]
                      ? this.props.errors["medicalCouncilID"]
                      : null}
                  </small>
                </Form.Label>
                <Form.Control
                  placeholder="فقط بخش عددی را وارد کنید"
                  value={this.props.medicalCouncilID}
                  onChange={this.props.handleMedicalCouncilID}
                />
              </Form.Group>
              <Form.Group controlId="formBasicText">
                <Form.Label>شماره داروخانه</Form.Label>
                <Form.Label>
                  <small style={{ color: "red" }}>
                    *
                    {this.props.errors["drugStoreNumber"]
                      ? this.props.errors["drugStoreNumber"]
                      : null}
                  </small>
                </Form.Label>
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
                  <option>{this.props.zone1}</option>
                  <option>{this.props.zone2}</option>
                  <option>{this.props.zone3}</option>
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
                <Form.Label>
                  <small style={{ color: "red" }}>
                    *
                    {this.props.errors["address"]
                      ? this.props.errors["address"]
                      : null}
                  </small>
                </Form.Label>
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
              <p>
                ساعات کاری
                <small style={{ color: "red" }}>
                  *
                  {this.props.errors["dayAndNight"]
                    ? this.props.errors["dayAndNight"]
                    : null}
                </small>
              </p>
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
                    <Form.Label>شروع کار</Form.Label>
                    <Form.Label>
                      <small style={{ color: "red" }}>
                        *
                        {this.props.errors["fromHour"]
                          ? this.props.errors["fromHour"]
                          : null}
                      </small>
                    </Form.Label>
                    <Form.Control
                      type="string"
                      value={this.props.fromHour}
                      onChange={this.props.handleFromHour}
                    />
                  </Form.Group>
                </Col>
                <Col sm={4}>
                  <Form.Group>
                    <Form.Label>پایان کار</Form.Label>
                    <Form.Label>
                      <small style={{ color: "red" }}>
                        *
                        {this.props.errors["tillHour"]
                          ? this.props.errors["tillHour"]
                          : null}
                      </small>
                    </Form.Label>
                    <Form.Control
                      type="string"
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
