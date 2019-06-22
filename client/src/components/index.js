import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    currentAge: "",
    currentWeight: "",
    // simple formula to conver this to inches 
    currentHeight: "", 
    currentDiet: "", 
    currentExerciseFrequency: "", 
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

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.firstName || !this.state.lastName) {
      alert("Fill out your first and last name please!");
    } else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password ${this.state.firstName} ${this.state
          .lastName}`
      );
    } else {
      alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    }

    this.setState({
      firstName: "",
      lastName: "",
      password: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    console.log(this.state)
    return (
      <div>
        {/* <p>
          Hello {this.state.firstName} {this.state.lastName}
        </p> */}

                                                        {/* currentAge: "",
                                                    currentWeight: "",
                                                    currentHeight: "", 
                                                    currentDiet: "", 
                                                    currentExerciseFrequency: "", */}
        <form className="form">
          <input
            value={this.state.currentAge}
            name="currentAge"
            onChange={this.handleInputChange}
            type="text"
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
           Current Dietary Habit:
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
            <option value="poor">Poor</option>
            <option value="average">Average</option>
            <option value="aboveAverage">Above Average</option>
            <option value="ideal">Ideal</option>
          </select>
        </label>
          <br />
           <label>
          Current Exercise Frequency:
          <select onChange={this.handleChange}>
            <option value="null">-</option>
            <option value="poorExercise">Never</option>
            <option value="averageExercise">1-2 Times a Week</option>
            <option value="aboveAverageExercise">2-3 Times a week</option>
            <option value="idealExercise">5+ Times a Week</option>
          </select>
        </label>

          <br />
        </form> 
        <p>
          Your Stats: <br/>Age {this.state.currentAge} Weight {this.state.currentWeight} Height {this.state.currentHeight} Current Dietary Habit {this.state.currentDiet}
          Current Exercise Frequency {this.state.currentExerciseFrequency}
        </p>
        <button onClick={this.handleFormSubmit}>Submit</button>
      </div>
    );
  }
}

export default Form;
