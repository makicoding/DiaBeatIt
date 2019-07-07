import React, { Component } from "react";
import { Container, Row, Col } from "../components/Grid";
import HamburgerMenu from "../components/HamburgerMenu";
import Br from "../components/CustomLineBreak";
import "../components/Buttons/buttons.css";
import "../components/Text/text.css";
import HelloUserAndSignOut from "../components/HelloUserAndSignOut";
import "../components/InputAndSelectField/inputAndSelectField.css";
import "../components/PageWrapper/pageWrapper.css";
import "../components/MainContentContainer/mainContentContainer.css";

// Run "npm start" to start React app.
// Run "npm i" or "npm i [specific component name]" in the command line if there are any dependencies missing in the node modules folder.

class Contact extends React.Component {

    componentDidMount() {
        // Scroll to top of page
        window.scrollTo(0, 0);
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
                <div className="pageHeader">Contact</div>
            
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
                                        <br></br>
                                        <p className="contactTextBlackCentered">To get in touch with Team DiaBeatIt, please email:
                                        <br></br>
                                        <br></br>
                                        <a className="contactAnchor" href="mailto:team.diabeatit@gmail.com">team.diabeatit@gmail.com</a>
                                        </p>
                                    </Col>
                                </Row> 

                                <Br />
                                <Br />

                                {/* ------------------------------ */}
                                {/* Subrow */}
                                <Row>
                                    <Col size="col-md-12">                               
                                        {/* Datepicker */}
                                        <p className="mainContentTextBlack">Please note that whilte this app aims to HELP prevent diabetes, the app itself does not prevent diabetes.
                                        </p>
                                    </Col>
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

export default Contact;