import React, { Component } from "react";
import { Container, Row, Col } from "../components/Grid";
import HamburgerMenu from "../components/HamburgerMenu";
import Br from "../components/CustomLineBreak";
import Br2 from "../components/CustomLineBreak2";
import "../components/Buttons/buttons.css";
import "../components/Text/text.css";
import "../components/MainContentContainer/mainContentContainer.css";

// Run "npm start" to start React app.
// Run "npm i" or "npm i [specific component name]" in the command line if there are any dependencies missing in the node modules folder.

class HealthCard extends React.Component {
  
    printHealthCard = () => {
        console.log("Hello!");
    }

    
    render() {
        return(
        <div>

            {/* ---------------------------------------- */}
            {/* MAIN CONTENT OF PAGE */}

            {/* Page header */}
            <div className="pageHeader">Digital Health Card
            
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
                                        <input type="text" className="form-control" id="healthCardPage-fullName" placeholder="" autoComplete="off"></input>   
                                        {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                        <Br />
                                        <Br />

                                        <p className="mainContentTextBlack">Emergency contact name:</p>
                                        <Br2 />
                                        <Br2 />
                                        <Br2 />
                                        <input type="text" className="form-control" id="healthCardPage-emergencyContactName" placeholder="" autoComplete="off"></input>   
                                        {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                        <Br />
                                        <Br />

                                        <p className="mainContentTextBlack">Emergency contact phone number:</p>
                                        <Br2 />
                                        <Br2 />
                                        <Br2 />
                                        <input type="text" className="form-control" id="healthCardPage-emergencyContactPhone" placeholder="" autoComplete="off"></input>   
                                        {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                        <Br />
                                        <Br />

                                        <p className="mainContentTextBlack">Primary care physician:</p>
                                        <Br2 />
                                        <Br2 />
                                        <Br2 />
                                        <input type="text" className="form-control" id="healthCardPage-primaryCarePhysician" placeholder="" autoComplete="off"></input>   
                                        {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                        <Br />
                                        <Br />

                                        <p className="mainContentTextBlack">Primary care physician phone number:</p>
                                        <Br2 />
                                        <Br2 />
                                        <Br2 />
                                        <input type="text" className="form-control" id="healthCardPage-primaryCarePhysicianPhoneNumber" placeholder="" autoComplete="off"></input>   
                                        {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                        <Br />
                                        <Br />

                                        <p className="mainContentTextBlack">Medical conditions:</p>
                                        <Br2 />
                                        <Br2 />
                                        <Br2 />
                                        <textarea className="form-control" id="healthCardPage-medicalConditions" placeholder="" rows="4" autoComplete="off"></textarea>     
                                        {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                        <Br />
                                        <Br />

                                        <p className="mainContentTextBlack">Medication:</p>
                                        <Br2 />
                                        <Br2 />
                                        <Br2 />
                                        <textarea className="form-control" id="healthCardPage-medication" placeholder="" rows="4" autoComplete="off"></textarea> 
                                        {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                        <Br />
                                        <Br />

                                        <p className="mainContentTextBlack">Known allergies:</p>
                                        <Br2 />
                                        <Br2 />
                                        <Br2 />
                                        <textarea className="form-control" id="healthCardPage-knownAllergies" placeholder="" rows="4" autoComplete="off"></textarea>    
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
                                {/* Subrow (PRINT) */}
                                <Row>
                                    <Col size="col-md-12">
                                        <button className="button1" id="calorieEntryPageSubmitButton" onClick={this.printHealthCard}>Print</button>
                                        <Br />
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