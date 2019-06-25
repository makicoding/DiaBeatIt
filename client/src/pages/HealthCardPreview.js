import React, { Component } from "react";
import { Container, Row, Col, Card} from "../components/Grid";
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
        <div style={{ transform: 'scale(.75)', width: '70%', margin: '0 auto' }}>
            <Card>
                <HealthCardNavBar />
                <Container>
                    <Row>
                        <Col size="col-md-6">
                            <br/>
                            <p>Name: {props.name}</p>
                            <p>DOB: </p>
                            <p>Address: </p>
                            <p>Emergency Contact: {props.emergencyContact}</p>
                            <p>Phone: </p>
                            <Br/>
                            <p>Insurance Provider: </p>
                            <p>Policy #: </p>
                            <p>Primary Care Physician: </p>
                            <p>Phone: </p>
                        </Col>
                        <Col size="col-md-6">
                            <br/>
                            <p>Known Conditions: </p>
                            <p>Known Allergens: </p>
                            <p>Medications: </p>
                            <Br/>
                            <Br/>
                            <Br/>
                            <Br/>
                            <Br/>
                            <p>Blood Type: </p>
                            <p>Organ Donor: <i style={{color: 'red'}} className={props.organDonor === "Yes" ? "fas fa-heart" : "blank"}></i></p>
                            <p>DNR: </p>
                        </Col>
                    </Row>
                </Container>
                <div className="flex-container d-flex justify-content-end">
                    <HealthCardFooter/>
                </div>
            </Card>
        </div>
    )

    
}
export default HealthCardPreview;
