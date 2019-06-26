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

// Run "npm start" to start React app.
// Run "npm i" or "npm i [specific component name]" in the command line if there are any dependencies missing in the node modules folder.

class HealthCard extends React.Component {

    state = {
        name: "",
        showPreview: false,
    //     DOB: "",
    //     address: "",
        emergencyContact: ""
    //     emergencyContactPhone: "",
    //     insuranceProvider: "",
    //     policyNo: "",
    //     primaryCarePhysician: "",
    //     primaryCarePhysicianPhone: "",
    //     knownConditions: "",
    //     knownAllergens: "",
    //     medications: "",
    //     bloodType: "",
    //     organDonor: "",
    //     doNotResuscitate: ""
    };

    saveHealthCard = () => {
        console.log("Save!");
    }

    previewHealthCard = () => {
        // console.log("Print!");
        let name = document.getElementById("healthCardPage-fullName").value;
        let DOB = document.getElementById("healthCardPage-DOB").value;
        let address = document.getElementById("healthCardPage-address").value;
        let emergencyContact = document.getElementById("healthCardPage-emergencyContactName").value;
        let emergencyContactPhone = document.getElementById("healthCardPage-emergencyContactPhone").value;
        let primaryCarePhysician = document.getElementById("healthCardPage-primaryCarePhysician").value;
        let primaryCarePhysicianPhone = document.getElementById("healthCardPage-primaryCarePhysicianPhoneNumber").value;
        let healthInsuranceProvider = document.getElementById("healthCardPage-healthInsuranceProvider").value;
        let policyNo = document.getElementById("healthCardPage-policyNo").value;
        let knownAllergens = document.getElementById("healthCardPage-knownAllergens").value;
        let medications = document.getElementById("healthCardPage-medication").value;
        let knownConditions = document.getElementById("healthCardPage-medicalConditions").value;
        let bloodType= document.getElementById("healthCardPage-bloodType").value;
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
            
                <div style={{height: '100vh', width:'100vw'}}>
            
                    <HealthCardPreview 
                    name={this.state.name}
                    DOB={this.state.DOB}
                    address={this.state.address}
                    emergencyContact={this.state.emergencyContact}
                    emergencyContactPhone={this.state.emergencyContactPhone}
                    primaryCarePhysician={this.state.primaryCarePhysician}
                    primaryCarePhysicianPhone={this.state.primaryCarePhysicianPhone}
                    healthInsuranceProvider={this.state.healthInsuranceProvider}
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
                                        <button className="button1" id="healthCardPage-save" onClick={() => this.setState({showPreview: false})}>Close Preview</button>
                                        <div className="mainContentTextRed" id="calorieEntryPage-errorMessage"></div>
                                    </Col>
                                    <Col size="col-md-3"></Col>
                                </Row>
                            {/* </Col>
                        </Row> */}
                    </Container>
            <HamburgerMenu />

                </div>
            )
        }
        return(
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
                                        <input type="text" className="form-control" id="healthCardPage-fullName" placeholder="" autoComplete="off" maxlength="20"></input>   
                                        {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                        <Br />
                                        <Br />

                                        <p className="mainContentTextBlack">Date of birth:</p>
                                        <Br2 />
                                        <Br2 />
                                        <Br2 />
                                        <input type="text" className="form-control" id="healthCardPage-DOB" placeholder="MM/DD/YYYY" autoComplete="off" maxlength="10"></input>   
                                        {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                        <Br />
                                        <Br />

                                        <p className="mainContentTextBlack">Address:</p>
                                        <Br2 />
                                        <Br2 />
                                        <Br2 />
                                        <input type="text" className="form-control" id="healthCardPage-address" placeholder="" autoComplete="off" maxlength="30"></input>   
                                        {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                        <Br />
                                        <Br />

                                        <p className="mainContentTextBlack">Emergency contact name:</p>
                                        <Br2 />
                                        <Br2 />
                                        <Br2 />
                                        <input type="text" className="form-control" id="healthCardPage-emergencyContactName" placeholder="" autoComplete="off" maxlength="20"></input>   
                                        {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                        <Br />
                                        <Br />

                                        <p className="mainContentTextBlack">Emergency contact phone number:</p>
                                        <Br2 />
                                        <Br2 />
                                        <Br2 />
                                        <input type="text" pattern="/d" className="form-control" id="healthCardPage-emergencyContactPhone" placeholder="" autoComplete="off" maxlength="10"></input>   
                                        {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                        <Br />
                                        <Br />

                                        <p className="mainContentTextBlack">Health insurance provider:</p>
                                        <Br2 />
                                        <Br2 />
                                        <Br2 />
                                        <input type="text" className="form-control" id="healthCardPage-healthInsuranceProvider" placeholder="" autoComplete="off" maxlength="30"></input>   
                                        {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                        <Br />
                                        <Br />

                                        <p className="mainContentTextBlack">Policy number:</p>
                                        <Br2 />
                                        <Br2 />
                                        <Br2 />
                                        <input type="text" pattern="/d" className="form-control" id="healthCardPage-policyNo" placeholder="" autoComplete="off" maxlength="10"></input>   
                                        {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                        <Br />
                                        <Br />

                                        <p className="mainContentTextBlack">Primary care physician:</p>
                                        <Br2 />
                                        <Br2 />
                                        <Br2 />
                                        <input type="text" className="form-control" id="healthCardPage-primaryCarePhysician" placeholder="" autoComplete="off" maxlength="20"></input>   
                                        {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                        <Br />
                                        <Br />

                                        <p className="mainContentTextBlack">Primary care physician phone number:</p>
                                        <Br2 />
                                        <Br2 />
                                        <Br2 />
                                        <input type="text" pattern="/d" className="form-control" id="healthCardPage-primaryCarePhysicianPhoneNumber" placeholder="" autoComplete="off" maxlength="10"></input>   
                                        {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                        <Br />
                                        <Br />

                                        <p className="mainContentTextBlack">Medical conditions:</p>
                                        <Br2 />
                                        <Br2 />
                                        <Br2 />
                                        <textarea className="form-control" id="healthCardPage-medicalConditions" placeholder="" rows="4" autoComplete="off" maxlength="30"></textarea>     
                                        {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                        <Br />
                                        <Br />

                                        <p className="mainContentTextBlack">Medications:</p>
                                        <Br2 />
                                        <Br2 />
                                        <Br2 />
                                        <textarea className="form-control" id="healthCardPage-medication" placeholder="" rows="4" autoComplete="off" maxlength="30"></textarea> 
                                        {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                        <Br />
                                        <Br />

                                        <p className="mainContentTextBlack">Known allergies:</p>
                                        <Br2 />
                                        <Br2 />
                                        <Br2 />
                                        <textarea className="form-control" id="healthCardPage-knownAllergens" placeholder="" rows="4" autoComplete="off" maxlength="30"></textarea>    
                                        {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                        <Br />
                                        <Br />

                                        <p className="mainContentTextBlack">Blood type:</p>
                                        <select className="chosen-select dropDownMenu1" id="healthCardPage-bloodType">
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
                                        <select className="chosen-select dropDownMenu1" id="healthCardPage-doNotResuscitate">
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
                                        <select className="chosen-select dropDownMenu1" id="healthCardPage-organDonor">
                                            {/* IN ALPHABETICAL ORDER */}
                                            <option value="0"></option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select> 
                                    </Col>
                                </Row> 

                                <Br />
                                <Br />

                                {/* ------------------------------ */}
                                {/* Subrow (SAVE) */}
                                <Row>
                                    <Col size="col-md-12">
                                        <button className="button1" id="healthCardPage-save" onClick={this.saveHealthCard}>Save</button>
                                        <div className="mainContentTextRed" id="calorieEntryPage-errorMessage"></div>
                                    </Col>
                                </Row> 

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

                                <Br />
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