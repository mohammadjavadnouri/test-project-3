import React from 'react';
import { Container, Col, Row, Button, Nav, Image, Form, InputGroup } from 'react-bootstrap';
import damanitoApp from "../../assets/DarmanitoApp.png";
import downloadBlueButton from "../../assets/downloadBlueButton.png";
import bazzarBlueButton from "../../assets/bazzarBlueButton.png";
import sibAppBlueButton from "../../assets/sibAppBlueButton.png";

class BlueDownload extends React.Component{
    constructor () {
        super();
        this.state = { lengthValidation: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        const checker = evt.target.value.length == 11 ? 'شماره وارد شده صحیح است' : 'شماره وارد شده صحیح نیست'
        this.setState({ lengthValidation: checker});
    } 
    render () {
        return (
            <Row className="blueDownload" >
                <Col sm={6} className="right" >
                    <h4>دانلود اپلیکیشن درمانیتو</h4>
                    <p>برای دریافت لینک دانلود شماره موبایل خود را وارد کنید</p>
                    <Form>
                        <Form.Group >
                            <div>
                                <Form.Control 
                                    type="number" 
                                    placeholder="شماره همراه را وارد کنید 09000000000"
                                    aria-describedby="inputGroupPrepend"
                                    className="input"
                                    onChange={this.handleChange}
                                    />
                                <Button className="button" variant="primary" type="submit">
                                بفرست
                                </Button>
                            </div>
                            <div>
                                <p style={ this.state.lengthValidation == 'شماره وارد شده صحیح نیست' ?
                                            { color:'orangeRed'} :
                                            {color : 'lightGreen'} }  >
                                            {this.state.lengthValidation}
                                </p>
                            </div>
                        </Form.Group>
                    </Form>
                    <div className="store">
                        <Image className="store__icon" src={downloadBlueButton}/>
                        <Image className="store__icon" src={bazzarBlueButton}/>
                        <Image className="store__icon" src={sibAppBlueButton}/>
                    </div>
                </Col>
                <Col sm={6} className="left" >
                    <Image className="left__image"  src={damanitoApp}/>
                </Col>
            </Row>
        );
    }
}
export default BlueDownload;