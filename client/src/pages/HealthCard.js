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

var userName= localStorage.getItem("username");

class HealthCard extends React.Component {
constructor(props) {
super(props);
this.state = {
didSubmit: "No"
};
}
// This function will call the post route
handleMedIdSave = event => {
    API.saveMedId(event)
    .then(res => this.setState({didSubmit:"Yes"}))
.catch(err => console.log(err));
}

prepareData = () => {
        var data = {
            username: userName,
            patientname: "bill",
            contactname: "james bond",
            contactphone: "007",
            insurancecompany: "healthnet",
            policyno: "String",
            primarycarephysician: "dr. no",
            medicalconditions: "killer",
            medication: "diamonds",
            allergies: "bad guys",
            bloodtype: "gold",
            resuscitate: 0,
            organdonor: 0
        }
        console.log(data);
        this.handleMedIdSave(data);
}



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
printHealthCard = () => {
console.log("Print!");
}
render() {

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
                                        <input type="text" className="form-control" id="healthCardPage-fullName" placeholder="" autoComplete="off" maxlength="30"></input>   
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
                                        <input type="text" className="form-control" id="healthCardPage-address" placeholder="" autoComplete="off" maxlength="70"></input>   
                                        {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                        <Br />
                                        <Br />

                                        <p className="mainContentTextBlack">Emergency contact name:</p>
                                        <Br2 />
                                        <Br2 />
                                        <Br2 />
                                        <input type="text" className="form-control" id="healthCardPage-emergencyContactName" placeholder="" autoComplete="off" maxlength="30"></input>   
                                        {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                        <Br />
                                        <Br />

                                        <p className="mainContentTextBlack">Emergency contact phone number:</p>
                                        <Br2 />
                                        <Br2 />
                                        <Br2 />
                                        <input type="text" pattern="/d" className="form-control" id="healthCardPage-emergencyContactPhone" placeholder="" autoComplete="off" maxlength="20"></input>   
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

                                        <p className="mainContentTextBlack">Health insurance provider phone number:</p>
                                        <Br2 />
                                        <Br2 />
                                        <Br2 />
                                        <input type="text" className="form-control" id="healthCardPage-healthInsuranceProviderPhone" placeholder="" autoComplete="off" maxlength="20"></input>   
                                        {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                        <Br />
                                        <Br />

                                        <p className="mainContentTextBlack">Health insurance policy number:</p>
                                        <Br2 />
                                        <Br2 />
                                        <Br2 />
                                        <input type="text" pattern="/d" className="form-control" id="healthCardPage-policyNo" placeholder="" autoComplete="off" maxlength="20"></input>   
                                        {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                        <Br />
                                        <Br />

                                        <p className="mainContentTextBlack">Primary care physician:</p>
                                        <Br2 />
                                        <Br2 />
                                        <Br2 />
                                        <input type="text" className="form-control" id="healthCardPage-primaryCarePhysician" placeholder="" autoComplete="off" maxlength="30"></input>   
                                        {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                        <Br />
                                        <Br />

                                        <p className="mainContentTextBlack">Primary care physician phone number:</p>
                                        <Br2 />
                                        <Br2 />
                                        <Br2 />
                                        <input type="text" pattern="/d" className="form-control" id="healthCardPage-primaryCarePhysicianPhoneNumber" placeholder="" autoComplete="off" maxlength="20"></input>   
                                        {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                        <Br />
                                        <Br />

                                        <p className="mainContentTextBlack">Medical conditions:</p>
                                        <Br2 />
                                        <Br2 />
                                        <Br2 />
                                        <textarea className="form-control" id="healthCardPage-medicalConditions" placeholder="" rows="4" autoComplete="off" maxlength="70"></textarea>     
                                        {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                        <Br />
                                        <Br />

                                        <p className="mainContentTextBlack">Medications:</p>
                                        <Br2 />
                                        <Br2 />
                                        <Br2 />
                                        <textarea className="form-control" id="healthCardPage-medication" placeholder="" rows="4" autoComplete="off" maxlength="70"></textarea> 
                                        {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                        <Br />
                                        <Br />

                                        <p className="mainContentTextBlack">Known allergies:</p>
                                        <Br2 />
                                        <Br2 />
                                        <Br2 />
                                        <textarea className="form-control" id="healthCardPage-knownAllergens" placeholder="" rows="4" autoComplete="off" maxlength="70"></textarea>    
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
                                    <button className="button1" id="healthCardPage-print" onClick={this.prepareData}>Print</button>
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