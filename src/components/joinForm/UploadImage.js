import React from 'react';
import {Row, Col, Container, Button, Form} from 'react-bootstrap';

class UploadImage extends React.Component{

    render(){
        return(
            <Container className="uploadImage">
                <Row>
                    <Form>
                        <Form.Group>
                            <Form.File 
                                id="exampleFormControlFile1" 
                                label={this.props.uploadText}
                                key="a"
                                onChange={this.props.urlHandler} />
                        </Form.Group>
                    </Form>
                </Row>
            </Container>
        )
    }
}

export default UploadImage;
