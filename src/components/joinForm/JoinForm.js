import React from 'react';
import {Container, Row, Col, FormGroup} from 'react-bootstrap';
import JoinFormNumber1 from './JoinFormNumber1';
import JoinFormNumber2 from './JoinFormNumber2';
import JoinFormNumber3 from './JoinFormNumber3';


class JoinForm extends React.Component{
    constructor() {
        super();
        this.state = {  x: 0, 
                        name: "",
                        drugStoreName: "" }
        this.increaseFunc = this.increaseFunc.bind(this)
        this.decreaseFunc = this.decreaseFunc.bind(this)
        this.handleName = this.handleName.bind(this)
    }
    increaseFunc(){
        this.setState({x : this.state.x + 1})
    }
    decreaseFunc(){
        this.state.x > 0 ? this.setState({x : this.state.x - 1}) : null;        
    }

    handleName(evt){
        this.setState({name : evt.target.value});
    }

    render(){
        const pageNumber = this.state.x;
        let formNumber;
        switch(pageNumber){
            case 0:
                formNumber = <JoinFormNumber1 
                                handleName={this.handleName}/>;
                break;
            case 1:
                formNumber = <JoinFormNumber2 />;
                break;
            case 2:
                formNumber = <JoinFormNumber3 
                                name={this.state.name}
                />;
                break;
            case 3:
                formNumber = <div>Modal</div>;
                break;
        }


        return(
            <Container>
                <Row>
                    {formNumber}
                </Row>
                <Row>
                    <button onClick={this.increaseFunc}>
                        {pageNumber === 2 ? "تکمیل ثبت نام":"مرحله بعد"}
                    </button>
                    <button onClick={this.decreaseFunc}>مرحله قبل</button>
                </Row>
            </Container>
        )
    }
}

export default JoinForm