import React, { Component } from "react";
import { Container, Row, Col } from "../components/Grid";
import HamburgerMenu from "../components/HamburgerMenu";
// import Br from "../components/CustomLineBreak";
// import Br2 from "../components/CustomLineBreak2";
// import "../components/Buttons/buttons.css";
// import "../components/Text/text.css";
import HelloUserAndSignOut from "../components/HelloUserAndSignOut";
import "../components/PageWrapper/pageWrapper.css";
import "../components/MainContentContainer/mainContentContainer.css";
// import "../components/InputAndSelectField/inputAndSelectField.css";

// Run "npm start" to start React app.
// Run "npm i" or "npm i [specific component name]" in the command line if there are any dependencies missing in the node modules folder.

class HealthTimeline extends React.Component {

    state = {
        currentAge: "",
        currentWeight: "",
        // simple formula to conver this to inches 
        currentHeight: "",
        currentDiet: "",
        currentExerciseFrequency: "",
        userBMI: ""
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;

        if (name === "password") {
            value = value.substring(0, 15);
        }
        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    calculateBMI = (height, weight) => {

        // if (weight > 0 && height > 0) {
            var finalBmi = (weight / (height / 100 * height / 100)).toFixed(2);
            // document.bmiForm.bmi.value = finalBmi
            // if (finalBmi < 18.5) {
            //     document.bmiForm.meaning.value = "That you are too thin."
            // }
            // if (finalBmi > 18.5 && finalBmi < 25) {
            //     document.bmiForm.meaning.value = "That you are healthy."
            // }
            // if (finalBmi > 25) {
            //     document.bmiForm.meaning.value = "That you have overweight."
            // }
        // }
        // else {
        //     alert("Please Fill in everything correctly")
        // }
        // console.log(finalBmi)
        // return finalBmi
        this.setState({
            userBMI: finalBmi
        })
        document.getElementById("bmi").innerHTML = `Your BMI: ${this.state.userBMI}`
    }

    handleFormSubmit = event => {
        const userHeight = this.state.currentHeight * 2.54;
        const userWeight = this.state.currentWeight / 2.2;
        this.calculateBMI(userHeight, userWeight);
        
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        if (!this.state.firstName || !this.state.lastName) {
            // alert("Fill out your first and last name please!");
        } else if (this.state.password.length < 6) {
            // alert(
            //     `Choose a more secure password ${this.state.firstName} ${this.state
            //         .lastName}`
            // );
        } else {
            // alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
        }

        this.setState({
            firstName: "",
            lastName: "",
            password: ""
        });
    };

    render() {
        return (
            // <div>
            //     <h1>hi</h1>
            // </div>
            <div className="pageWrapper">

                {/* Hello user first name text and sign out anchor */}
                <HelloUserAndSignOut />
                <HamburgerMenu />

                <div className="mainContentContainer">

                    {/* BOOTSTRAP GRID */}
                    {/* Max width 960px container */}
                    {/* Put any bootstrap elements into class="container" to set max width to 960px and have it centered on page */}
                    <Container>
                        <form className="form">
                            <input
                                value={this.state.currentAge}
                                name="currentAge"
                                onChange={this.handleInputChange}
                                type="number"
                                placeholder="Current Age"
                            />
                            <input
                                value={this.state.currentWeight}
                                name="currentWeight"
                                onChange={this.handleInputChange}
                                type="number"
                                placeholder="Current Weight"
                            />
                            <label>
                                {/* Current Dietary Habit: */}
                                <input
                                    value={this.state.currentHeight}
                                    name="currentHeight"
                                    onChange={this.handleInputChange}
                                    type="number"
                                    placeholder="Current Height"
                                />
                            </label>
                            <label>
                                Current Dietary Habit:
                                <select name='currentDiet' onChange={this.handleInputChange}>
                                    <option value="null">-</option>
                                    <option value="Poor  ">Poor</option>
                                    <option value="Average  ">Average</option>
                                    <option value="Above Average  ">Above Average</option>
                                    <option value="Ideal  ">Ideal</option>
                                </select>
                            </label>
                            <br />
                            <label>
                                Current Exercise Frequency:
                                <select name="currentExerciseFrequency" onChange={this.handleInputChange}>
                                    <option value="null">-</option>
                                    <option value="Never">Never</option>
                                    <option value="1-2 Times a Week">1-2 Times a Week</option>
                                    <option value="2-3 Times a week">2-3 Times a week</option>
                                    <option value="5+ Times a Week">5+ Times a Week</option>
                                </select>
                            </label>

                            <br />
                        </form>
                        <p>
                            Your Stats: <br />
                            Age {this.state.currentAge} Weight {this.state.currentWeight} Height {this.state.currentHeight}
                            Current Dietary Habit {this.state.currentDiet}
                            Current Exercise Frequency {this.state.currentExerciseFrequency}
                        </p>
                        <button onClick={this.handleFormSubmit}>Submit</button>
                        <span id="bmi"></span> 
                    </Container>
                </div>
            </div>

        )
    }

}

export default HealthTimeline;