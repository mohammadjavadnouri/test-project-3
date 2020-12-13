import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class JoinForm extends React.Component{
    constructor(){
        super();
        this.state = { x:0 }
        this.increaseFunc = this.increaseFunc.bind(this)
        this.decreaseFunc = this.decreaseFunc.bind(this)
    }

    
    increaseFunc(){
 
        this.setState({x : this.state.x + 1})
    }

    decreaseFunc(){
        this.setState({x : this.state.x - 1})
    }

    render(){
        return(
            <div>
                <h1>Join form multi step comp1</h1>
                <button onClick={this.increaseFunc}>next</button>
                <button onClick={this.decreaseFunc}>previous</button>
                <h1>form number: {this.state.x}</h1>
            </div>
        )
    }
}

export default JoinForm