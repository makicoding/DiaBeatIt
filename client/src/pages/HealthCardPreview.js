import React, { Component } from "react";
import { Container, Row, Col } from "../components/Grid";
import { Card } from "../components/Card";
import { CardWrapper } from "../components/CardWrapper";
import Br from "../components/CustomLineBreak";
import HealthCardNavBar from "../components/HealthCardNavBar";
import HealthCardFooter from "../components/HealthCardFooter";

// Run "npm start" to start React app.
// Run "npm i" or "npm i [specific component name]" in the command line if there are any dependencies missing in the node modules folder.

// class HealthCardPreview extends React.Component {
    function HealthCardPreview(props){
        console.log(props);

    // on load grab all information from health card model
    // fill in 

    return (
        <div>
        <CardWrapper>
            <Card>
                <HealthCardNavBar />
                <Container>
                    <Row>
                        <Col size="col-md-6">
                            <br/>
                            <p>Name: {props.name}</p>
                            <p>DOB: {props.DOB}</p>
                            <p>Address: {props.address}</p>
                            <p>Emergency Contact: {props.emergencyContact}</p>
                            <p>Phone: {props.emergencyContactPhone}</p>
                            <Br/>
                            <p>Insurance Provider: {props.healthInsuranceProvider}</p>
                            <p>Phone: {props.healthInsuranceProviderPhone}</p>
                            <p>Policy #: {props.policyNo}</p>
                            <p>Primary Care Physician: {props.primaryCarePhysician}</p>
                            <p>Phone: {props.primaryCarePhysicianPhone}</p>
                        </Col>
                        <Col size="col-md-6">
                            <br/>
                            <p>Known Conditions: {props.knownConditions ? props.knownConditions : 'N/A'}</p>
                            <p>Known Allergens: {props.knownAllergens ? props.knownAllergens : 'N/A'}</p>
                            <p>Medications: {props.medications ? props.medications : 'N/A'}</p>
                            <Br/>
                            <Br/>
                            <Br/>
                            <Br/>
                            <Br/>
                            <p>Blood Type: {props.bloodType === "0" ? " " : props.bloodType}</p>
                            <p>Organ Donor: <i style={{color: 'red'}} className={props.organDonor === "Yes" ? "fas fa-lg fa-heart" : "blank"}></i></p>
                            <p>DNR: {props.doNotResuscitate === "0" ? " " : props.doNotResuscitate}</p>
                        </Col>
                    </Row>
                </Container>
                <div className="flex-container d-flex justify-content-end">
                    <HealthCardFooter/>
                </div>
            </Card>
        </CardWrapper>
        </div>
    )

    
}
export default HealthCardPreview;
