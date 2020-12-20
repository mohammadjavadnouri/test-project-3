import React from 'react';
import { Button, Form } from 'react-bootstrap';
 
class TellNumberInput extends React.Component {
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
            <Form className="tellNumberInput">
                <Form.Group >
                    <div>
                        <Form.Control 
                            type="number" 
                            placeholder="شماره همراه را وارد کنید 09000000000"
                            className="input"
                            style={ this.state.lengthValidation == 'شماره وارد شده صحیح نیست' ?
                                    {border:'solid orangeRed'} :
                                    null } 
                            onChange={this.handleChange}
                            />
                        <Button className="button" variant="primary" type="submit">
                        {this.props.buttonText}
                        </Button>
                    </div>
                    {this.state.lengthValidation == 'شماره وارد شده صحیح نیست' &&  
                    <div style={{display: 'inline-block'}}>
                        <i href="#" 
                        className="fa fa-exclamation-circle" 
                        style={{color: "orangeRed" }}
                        ></i>
                    </div>  }
                    <p style={ this.state.lengthValidation == 'شماره وارد شده صحیح نیست' ?
                                {color:'orangeRed', paddingRight: '8px', display: 'inline-block'} :
                                {color : 'lightGreen', paddingRight: '8px', display: 'inline-block'} }  >
                                {this.state.lengthValidation}
                    </p>
                </Form.Group>
            </Form>
        )
    }
}

export default TellNumberInput;