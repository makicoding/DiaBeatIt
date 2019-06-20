import React, { Component } from "react";
import { Container, Row, Col } from "../components/Grid";
import HamburgerMenu from "../components/HamburgerMenu";
import Br from "../components/CustomLineBreak";
import "../components/Buttons/buttons.css";
import "../components/Text/text.css";
import "../components/MainContentContainer/mainContentContainer.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../components/CustomReactDatepicker/customReactDatepicker.css";

// Run "npm start" to start React app.
// Run "npm i" or "npm i [specific component name]" in the command line if there are any dependencies missing in the node modules folder.

class CalorieData extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
          startDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
    }
     
    // For React Datepicker
    handleChange(date) {
    this.setState({
        startDate: date
    });
    }

        
    render() {
        return(
        <div>

            {/* ---------------------------------------- */}
            {/* MAIN CONTENT OF PAGE */}

            {/* Page header */}
            <div className="pageHeader">Calorie Data
            
                {/* Main content container */}
                <div className="mainContentContainer">

                    {/* BOOTSTRAP GRID */}
                    {/* Max width 960px container */}
                    {/* Put any bootstrap elements into class="container" to set max width to 960px and have it centered on page */}
                    <Container>         
                        
                        {/* Calorie data retrieval */}
                        <Row>

                            <Col size="col-md-6 offset-md-3">           

                                {/* Subrow */}
                                <Row>
                                    <Col size="col-md-12">
                                        <p className="sectionTitle">Retrieve data:</p>
                                    </Col>
                                </Row> 

                                {/* ------------------------------ */}
                                {/* Subrow */}
                                <Row>
                                    <Col size="col-md-12">                               
                                        {/* Datepicker */}
                                        <div className="mainContentTextBlack">Filter by date:</div>
                                        <Br />
                                        {/* Datepicker */}
                                        <div className="customReactDatepicker">
                                            <DatePicker
                                            dateFormat="yyyy/MM/dd"
                                            selected={this.state.startDate}
                                            onChange={this.handleChange}
                                            />
                                        </div>
                                    </Col>
                                </Row> 

                                <Br />
                                
                                {/* ------------------------------ */}
                                {/* Subrow (Retrieved data populates here) */}
                                <Row>
                                    <Col size="col-md-12">
                                        <p id="calorieDataPage-retrievedData"></p>
                                    </Col>
                                </Row> 

                                <Br />

                                {/* ------------------------------ */}
                                {/* Subrow (Calories grand total goes here) */}
                                <Row>
                                    <Col size="col-md-12">
                                        <p className="mainContentTextYellowMediumBold">Total:</p>
                                        <p className="mainContentTextYellowMediumBold"><span className="mainContentTextYellowMediumBold" id="calorieDataPage-calorieGrandTotal"></span> Calories</p>
                                    </Col>
                                </Row> 

                                <Br />

                                {/* ------------------------------ */}
                                {/* Subrow */}
                                <Row>
                                    <Col size="col-md-12">
                                        <p className="sectionTitle">Recommended daily calorie intake:</p>
                                        <p className="mainContentTextBlack">Female:</p>
                                        <p className="mainContentTextBlack">female statistics here</p>
                                        <p className="mainContentTextBlack">Male:</p>
                                        <p className="mainContentTextBlack">male statistics here</p>
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

export default CalorieData;