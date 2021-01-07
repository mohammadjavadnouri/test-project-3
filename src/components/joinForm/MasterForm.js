import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import JoinFormNumber1 from "./JoinFormNumber1";
import JoinFormNumber2 from "./JoinFormNumber2";
import JoinFormNumber3 from "./JoinFormNumber3";
import JoinFormNumber4 from "./JoinFormNumber4";
import UploadImage from "./UploadImage";

class MasterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
      errors: {},
      name: "",
      name2: "",
      medicalCouncilID: "",
      medicalCouncilID2: "",
      drugStoreName: "",
      drugStoreName2: "",
      drugStoreNumber: "",
      drugStoreNumber2: "",
      city: "",
      city2: "",
      zone: "",
      zone2: "",
      address: "",
      address2: "",
      daily: "",
      daily2: "",
      dayAndNight: "",
      dayAndNight2: "",
      workingHour: "",
      workingHour2: "",
      fromHour: "",
      tillHour: "",
      fromHour2: "",
      tillHour2: "",
      uploadedImageURL: "",
      uploadedImageURL2: "",
    };
    //this.increaseFunc = this.increaseFunc.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
    this.decreaseFunc = this.decreaseFunc.bind(this);
    this.handleName = this.handleName.bind(this);
    this.urlHandler = this.urlHandler.bind(this);
    this.handleDrugstoreName = this.handleDrugstoreName.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleMedicalCouncilID = this.handleMedicalCouncilID.bind(this);
    this.handleDrugstoreNumber = this.handleDrugstoreNumber.bind(this);
    this.handleZone = this.handleZone.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleDaily = this.handleDaily.bind(this);
    this.handleDayAndNight = this.handleDayAndNight.bind(this);
    this.handleFromHour = this.handleFromHour.bind(this);
    this.handleTillHour = this.handleTillHour.bind(this);
    this.handleName2 = this.handleName2.bind(this);
    this.handleDrugstoreName2 = this.handleDrugstoreName2.bind(this);
    this.handleCityName2 = this.handleCityName2.bind(this);
    this.handleMedicalCouncilID2 = this.handleMedicalCouncilID2.bind(this);
    this.handleDrugstoreNumber2 = this.handleDrugstoreNumber2.bind(this);
    this.handleZone2 = this.handleZone2.bind(this);
    this.handleAddress2 = this.handleAddress2.bind(this);
    this.handleDaily2 = this.handleDaily2.bind(this);
    this.handleDayAndNight2 = this.handleDayAndNight2.bind(this);
    this.handleTillHour2 = this.handleTillHour2.bind(this);
    this.handleFromHour2 = this.handleFromHour2.bind(this);
  }

  handleValidation() {
    let errors = {};
    let formIsValid = true;

    if (!this.state.name) {
      formIsValid = false;
      errors["name"] = "تکمیل این فیلد اجباری است";
    }

    if (this.state.name) {
      if (!this.state.name.match(/^[a-zA-Zا-ی]+$/)) {
        formIsValid = false;
        errors["name"] = " فقط حروف فارسی یا انگلیسی";
      }
    }

    if (!this.state.drugStoreName) {
      formIsValid = false;
      errors["drugStoreName"] = "تکمیل این فیلد اجباری است";
    }

    if (!this.state.city) {
      formIsValid = false;
      errors["city"] = "تکمیل این فیلد اجباری است";
    }

    if (!this.state.medicalCouncilID) {
      formIsValid = false;
      errors["medicalCouncilID"] = "تکمیل این فیلد اجباری است";
    }

    if (this.state.medicalCouncilID) {
      if (!this.state.medicalCouncilID.match(/^[0-9]+$/)) {
        formIsValid = false;
        errors["medicalCouncilID"] = " فقط عدد";
      }
    }

    if (!this.state.drugStoreNumber) {
      formIsValid = false;
      errors["drugStoreNumber"] = "تکمیل این فیلد اجباری است";
    }

    if (this.state.drugStoreNumber) {
      if (!this.state.drugStoreNumber.match(/^[0-9]+$/)) {
        formIsValid = false;
        errors["drugStoreNumber"] = " فقط عدد";
      }
    }

    if (!this.state.address) {
      formIsValid = false;
      errors["address"] = "تکمیل این فیلد اجباری است";
    }

    if (!this.state.daily && !this.state.dayAndNight) {
      formIsValid = false;
      errors["dayAndNight"] = "تکمیل این فیلد اجباری است";
    }

    if (!this.state.fromHour) {
      formIsValid = false;
      errors["fromHour"] = "فیلد اجباری";
    }

    if (this.state.fromHour) {
      if (!this.state.fromHour.match(/^[0-9,:]+$/)) {
        formIsValid = false;
        errors["fromHour"] = "فقط عدد و  : ";
      }
    }

    if (!this.state.tillHour) {
      formIsValid = false;
      errors["tillHour"] = "فیلد اجباری";
    }

    if (this.state.tillHour) {
      if (!this.state.tillHour.match(/^[0-9,:]+$/)) {
        formIsValid = false;
        errors["tillHour"] = "فقط عدد و  : ";
      }
    }

    if (formIsValid) {
      errors = {};
      this.setState({ errors: {} });
      this.increaseFunc = this.increaseFunc.bind(this);
      this.increaseFunc();
    } else this.setState({ errors: errors });
  }

  increaseFunc() {
    this.setState({ currentStep: this.state.currentStep + 1 });
  }

  decreaseFunc() {
    this.state.currentStep > 0
      ? this.setState({ currentStep: this.state.currentStep - 1 })
      : null;
  }

  handleName(evt) {
    this.setState({ name: evt.target.value });
  }

  handleDrugstoreName(evt) {
    this.setState({ drugStoreName: evt.target.value });
  }

  handleCity(evt) {
    this.setState({ city: evt.target.value });
  }

  handleMedicalCouncilID(evt) {
    this.setState({ medicalCouncilID: evt.target.value });
  }

  handleDrugstoreNumber(evt) {
    this.setState({ drugStoreNumber: evt.target.value });
  }

  handleZone(evt) {
    this.setState({ zone: evt.target.value });
  }

  handleAddress(evt) {
    this.setState({ address: evt.target.value });
  }

  handleDaily() {
    if (!this.state.dayAndNight) {
      this.setState({ daily: "checked" });
    } else {
      this.setState({ dayAndNight: "" });
      this.setState({ daily: "checked" });
    }
  }

  handleDayAndNight() {
    if (!this.state.daily) {
      this.setState({ dayAndNight: "checked" });
    } else {
      this.setState({ daily: "" });
      this.setState({ dayAndNight: "checked" });
    }
  }

  handleFromHour(evt) {
    this.setState({ fromHour: evt.target.value });
  }
  handleTillHour(evt) {
    this.setState({ tillHour: evt.target.value });
  }
  handleName2(evt) {
    this.setState({ name2: evt.target.value });
  }
  handleDrugstoreName2(evt) {
    this.setState({ drugStoreName2: evt.target.value });
  }
  handleCityName2(evt) {
    this.setState({ city2: evt.target.value });
  }
  handleMedicalCouncilID2(evt) {
    this.setState({ medicalCouncilID2: evt.target.value });
  }
  handleDrugstoreNumber2(evt) {
    this.setState({ drugStoreNumber2: evt.target.value });
  }
  handleZone2(evt) {
    this.setState({ zone2: evt.target.value });
  }
  handleAddress2(evt) {
    this.setState({ address2: evt.target.value });
  }
  handleDaily2() {
    if (!this.state.dayAndNight2) {
      this.setState({ daily2: "checked" });
    } else {
      this.setState({ dayAndNight2: "" });
      this.setState({ daily2: "checked" });
    }
  }

  handleDayAndNight2() {
    if (!this.state.daily2) {
      this.setState({ dayAndNight2: "checked" });
    } else {
      this.setState({ daily2: "" });
      this.setState({ dayAndNight2: "checked" });
    }
  }

  handleFromHour2(evt) {
    this.setState({ fromHour2: evt.target.value });
  }
  handleTillHour2(evt) {
    this.setState({ tillHour2: evt.target.value });
  }

  urlHandler(evt) {
    if (evt.target.files && evt.target.files[0]) {
      let img = evt.target.files[0];
      this.setState({ uploadedImageURL: URL.createObjectURL(img) });
    }
  }

  render() {
    return (
      <Container className="joinForm">
        <Row>
          <JoinFormNumber1
            currentStep={this.state.currentStep}
            errors={this.state.errors}
            handleName={this.handleName}
            name={this.state.name}
            handleDrugstoreName={this.handleDrugstoreName}
            drugStoreName={this.state.drugStoreName}
            handleCityName={this.handleCity}
            city={this.state.city}
            handleMedicalCouncilID={this.handleMedicalCouncilID}
            medicalCouncilID={this.state.medicalCouncilID}
            handleDrugstoreNumber={this.handleDrugstoreNumber}
            drugStoreNumber={this.state.drugStoreNumber}
            handleZone={this.handleZone}
            zone={this.state.zone}
            handleAddress={this.handleAddress}
            address={this.state.address}
            handleDaily={this.handleDaily}
            daily={this.state.daily}
            handleDayAndNight={this.handleDayAndNight}
            dayAndNight={this.state.dayAndNight}
            handleFromHour={this.handleFromHour}
            fromHour={this.state.fromHour}
            handleTillHour={this.handleTillHour}
            tillHour={this.state.tillHour}
          />
          <JoinFormNumber2
            currentStep={this.state.currentStep}
            handleName2={this.handleName2}
            name2={this.state.name2}
            handleDrugstoreName2={this.handleDrugstoreName2}
            drugStoreName2={this.state.drugStoreName2}
            handleCityName2={this.handleCityName2}
            city2={this.state.city2}
            handleMedicalCouncilID2={this.handleMedicalCouncilID2}
            medicalCouncilID2={this.state.medicalCouncilID2}
            handleDrugstoreNumber2={this.handleDrugstoreNumber2}
            drugStoreNumber2={this.state.drugStoreNumber2}
            handleZone2={this.handleZone2}
            zone2={this.state.zone2}
            handleAddress2={this.handleAddress2}
            address2={this.state.address2}
            handleDaily2={this.handleDaily2}
            daily2={this.state.daily2}
            handleDayAndNight2={this.handleDayAndNight2}
            dayAndNight2={this.state.dayAndNight2}
            handleFromHour2={this.handleFromHour2}
            fromHour2={this.state.fromHour2}
            handleTillHour2={this.handleTillHour2}
            tillHour2={this.state.tillHour2}
          />
          <JoinFormNumber3
            currentStep={this.state.currentStep}
            name={this.state.name}
            drugStoreName={this.state.drugStoreName}
            cityName={this.state.city}
            medicalCouncilID={this.state.medicalCouncilID}
            uploadedImageURL={this.state.uploadedImageURL}
            drugStoreNumber={this.state.drugStoreNumber}
            zone={this.state.zone}
            address={this.state.address}
            daily={this.state.daily}
            dayAndNight={this.state.dayAndNight}
          />
          <JoinFormNumber4 currentStep={this.state.currentStep} />
        </Row>
        <Row>
          {this.state.currentStep === 0 ? (
            <UploadImage
              urlHandler={this.urlHandler}
              uploadText="آپلود عکس داروخانه"
            />
          ) : null}
          {this.state.currentStep === 1 ? (
            <UploadImage uploadText="آپلود عکس داروخانه 2" />
          ) : null}
        </Row>
        <Row>
          <div className="buttons">
            {this.state.currentStep === 2 ? (
              <Button onClick={this.decreaseFunc}>ویرایش اطلاعات</Button>
            ) : this.state.currentStep === 0 ? null : (
              <Button onClick={this.decreaseFunc}>مرحله قبل</Button>
            )}
            {this.state.currentStep === 3 ? null : this.state.currentStep ===
              2 ? (
              <Button onClick={this.increaseFunc}>تکمیل ثبت نام</Button>
            ) : (
              <Button onClick={this.handleValidation}>مرحله بعد</Button>
            )}
          </div>
        </Row>
      </Container>
    );
  }
}

export default MasterForm;
