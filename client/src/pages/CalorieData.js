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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../components/CustomReactDatepicker/customReactDatepicker.css";
import EditBtn from "../components/EditBtn";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";


var userName = localStorage.getItem("username");
var userData = {"userName": userName, "userDate": new Date()}
// Run "npm start" to start React app.
// Run "npm i" or "npm i [specific component name]" in the command line if there are any dependencies missing in the node modules folder.

class CalorieData extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
          startDate: new Date(),
          userInfo: [],
          totalCal: 0
        };
        this.handleChange = this.handleChange.bind(this);
    }
     
    // For React Datepicker
    handleChange(date) {
    this.setState({
        startDate: date
    });
    userData.userDate = new Date(date);
    this.loadInfo(userData);
    }

    // loading user information as soon as the component is loaded
    componentDidMount() {
      this.loadInfo(userData);
    }

    loadInfo = (userData) => {
      API.getInfo(userData)
        .then(res => {
            this.setState({ userInfo: res.data });
            this.totalCalculator(this.state.userInfo);
          }
        )
        .catch(err => console.log(err)
      );
    };

    totalCalculator = (userInfo) => {
      var newTot = 0;
      for( let i=0; i<userInfo.length; i++){
        newTot = newTot + (parseFloat(userInfo[i].qty) * parseFloat(userInfo[i].unitcal))
      }
      this.setState({totalCal: newTot})
    }

    // deleting records from MongoDB
    handleInfoRemove = event => {
      API.deleteBook(event)
        .then(res => this.loadInfo(userData))
        .catch(err => console.log(err));
    }

    // handling editing records in MongoDB
    handleInfoEdit = event => {
      console.log(event)
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
                <div className="pageHeader">Calorie Data</div>
            
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
                                          <ul className="list-group">
                                            {this.state.userInfo.map(result => (
                                              <li className="list-group-item" key={result._id}>
                                                <Row>
                                                  <Col size="md-12" className="text-justify">
                                                    {result.mealtype}<br />
                                                    {result.mealname}<br />
                                                    Calorie: {result.unitcal * result.qty}<br />
                                                    Comments: {result.comments}<br />
                                                    <Link
                                                      to="/CalorieEntry"
                                                      className={window.location.pathname === "/CalorieEntry" ? "nav-link active" : "nav-link"}
                                                    >
                                                      <EditBtn onClick={() => this.handleInfoEdit(result)}/> 
                                                    </Link> 
                                                    <DeleteBtn  onClick={() => this.handleInfoRemove(result._id)}/>
                                                  </Col>   
                                                </Row>
                                              </li>
                                            ))}
                                          </ul>
                                    </Col>
                                </Row> 

                                <Br />

                                {/* ------------------------------ */}
                                {/* Subrow (Calories grand total goes here) */}
                                <Row>
                                    <Col size="col-md-12">
                                        <p className="mainContentTextYellowMediumBold">Total:</p>
                                        <p className="mainContentTextYellowMediumBold"><span className="mainContentTextYellowMediumBold" id="calorieDataPage-calorieGrandTotal">{this.state.totalCal}</span> Calories</p>
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