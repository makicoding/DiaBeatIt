import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import HealthCardPreview from "./HealthCardPreview";
import { Container, Row, Col } from "../components/Grid";
import HamburgerMenu from "../components/HamburgerMenu";
import Br from "../components/CustomLineBreak";
import Br2 from "../components/CustomLineBreak2";
import "../components/Buttons/buttons.css";
import "../components/Text/text.css";
import HelloUserAndSignOut from "../components/HelloUserAndSignOut";
import "../components/PageWrapper/pageWrapper.css";
import "../components/MainContentContainer/mainContentContainer.css";
import "../components/InputAndSelectField/inputAndSelectField.css";
import API from "../utils/API";

// Run "npm start" to start React app.
// Run "npm i" or "npm i [specific component name]" in the command line if there are any dependencies missing in the node modules folder.
var userName = localStorage.getItem("username");
var userData = {"userName": userName}

class HealthCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            didSubmit: "No",
            showPreview: false,
            userInfo: []
        };

    }

    // saveHealthCard = () => {
    //     console.log("Save!");
    // }

    componentDidMount() {
        console.log("Component did mount " + userData.userName)
        this.loadMedId(userData.userName);
        // console.log(userInfo);
        // console.log(userData);
    }

    loadMedId = user => {
        console.log("loadMedId " + user);

        API.getMedId(user)
            .then(res => {
                this.setState({ 

                    // userInfo: res.data,
                    name: res.data[0].fullname,
                    DOB: res.data[0].dateofbirth,
                    address: res.data[0].address,
                    emergencyContactName: res.data[0].contactname,
                    emergencyContactPhone: res.data[0].contactphone,
                    healthInsuranceProvider: res.data[0].inscompany,
                    healthInsuranceProviderPhone: res.data[0].insphoneno,
                    policyNo: res.data[0].policyno,
                    primaryCarePhysician: res.data[0].primarycarephysician,
                    primaryCarePhysicianPhone: res.data[0].pcpphoneno,
                    knownConditions: res.data[0].medicalconditions,
                    medications: res.data[0].medications,
                    knownAllergens: res.data[0].allergies,
                    bloodType: res.data[0].bloodtype,
                    organDonor: res.data[0].organdonor,
                    doNotResuscitate: res.data[0].resuscitate

                });
            }
            )
            .catch(err => console.log(err)
            );
    };

    saveInfo = event => {
        API.saveMedId(event)
            .then(res => this.setState({ didSubmit: "Yes" }))
            .catch(err => console.log(err));
        this.setState({
            showPreview: false
        })
        window.scrollTo(0,0);
    }

    saveHealthCard = () => {
        let name = document.getElementById("healthCardPage-fullName").value;
        let DOB = document.getElementById("healthCardPage-DOB").value;
        let address = document.getElementById("healthCardPage-address").value;
        let emergencyContact = document.getElementById("healthCardPage-emergencyContactName").value;
        let emergencyContactPhone = document.getElementById("healthCardPage-emergencyContactPhone").value;
        let primaryCarePhysician = document.getElementById("healthCardPage-primaryCarePhysician").value;
        let primaryCarePhysicianPhone = document.getElementById("healthCardPage-primaryCarePhysicianPhoneNumber").value;
        let healthInsuranceProvider = document.getElementById("healthCardPage-healthInsuranceProvider").value;
        let healthInsuranceProviderPhone = document.getElementById("healthCardPage-healthInsuranceProviderPhone").value;
        let policyNo = document.getElementById("healthCardPage-policyNo").value;
        let knownAllergens = document.getElementById("healthCardPage-knownAllergens").value;
        let medications = document.getElementById("healthCardPage-medication").value;
        let knownConditions = document.getElementById("healthCardPage-medicalConditions").value;
        let bloodType = document.getElementById("healthCardPage-bloodType").value;
        let organDonor = document.getElementById("healthCardPage-organDonor").value;
        let doNotResuscitate = document.getElementById("healthCardPage-doNotResuscitate").value;

        var data = {
            username: userName,
            fullname: name,
            dateofbirth: DOB,
            address: address,
            contactname: emergencyContact,
            contactphone: emergencyContactPhone,
            inscompany: healthInsuranceProvider,
            insphoneno: healthInsuranceProviderPhone,
            policyno: policyNo,
            primarycarephysician: primaryCarePhysician,
            pcpphoneno: primaryCarePhysicianPhone,
            medicalconditions: knownConditions,
            medications: medications,
            allergies: knownAllergens,
            bloodtype: bloodType,
            resuscitate: doNotResuscitate,
            organdonor: organDonor,
            // showPreview: false
        };

        this.saveInfo(data);

    }

    localState = (event) => {

        let value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
        this.setState({
            [name]: value,
        });

    }

    previewHealthCard = () => {
        let name = document.getElementById("healthCardPage-fullName").value;
        let DOB = document.getElementById("healthCardPage-DOB").value;
        let address = document.getElementById("healthCardPage-address").value;
        let emergencyContact = document.getElementById("healthCardPage-emergencyContactName").value;
        let emergencyContactPhone = document.getElementById("healthCardPage-emergencyContactPhone").value;
        let primaryCarePhysician = document.getElementById("healthCardPage-primaryCarePhysician").value;
        let primaryCarePhysicianPhone = document.getElementById("healthCardPage-primaryCarePhysicianPhoneNumber").value;
        let healthInsuranceProvider = document.getElementById("healthCardPage-healthInsuranceProvider").value;
        let healthInsuranceProviderPhone = document.getElementById("healthCardPage-healthInsuranceProviderPhone").value;
        let policyNo = document.getElementById("healthCardPage-policyNo").value;
        let knownAllergens = document.getElementById("healthCardPage-knownAllergens").value;
        let medications = document.getElementById("healthCardPage-medication").value;
        let knownConditions = document.getElementById("healthCardPage-medicalConditions").value;
        let bloodType = document.getElementById("healthCardPage-bloodType").value;
        let organDonor = document.getElementById("healthCardPage-organDonor").value;
        let doNotResuscitate = document.getElementById("healthCardPage-doNotResuscitate").value;

        // // Updating the input's state
        this.setState({
            name: name,
            DOB: DOB,
            address: address,
            emergencyContact: emergencyContact,
            emergencyContactPhone: emergencyContactPhone,
            primaryCarePhysician: primaryCarePhysician,
            primaryCarePhysicianPhone: primaryCarePhysicianPhone,
            healthInsuranceProvider: healthInsuranceProvider,
            healthInsuranceProviderPhone: healthInsuranceProviderPhone,
            policyNo: policyNo,
            knownAllergens: knownAllergens,
            medications: medications,
            knownConditions: knownConditions,
            bloodType: bloodType,
            organDonor: organDonor,
            doNotResuscitate: doNotResuscitate,
            showPreview: true
        });

    }

    render() {
        if (this.state.showPreview) {
            return (

                <div className="cardPreview" style={{ height: '100vh', width: '75vw' }}>

                    <HealthCardPreview
                        name={this.state.name}
                        DOB={this.state.DOB}
                        address={this.state.address}
                        emergencyContact={this.state.emergencyContact}
                        emergencyContactPhone={this.state.emergencyContactPhone}
                        primaryCarePhysician={this.state.primaryCarePhysician}
                        primaryCarePhysicianPhone={this.state.primaryCarePhysicianPhone}
                        healthInsuranceProvider={this.state.healthInsuranceProvider}
                        healthInsuranceProviderPhone={this.state.healthInsuranceProviderPhone}
                        policyNo={this.state.policyNo}
                        knownAllergens={this.state.knownAllergens}
                        medications={this.state.medications}
                        knownConditions={this.state.knownConditions}
                        bloodType={this.state.bloodType}
                        organDonor={this.state.organDonor}
                        doNotResuscitate={this.state.doNotResuscitate}
                    />
                    <Container>
                        {/* <Row>
                            <Col> */}
                        <Row>
                            <Col size="col-md-3"></Col>
                            <Col size="col-md-6">
                                <button className="button1" id="healthCardPage-preview" onClick={() => this.setState({showPreview: false})}>Close Preview</button>
                                <div className="mainContentTextRed" id="calorieEntryPage-errorMessage"></div>
                            </Col>
                            <Col size="col-md-3"></Col>
                        </Row>
                        {/* </Col>
                        </Row> */}
                    </Container>
                    {/* <HamburgerMenu /> */}

                </div>
            )
        }
        return (
            <div>

                {/* ---------------------------------------- */}
                {/* MAIN CONTENT OF PAGE */}

                {/* Page Wrapper */}
                <div className="pageWrapper">

                    {/* Hello user first name text and sign out anchor */}
                    <HelloUserAndSignOut />

                    {/* Page header */}
                    <div className="pageHeader">Digital Health Card</div>

                    {/* Main content container */}
                    <div className="mainContentContainer">

                        {/* BOOTSTRAP GRID */}
                        {/* Max width 960px container */}
                        {/* Put any bootstrap elements into class="container" to set max width to 960px and have it centered on page */}
                        <Container>

                            {/* Calorie entry form */}
                            <Row>

                                <Col size="col-md-6 offset-md-3">

                                    <Br2 />

                                    {/* Subrow */}
                                    <Row>
                                        <Col size="col-md-12">
                                            <p className="mainContentTextBlack">This information can be printed and kept in your wallet for reference in case of an emergency:</p>
                                        </Col>
                                    </Row>

                                    <Br />

                                    {/* ------------------------------ */}
                                    {/* Subrow (FORM) */}
                                    <Row>
                                        <Col size="col-md-12">
                                            <p className="mainContentTextBlack">Full name:</p>
                                            <Br2 />
                                            <Br2 />
                                            <Br2 />
                                            <input type="text" name="name" value={this.state.name} className="form-control" id="healthCardPage-fullName" placeholder="" autoComplete="off" maxlength="20" onChange={this.localState}></input>
                                            {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                            <Br />
                                            <Br />

                                            <p className="mainContentTextBlack">DOB:</p>
                                            <Br2 />
                                            <Br2 />
                                            <Br2 />
                                            <input type="text" name="DOB" value={this.state.DOB} className="form-control" id="healthCardPage-DOB" placeholder="" autoComplete="off" maxlength="10" onChange={this.localState}></input>
                                            {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                            <Br />
                                            <Br />

                                            <p className="mainContentTextBlack">Address:</p>
                                            <Br2 />
                                            <Br2 />
                                            <Br2 />
                                            <input type="text" name="address" value={this.state.address} className="form-control" id="healthCardPage-address" placeholder="" autoComplete="off" maxlength="30" onChange={this.localState}></input>
                                            {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                            <Br />
                                            <Br />

                                            <p className="mainContentTextBlack">Emergency contact name:</p>
                                            <Br2 />
                                            <Br2 />
                                            <Br2 />
                                            <input type="text" name="emergencyContactName" value={this.state.emergencyContactName} className="form-control" id="healthCardPage-emergencyContactName" placeholder="" autoComplete="off" maxlength="20" onChange={this.localState}></input>
                                            {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                            <Br />
                                            <Br />

                                            <p className="mainContentTextBlack">Emergency contact phone number:</p>
                                            <Br2 />
                                            <Br2 />
                                            <Br2 />
                                            <input type="text" name="emergencyContactPhone" value={this.state.emergencyContactPhone} pattern="/d" className="form-control" id="healthCardPage-emergencyContactPhone" placeholder="" autoComplete="off" maxlength="20" onChange={this.localState}></input>
                                            {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                            <Br />
                                            <Br />

                                            <p className="mainContentTextBlack">Health Insurance Provider:</p>
                                            <Br2 />
                                            <Br2 />
                                            <Br2 />
                                            <input type="text" name="healthInsuranceProvider" value={this.state.healthInsuranceProvider} className="form-control" id="healthCardPage-healthInsuranceProvider" placeholder="" autoComplete="off" maxlength="30" onChange={this.localState}></input>
                                            {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                            <Br />
                                            <Br />

                                            <p className="mainContentTextBlack">Phone:</p>
                                            <Br2 />
                                            <Br2 />
                                            <Br2 />
                                            <input type="text" name="healthInsuranceProviderPhone" value={this.state.healthInsuranceProviderPhone} className="form-control" id="healthCardPage-healthInsuranceProviderPhone" placeholder="" autoComplete="off" maxlength="30" onChange={this.localState}></input>
                                            {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                            <Br />
                                            <Br />

                                            <p className="mainContentTextBlack">Policy No:</p>
                                            <Br2 />
                                            <Br2 />
                                            <Br2 />
                                            <input type="text" name="policyNo" value={this.state.policyNo} pattern="/d" className="form-control" id="healthCardPage-policyNo" placeholder="" autoComplete="off" maxlength="15" onChange={this.localState}></input>
                                            {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                            <Br />
                                            <Br />

                                            <p className="mainContentTextBlack">Primary care physician:</p>
                                            <Br2 />
                                            <Br2 />
                                            <Br2 />
                                            <input type="text" name="primaryCarePhysician" value={this.state.primaryCarePhysician} className="form-control" id="healthCardPage-primaryCarePhysician" placeholder="" autoComplete="off" maxlength="20" onChange={this.localState}></input>
                                            {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                            <Br />
                                            <Br />

                                            <p className="mainContentTextBlack">Primary care physician phone number:</p>
                                            <Br2 />
                                            <Br2 />
                                            <Br2 />
                                            <input type="text" name="primaryCarePhysicianPhone" value={this.state.primaryCarePhysicianPhone} pattern="/d" className="form-control" id="healthCardPage-primaryCarePhysicianPhoneNumber" placeholder="" autoComplete="off" maxlength="20" onChange={this.localState}></input>
                                            {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                            <Br />
                                            <Br />

                                            <p className="mainContentTextBlack">Medical conditions:</p>
                                            <Br2 />
                                            <Br2 />
                                            <Br2 />
                                            <textarea name="knownConditions" value={this.state.knownConditions} className="form-control" id="healthCardPage-medicalConditions" placeholder="" rows="4" autoComplete="off" maxlength="50" onChange={this.localState}></textarea>
                                            {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                            <Br />
                                            <Br />

                                            <p className="mainContentTextBlack">Medications:</p>
                                            <Br2 />
                                            <Br2 />
                                            <Br2 />
                                            <textarea name="medications" value={this.state.medications} className="form-control" id="healthCardPage-medication" placeholder="" rows="4" autoComplete="off" maxlength="50" onChange={this.localState}></textarea>
                                            {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                            <Br />
                                            <Br />

                                            <p className="mainContentTextBlack">Known allergies:</p>
                                            <Br2 />
                                            <Br2 />
                                            <Br2 />
                                            <textarea name="knownAllergens" value={this.state.knownAllergens} className="form-control" id="healthCardPage-knownAllergens" placeholder="" rows="4" autoComplete="off" maxlength="30" onChange={this.localState}></textarea>
                                            {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                            <Br />
                                            <Br />

                                            <p className="mainContentTextBlack">Blood type:</p>
                                            <select name="bloodType" value={this.state.bloodType} className="chosen-select dropDownMenu1" id="healthCardPage-bloodType" onChange={this.localState}>
                                                {/* IN ALPHABETICAL ORDER */}
                                                <option value="0"></option>
                                                <option value="A-positive">A-positive</option>
                                                <option value="A-negative">A-negative</option>
                                                <option value="B-positive">B-positive</option>
                                                <option value="B-negative">B-negative</option>
                                                <option value="AB-positive">AB-positive</option>
                                                <option value="AB-negative">AB-negative</option>
                                                <option value="O-positive">O-positive</option>
                                                <option value="O-negative">O-negative</option>
                                            </select>
                                        </Col>
                                    </Row>

                                    <Br />
                                    <Br />

                                    {/* Subrow */}
                                    <Row>
                                        <Col size="col-md-4">
                                            <p className="mainContentTextBlack">Do not resuscitate:</p>
                                        </Col>

                                        <Col size="col-md-12">
                                            <select name="doNotResuscitate" value={this.state.doNotResuscitate} className="chosen-select dropDownMenu1" id="healthCardPage-doNotResuscitate" onChange={this.localState}>
                                                {/* IN ALPHABETICAL ORDER */}
                                                <option value="0"></option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </Col>
                                    </Row>

                                    <Br />
                                    <Br />

                                    {/* Subrow */}
                                    <Row>
                                        <Col size="col-md-4">
                                            <p className="mainContentTextBlack">Organ donor:</p>
                                        </Col>

                                        <Col size="col-md-12">
                                            <select name="organDonor" value={this.state.organDonor} className="chosen-select dropDownMenu1" id="healthCardPage-organDonor" onChange={this.localState}>
                                                {/* IN ALPHABETICAL ORDER */}
                                                <option value="0"></option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </Col>
                                    </Row>

                                    <Br />
                                    <Br />
                                    <Br />

                                    {/* ------------------------------ */}
                                    {/* Subrow (PRINT) */}
                                    <Row>
                                        <Col size="col-md-12">
                                            <button className="button1" id="healthCardPage-save" onClick={this.previewHealthCard}>Preview</button>

                                            {/* <button className="button1" id="healthCardPage-save" onClick={() => this.setState({showPreview: true})}>Preview</button> */}
                                            <div className="mainContentTextRed" id="calorieEntryPage-errorMessage"></div>
                                        </Col>
                                        {/* <Link to="/Preview" role="button" className="button1">
                                Preview
                                </Link>{" "}
 
                                <Route exact path="/Preview" component={HealthCardPreview} />
                                    <Col size="col-md-12">
                                        <button className="button1" id="healthCardPage-print" onClick={this.previewHealthCard}>Preview</button>
                                        <Route exact path="Preview" component={HealthCardPreview} />
                                    </Col> */}
                                    </Row>
                                    {/* ------------------------------ */}
                                    {/* Subrow (SAVE) */}

                                    <Row>
                                        <Col size="col-md-12">
                                            <button className="button1" id="healthCardPage-save" onClick={this.saveHealthCard}>Save</button>
                                            <div className="mainContentTextRed" id="calorieEntryPage-errorMessage"></div>
                                        </Col>
                                    </Row> 

                                    <Br />
                                    <Br />

                                </Col>

                            </Row>

                        </Container>

                    </div>

                </div>


                {/* ---------------------------------------- */}
                {/* HAMBURGER MENU */}

                <HamburgerMenu />

            </div>
        )
    }
}

export default HealthCard;