import React, { Component } from "react";
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

class HealthTimeline extends React.Component {

    state = {
        currentAge: "",
        currentWeight: "",
        currentHeight: "",
        currentDiet: "",
        currentExerciseFrequency: "",
        userBMI: "",
        messageBMI: "",
        lifeExpectancy: "50"
    };

    componentDidMount() {
        document.getElementById("bmi").style.display = "none";
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
        this.setState({
            [name]: value,
        });
    };

    calculateBMI = (height, weight) => {
        let { userBMI, messageBMI } = this.state;

        if (weight > 0 && height > 0) {
            userBMI = (weight / (height / 100 * height / 100)).toFixed(2);

            if (userBMI < 18.5) {
                messageBMI = "Too thin"
            }
            if (userBMI > 18.5 && userBMI < 25) {
                messageBMI = "Healthy"
            }
            if (userBMI > 25) {
                messageBMI = "Overweight"
            }

            // console.log(userBMI)
            // return userBMI
        }
        this.setState({
            userBMI: userBMI,
            messageBMI: messageBMI
        })
    }

    handleFormSubmit = event => {

        const userHeight = this.state.currentHeight * 2.54;
        const userWeight = this.state.currentWeight / 2.2;
        this.calculateBMI(userHeight, userWeight);
        event.preventDefault();

        let { currentHeight, currentWeight, currentAge, currentExerciseFrequency, currentDiet, userBMI, lifeExpectancy } = this.state;

        // if (userBMI > 21 && currentExerciseFrequency === "1-2 Times a Week") {
        //     lifeExpectancy--;
        // }

        this.setState({
            lifeExpectancy: "80"
        });

        document.getElementById("bmi").style.display = "block";

    };

    render() {
        return (
            <div className="pageWrapper">

                {/* Hello user first name text and sign out anchor */}
                <HelloUserAndSignOut />

                <div className="pageHeader">Health Timeline</div>


                <div className="mainContentContainer">

                    {/* BOOTSTRAP GRID */}
                    {/* Max width 960px container */}
                    {/* Put any bootstrap elements into class="container" to set max width to 960px and have it centered on page */}
                    <Container>
                        <Row>

                            <Col size="col-md-6 offset-md-3">

                                <Br2 />

                                {/* Subrow */}
                                <Row>
                                    <Col size="col-md-12">
                                        <p className="mainContentTextBlack">Please fill out all the fields for a life expectancy estimation: </p>
                                    </Col>
                                </Row>
                                <Br />
                                {/* Subrow (FORM) */}
                                <Row>
                                    <Col size="col-md-12">
                                        <p>Current age: </p>
                                        <input
                                            className="form-control"
                                            value={this.state.currentAge}
                                            name="currentAge"
                                            onChange={this.handleInputChange}
                                            type="text"
                                            pattern="/d"
                                            maxlength="2"
                                            placeholder=""
                                            autocomplete="off"
                                        >
                                        </input>
                                        <Br />
                                        <p>Current weight: </p>
                                        <input
                                            className="form-control"
                                            value={this.state.currentWeight}
                                            name="currentWeight"
                                            onChange={this.handleInputChange}
                                            type="text"
                                            pattern="/d"
                                            maxlength="3"
                                            placeholder="(lb)"
                                            autocomplete="off"
                                        >
                                        </input>
                                        <Br />
                                        <p>Current height: </p>
                                        <input
                                            className="form-control"
                                            value={this.state.currentHeight}
                                            name="currentHeight"
                                            onChange={this.handleInputChange}
                                            type="text"
                                            pattern="/d"
                                            maxlength="2"
                                            placeholder="(in)"
                                            autocomplete="off"
                                        >
                                        </input>
                                        <Br />
                                        <label>
                                            <p>Current dietary habit </p>
                                            <select style={{ width: '100%' }} className="form-control" name='currentDiet' onChange={this.handleInputChange}>
                                                <option value="null">-</option>
                                                <option value="Poor">Poor</option>
                                                <option value="Average">Average</option>
                                                <option value="Above Average">Above Average</option>
                                                <option value="Ideal">Ideal</option>
                                            </select>
                                        </label>
                                        <Br />
                                        <label>
                                            <p>Current exercise frequency </p>
                                            <select className="form-control" name="currentExerciseFrequency" onChange={this.handleInputChange}>
                                                <option value="null">-</option>
                                                <option value="Never">Never</option>
                                                <option value="1-2 Times a Week">1-2 Times a Week</option>
                                                <option value="2-3 Times a week">2-3 Times a week</option>
                                                <option value="5+ Times a Week">5+ Times a Week</option>
                                            </select>
                                        </label>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col size="col-md-6 offset-md-3">
                                <Row>
                                    <Col size="col-md-12">
                                        <button className="button1" onClick={this.handleFormSubmit}>Submit</button>
                                        <span id="bmi">Your BMI: {this.state.userBMI} ({this.state.messageBMI}) Life Expectancy: {this.state.lifeExpectancy}</span>
                                        <div className="barWrapper" style={{ position: 'relative', height: '200px' }}>
                                            <div className="bar" style={{ position: 'absolute', bottom: '0', height: "5px", width: `${this.state.lifeExpectancy}%`, display: "block", background: "red" }}>
                                                <p style={{ position: 'absolute', bottom: '0', left: '0' }}>0</p>
                                                <p style={{ position: 'absolute', bottom: '0', right: '0' }}>{this.state.lifeExpectancy}</p>
                                            </div>
                                        </div>
                                        <Br />
                                        <p>
                                            Your stats: <br />
                                            Age: {this.state.currentAge} years old, Weight: {this.state.currentWeight} lbs, Height: {this.state.currentHeight} in,
                                                    Current dietary habit: {this.state.currentDiet}, Current exercise frequency: {this.state.currentExerciseFrequency}
                                        </p>

                                    </Col>
                                </Row>

                            </Col>
                        </Row>

                    </Container>

                </div>
                <HamburgerMenu />

            </div>

        )
    }

}

export default HealthTimeline;