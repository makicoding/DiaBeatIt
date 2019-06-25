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
        userBMI: "",
        messageBMI: "",
        lifeExpectancy: "80"
    };
    
    componentDidMount() {
        document.getElementById("bmi").style.display = "none";
    }

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
        let {userBMI, messageBMI} = this.state;

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

        let {currentHeight, currentWeight, currentAge, currentExerciseFrequency, currentDiet, userBMI, lifeExpectancy} = this.state;

        if (userBMI > 21 && currentExerciseFrequency === "1-2 Times a Week") {
            lifeExpectancy--;
        }

        this.setState({
            lifeExpectancy: lifeExpectancy
        });
        document.getElementById("bmi").style.display = "block";

    };

    render() {
        return (
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
                                placeholder="Current Age (years)"
                            />
                            <input
                                value={this.state.currentWeight}
                                name="currentWeight"
                                onChange={this.handleInputChange}
                                type="number"
                                placeholder="Current Weight (lbs)"
                            />
                            <label>
                                {/* Current Dietary Habit: */}
                                <input
                                    value={this.state.currentHeight}
                                    name="currentHeight"
                                    onChange={this.handleInputChange}
                                    type="number"
                                    placeholder="Current Height (in)"
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
                        <span id="bmi">Your BMI : {this.state.userBMI} ({this.state.messageBMI}) Life Expectancy: {this.state.lifeExpectancy}</span> 
                    </Container>
                </div>
            </div>

        )
    }

}

export default HealthTimeline;