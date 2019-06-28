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
        gender: "",
        currentAge: "",
        currentWeight: "",
        currentHeightFt: "",
        currentHeightIn: "",
        currentDiet: "",
        currentExerciseFrequency: "",
        userBMI: "",
        messageBMI: "",
        lifeExpectancy: ""
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
        let { userBMI, messageBMI, lifeExpectancy, currentAge } = this.state;
        const userDiet = parseInt(this.state.currentDiet);
        // alert(userDiet);
        const userExercise = parseInt(this.state.currentExerciseFrequency);
        console.log(userExercise);

        if (weight > 0 && height > 0 ) {
            userBMI = (weight / (height / 100 * height / 100)).toFixed(0);
            lifeExpectancy = 80 + parseInt(userDiet) + parseInt(userExercise);
            // console.log(lifeExpectancy);
            if (userBMI < 9) {
                messageBMI = "Hmm"
                lifeExpectancy = "50";
            }
            if (userBMI > 10 && userBMI< 18.5) {
                messageBMI = "Too thin"
                // lifeExpectancy--;
            } 
            if (userBMI > 18.5 && userBMI < 25) {
                messageBMI = "Healthy"
                lifeExpectancy++
            } 
            if (userBMI > 25 && userBMI < 60) {
                messageBMI = "Overweight"
                lifeExpectancy--;
            } 
            if (userBMI > 61) {
                messageBMI = "Oof"
                lifeExpectancy = currentAge
            }

            // console.log(userBMI)
            // return userBMI
        }

        this.setState({
            userBMI: userBMI,
            messageBMI: messageBMI,
            lifeExpectancy: lifeExpectancy
        })
    }

    handleFormSubmit = event => {
        document.getElementById("error").style.display = "none";

        let { currentHeight, currentWeight, currentAge, currentExerciseFrequency, currentDiet, userBMI, lifeExpectancy } = this.state;

        const userHeight = (parseInt(this.state.currentHeightFt * 12) + parseInt(this.state.currentHeightIn)) * 2.54;
        const userWeight = this.state.currentWeight / 2.2;
        const userDiet = this.state.currentDiet;
        const userExercise = this.state.currentExerciseFrequency
        // const errorMessage = document.getElementById("error");
        // console.log(errorMessage);

        if (isNaN(userHeight && userWeight) || (!userDiet || !userExercise)) {
            document.getElementById("bmi").style.display = "none";
            document.getElementById("error").style.display = "block";

            // alert("Form improperly filled out");
            document.getElementById("error").innerHTML = ("Please fill out all fields.");
            return
        }

        event.preventDefault();
        this.calculateBMI(userHeight, userWeight);

        // if (userBMI > 21 && currentExerciseFrequency === "1-2 Times a Week") {
        //     lifeExpectancy--;
        // }

        // this.setState({
        //     lifeExpectancy: "80"
        // });

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
                                        <Row>
                                            <Col size="col-md-12">
                                                <p>Gender: </p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col size="col-md-12">
                                                <label style={{ width: '100%' }}>
                                                    <select className="chosen-select dropDownMenu1" name="gender" onChange={this.handleInputChange}>
                                                        <option value="null"></option>
                                                        <option value="F">Female</option>
                                                        <option value="M">Male</option>
                                                    </select>
                                                </label>
                                            </Col>
                                        </Row>
                                        <Br />
                                        <Br2 />
                                        <Br2 />
                                        <Br2 />
                                        <Row>
                                            <Col size="col-md-12">
                                                <p>Current age: </p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col size="col-md-12">
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
                                            </Col>
                                        </Row>
                                        <Br />
                                        <Br />
                                        <Row>
                                            <Col size="col-md-12">
                                                <p>Current height: </p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col size="col-md-6">
                                                {/* <p>Current height (ft): </p> */}
                                                <input
                                                    className="form-control"
                                                    value={this.state.currentHeightFt}
                                                    name="currentHeightFt"
                                                    onChange={this.handleInputChange}
                                                    type="text"
                                                    pattern="\d"
                                                    maxlength="1"
                                                    placeholder="ft"
                                                    autocomplete="off"
                                                >
                                                </input>
                                            </Col>
                                            <Col size="col-md-6">
                                                {/* <p>Current height (in): </p> */}
                                                <input
                                                    className="form-control"
                                                    value={this.state.currentHeightIn}
                                                    name="currentHeightIn"
                                                    onChange={this.handleInputChange}
                                                    type="text"
                                                    pattern="\d"
                                                    maxlength="2"
                                                    placeholder="in"
                                                    autocomplete="off"
                                                >
                                                </input>
                                            </Col>
                                        </Row>
                                        <Br />
                                        <Br />
                                        <Row>
                                            <Col size="col-md-12">
                                                <p>Current weight: </p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col size="col-md-12">
                                                {/* <p>Current weight (lb): </p> */}
                                                <input
                                                    className="form-control"
                                                    value={this.state.currentWeight}
                                                    name="currentWeight"
                                                    onChange={this.handleInputChange}
                                                    type="text"
                                                    pattern="\d"
                                                    maxlength="3"
                                                    placeholder="lbs"
                                                    autocomplete="off"
                                                >
                                                </input>
                                            </Col>
                                        </Row>
                                        <Br />
                                        <Br />
                                        <Row>
                                            <Col size="col-md-12">
                                                <p>Current dietary habit: </p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col size="col-md-12">
                                                <label style={{ width: '100%' }}>
                                                    <select className="chosen-select dropDownMenu1" name='currentDiet' onChange={this.handleInputChange}>
                                                        <option value="0"></option>
                                                        <option value="-2">Poor</option>
                                                        <option value="1">Average</option>
                                                        <option value="3">Above Average</option>
                                                        <option value="6">Ideal</option>
                                                    </select>
                                                </label>
                                            </Col>
                                        </Row>
                                        <Br />
                                        <Br2 />
                                        <Br2 />
                                        <Br2 />
                                        <Row>
                                            <Col size="col-md-12">
                                                <p>Current exercise frequency: </p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col size="col-md-12">
                                                <label style={{ width: '100%' }}>
                                                    <select className="chosen-select dropDownMenu1" name="currentExerciseFrequency" onChange={this.handleInputChange}>
                                                        <option value="0"></option>
                                                        <option value="-2">Never</option>
                                                        <option value="0">1-2 Times a Week</option>
                                                        <option value="4">2-3 Times a week</option>
                                                        <option value="6">5+ Times a Week</option>
                                                    </select>
                                                </label>
                                            </Col>
                                        </Row>
                                        <Br />
                                        <Br2 />
                                        <Br2 />
                                        <Br2 />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>

                    <Br />

                    <Container>
                        <Row>
                            <Col size="col-md-6 offset-md-3">
                                <Row>
                                    <Col size="col-md-12">
                                        <button className="button1" onClick={this.handleFormSubmit}>Calculate</button>
                                        <span id="error" className="mainContentTextRed"></span>

                                        <Br />
                                        <Br />
                                        <span id="bmi">
                                            <p className="mainContentTextBlack"> Your stats: <br />
                                                <div className="barWrapper" style={{ position: 'relative', height: '200px', background: 'lightgray'}}>
                                                {/* <div className="barWrapper" style={{ position: 'relative', height: '200px', background: '#cbd3d9'}}> */}
                                                    <div className="bar" style={{ position: 'absolute', bottom: '0', height: "20px", width: `${this.state.lifeExpectancy}%`, display: "block", background: "red" }}>
                                                        <p style={{ position: 'absolute', bottom: '0', left: '0' }}>0</p>
                                                        <p style={{ position: 'absolute', bottom: '0', right: '0' }}>{this.state.lifeExpectancy}</p>
                                                    </div>
                                                </div>
                                                Life Expectancy: {this.state.lifeExpectancy}
                                                <br />
                                                BMI: {this.state.userBMI} ({this.state.messageBMI}) 
                                                <br />
                                                Gender: {this.state.gender}, Age: {this.state.currentAge} years old,
                                                Weight: {this.state.currentWeight} lbs, Height: {this.state.currentHeightFt}' {this.state.currentHeightIn}"<br />
                                                {/* Current dietary habit: {this.state.currentDiet} <br /> 
                                                Current exercise frequency: {this.state.currentExerciseFrequency} */}
                                            </p>
                                        </span>
                                    </Col>
                                </Row>

                                {/* Bottom of page line breaks for breathing room */}
                                <Br />      
                                <Br />
                                <Br />

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