import React from 'react';
import {Container, Row, Col, FormGroup, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import JoinFormNumber1 from './JoinFormNumber1';
import JoinFormNumber2 from './JoinFormNumber2';
import JoinFormNumber3 from './JoinFormNumber3';
import JoinFormNumber4 from './JoinFormNumber4';
import UploadImage from './UploadImage';

class JoinForm extends React.Component{
    constructor() {
        super();
        this.state = {  x: 0, 
                        name: "",
                        medicalCouncilID: "",
                        drugStoreName: "",
                        drugStoreNumber: "",
                        city: "",
                        zone: "",
                        address: "",
                        dayOrNight: "",
                        workingHour: "",
                        uploadedImageURL: ""
                         }
        this.increaseFunc = this.increaseFunc.bind(this)
        this.decreaseFunc = this.decreaseFunc.bind(this)
        this.handleName = this.handleName.bind(this)
        this.urlHandler = this.urlHandler.bind(this)
        this.handleDrugstoreName = this.handleDrugstoreName.bind(this)
        this.handleCity = this.handleCity.bind(this)
        this.handleMedicalCouncilID = this.handleMedicalCouncilID.bind(this)
        this.handleDrugstoreNumber = this.handleDrugstoreNumber.bind(this)
        this.handleZone = this.handleZone.bind(this)
        this.handleAddress = this.handleAddress.bind(this)
        this.handleDayOrNight = this.handleDayOrNight.bind(this)
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

    handleDrugstoreName(evt){
        this.setState({drugStoreName: evt.target.value})
    }

    handleCity(evt){
        this.setState({city: evt.target.value})
    }

    handleMedicalCouncilID(evt){
        this.setState({medicalCouncilID: evt.target.value})
    }

    handleDrugstoreNumber(evt){
      this.setState({drugStoreNumber: evt.target.value})  
    }

    handleZone(evt){
        this.setState({zone: evt.target.value})
    }

    handleAddress(evt){
        this.setState({address: evt.target.value})
    }

    handleDayOrNight(evt){
        this.setState({dayOrNight: evt.target.value})
    }



    urlHandler(evt){
        if (evt.target.files && evt.target.files[0]) {
          let img = evt.target.files[0];
          this.setState({uploadedImageURL: URL.createObjectURL(img)});
        }
    }

    render(){
        const pageNumber = this.state.x;
        let formNumber;
        switch(pageNumber){
            case 0:
                formNumber = <JoinFormNumber1 
                                handleName={this.handleName}
                                handleDrugstoreName={this.handleDrugstoreName}
                                handleCityName={this.handleCity}
                                handleMedicalCouncilID={this.handleMedicalCouncilID}
                                handleDrugstoreNumber={this.handleDrugstoreNumber}
                                handleZone={this.handleZone}
                                handleAddress={this.handleAddress}
                                handleDayOrNight={this.handleDayOrNight}
                                />;
                break;
            case 1:
                formNumber = <JoinFormNumber2 />;
                break;
            case 2:
                formNumber = <JoinFormNumber3 
                                name={this.state.name}
                                drugStoreName={this.state.drugStoreName}
                                cityName={this.state.city}
                                medicalCouncilID={this.state.medicalCouncilID}
                                uploadedImageURL={this.state.uploadedImageURL}
                                drugStoreNumber={this.state.drugStoreNumber}
                                zone={this.state.zone}
                                address={this.state.address}
                                dayOrNight={this.state.dayOrNight}

                />;
                break;
            case 3:
                formNumber = <JoinFormNumber4 />;
                break;
        }
        

        return(
            <Container className="joinForm">
                <Row>
                    {formNumber}
                    
                </Row>
                <Row>
                    {pageNumber === 0 ? <UploadImage 
                                            urlHandler={this.urlHandler}
                                            uploadText="آپلود عکس داروخانه"
                                            /> :null}
                    {pageNumber === 1 ? <UploadImage uploadText="آپلود عکس داروخانه قبلی"/> :null}
                </Row>
                <Row >
                    <div className="buttons">
                        {pageNumber === 2 ? 
                            <Button onClick={this.decreaseFunc}>ویرایش اطلاعات</Button> : 
                            pageNumber === 0 ? null : 
                            <Button onClick={this.decreaseFunc}>مرحله قبل</Button>}
                        {pageNumber === 3 ? 
                            null : 
                            pageNumber === 2 ? 
                            <Button onClick={this.increaseFunc}>تکمیل ثبت نام</Button> : 
                            <Button onClick={this.increaseFunc}>مرحله بعد</Button>}
                    </div>
                </Row>
            </Container>
        )
    }
}
 
export default JoinForm