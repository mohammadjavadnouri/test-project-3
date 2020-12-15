import React from 'react';
import {Container, Row, Col, Form, Button } from 'react-bootstrap';

class JoinFormNumber1 extends React.Component {
    constructor() {
        super();
        this.state = { city: '' };
        this.handleCityName = this.handleCityName.bind(this);
    }

    handleCityName(evt){
        this.setState({city: evt.target.value})
        
    }

    render () {
        let zone1;
        let zone2;
        let zone3;

        switch(this.state.city){
            case "تهران" :
                zone1 = "تهران منطقه 1"
                zone2 = "تهران منطقه 2"
                zone3 = "تهران منطقه 3"
                break
            case "اصفهان" :
                zone1 = "اصفهان منطقه 1"
                zone2 = "اصفهان منطقه 2"
                zone3 = "اصفهان منطقه 3"
                break
            case "شیراز" :
                zone1 = "شیراز منطقه 1"
                zone2 = "شیراز منطقه 2"
                zone3 = "شیراز منطقه 3"
                break
            case "یزد" :
                zone1 = "یزد منطقه 1"
                zone2 = "یزد منطقه 2"
                zone3 = "یزد منطقه 3"
                break
            case "گیلان" :
                zone1 = "گیلان منطقه 1"
                zone2 = "گیلان منطقه 2"
                zone3 = "گیلان منطقه 3"
                break
            
        }

        return(
            <Container className="joinFormNumber1">
            <Row>
                <Col sm={6}>
                    <Form>
                        <Form.Group controlId="formBasicText">
                            <Form.Label>نام و نام  خانوادگی موسس</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="نام داروخانه شما در اپلیکیشن" 
                                onChange={this.props.handleName}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicText">
                            <Form.Label>نام داروخانه / فروشگاه</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="نام داروخانه یا فروشگاه شما"
                                onChange={this.props.handleDrugstoreName} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>شهر</Form.Label>
                            <Form.Control 
                                as="select" 
                                onChange={(evt) => {this.handleCityName(evt); this.props.handleCityName(evt)} }
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
                            <Form.Label>شماره نظام پزشکی
                                
                                <span>{" "} فقط عدد </span>
                            </Form.Label>
                            <Form.Control 
                                type="number" 
                                placeholder="فقط بخش عددی را وارد کنید"
                                onChange={this.props.handleMedicalCouncilID} />
                        </Form.Group>
                        <Form.Group controlId="formBasicText">
                            <Form.Label>شماره داروخانه</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="اطلاعات تماس به کاربر نمایش داده میشود" 
                                onChange={this.props.handleDrugstoreNumber}
                                />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1" >
                            <Form.Label>منطقه</Form.Label>
                            <Form.Control 
                                as="select" 
                                onChange={this.props.handleZone}>
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
                                onChange={this.props.handleAddress} />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>

            <Row>
                <Col sm={6}>
                    <div>
                        <p>
                            ساعات کاری
                        </p>
                    </div>
                    <Form>
                        <Row>
                            <Col sm={3}>
                                <div  className="workHours">
                                    <Form.Check
                                        type="radio"
                                        id="daily"
                                        label="روزانه"
                                        value="daily"
                                        name="workHours"
                                        className="radio"
                                        onChange={this.props.handleDayOrNight}
                                    />
                                </div>
                            </Col>
                            <Col sm={4} >
                                <div  className="workHours">
                                    <Form.Check
                                        type="radio"
                                        id="dayAndNight"
                                        label="شبانه روزی"
                                        value="dayAndNight"
                                        name="workHours"
                                        className="radio"
                                        onChange={this.props.handleDayOrNight}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Form>
                </Col>
                <Col sm={6}>
                    <div>
                        <p>
                            ساعت کاری
                        </p>
                    </div>
                    <Form>
                        <Row>
                            <Col sm={3} >
                                <Form.Control type="string"/>
                            </Col>
                            <Col sm={3} >
                                <Form.Control type="string"/>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
            
        </Container>
        )
    }

}

export default JoinFormNumber1;