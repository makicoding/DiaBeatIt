import React, { Component } from "react";
import { Container, Row, Col } from "../components/Grid";
import HamburgerMenu from "../components/HamburgerMenu";
import Br from "../components/CustomLineBreak";
import Br2 from "../components/CustomLineBreak2";
import "../components/Buttons/buttons.css";
import "../components/Text/text.css";
import "../components/CalorieDataListGroupItem/calorieDataListGroupItem.css";
import "../components/Table/table.css";
import HelloUserAndSignOut from "../components/HelloUserAndSignOut";
import "../components/InputAndSelectField/inputAndSelectField.css";
import "../components/PageWrapper/pageWrapper.css";
import "../components/MainContentContainer/mainContentContainer.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../components/CustomReactDatepicker/customReactDatepicker.css";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Run "npm start" to start React app.
// Run "npm i" or "npm i [specific component name]" in the command line if there are any dependencies missing in the node modules folder.

var userName = localStorage.getItem("username");       // delete this line in production
var userData = {"userName": userName, "userDate": new Date()}

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
      API.deleteInfo(event)
        .then(res => this.loadInfo(userData))
        .catch(err => console.log(err));
    }

    // handling editing records in MongoDB
    //handleInfoEdit = event => {
      //console.log(event)
    //}

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

                                <Br />

                                {/* ------------------------------ */}
                                {/* Subrow */}
                                <Row>
                                    <Col size="col-md-12">                               
                                        {/* Datepicker */}
                                        <div className="mainContentTextBlack">Filter by date:</div>
                                        <Br />
                                        {/* Datepicker */}
                                        <div className="customReactDatepicker" id="calorieDataPage-datepicker">
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
                                              <li className="list-group-item mainContentTextBlack calorieDataListGroupItem" key={result._id}>
                                                <Row>
                                                  <Col size="col-md-12" className="text-justify">
                                                    {result.mealtype.substring(3, 20)}<br />
                                                    {result.mealname}<br />
                                                    Calories: {result.unitcal * result.qty}<br />
                                                    Comments: {result.comments}<br />
                                                    {/* <Link
                                                      to="/CalorieEntryEdit"
                                                      params={{ calorieData: result }}
                                                      className={window.location.pathname === "/CalorieEntryEdit" ? "nav-link active" : "nav-link"}
                                                    > */}
                                                    <Br />
                                                    <Link
                                                      to={{
                                                      pathname:"/CalorieEntryEdit",
                                                      calorieInfo: result
                                                    }} >                                                  
                                                      <button id="calorieDataEdit">Edit</button>
                                                    </Link> 
                                                    {/* <Br /> */}
                                                    <button id="calorieDataDelete"  onClick={() => this.handleInfoRemove(result._id)}>Delete</button>
                                                  </Col>   
                                                </Row>
                                              </li>
                                            ))}
                                          </ul>
                                    </Col>
                                </Row> 

                                <Br />
                                <Br />
                                <Br2 />
                                <Br2 />

                                {/* ------------------------------ */}
                                {/* Subrow (Calories grand total goes here) */}
                                <Row>
                                    <Col size="col-md-12">
                                        <p className="mainContentTextBlueMediumBold">Total: <span className="mainContentTextBlueMediumBold" id="calorieDataPage-calorieGrandTotal">{this.state.totalCal}</span> Calories</p>
                                    </Col>
                                </Row> 

                                <Br />

                                {/* <hr class="horizontalRuleGray"></hr> */}
                                <hr className="horizontalRuleBlue"></hr>
                                {/* <hr class="horizontalRuleYellow"></hr> */}

                                {/* ------------------------------ */}
                                {/* Subrow */}
                                <Row>
                                    <Col size="col-md-12">
                                        <p className="sectionTitle">Recommended daily calorie intake:</p>
                                        <Br />
                                        <p className="sectionTitle">Female:</p>
                                        <table className="calorieDataTable">
                                            <tr>
                                                <th>Years</th>
                                                <th>Calories</th>
                                            </tr>
                                            <tr>
                                                <td>19~25</td>
                                                <td>2000~2400</td>
                                            </tr>
                                            <tr>
                                                <td>26~30</td>
                                                <td>1800~2400</td>
                                            </tr>
                                            <tr>
                                                <td>31~35</td>
                                                <td>1800~2200</td>
                                            </tr>
                                            <tr>
                                                <td>36~40</td>
                                                <td>1800~2200</td>
                                            </tr>
                                            <tr>
                                                <td>41~45</td>
                                                <td>1800~2200</td>
                                            </tr>
                                            <tr>
                                                <td>46~50</td>
                                                <td>1800~2200</td>
                                            </tr>
                                            <tr>
                                                <td>51~55</td>
                                                <td>1600~2200</td>
                                            </tr>
                                            <tr>
                                                <td>56~60</td>
                                                <td>1600~2200</td>
                                            </tr>
                                            <tr>
                                                <td>61~65</td>
                                                <td>1600~2000</td>
                                            </tr>
                                            <tr>
                                                <td>66~70</td>
                                                <td>1600~2000</td>
                                            </tr>
                                            <tr>
                                                <td>71~75</td>
                                                <td>1600~2000</td>
                                            </tr>
                                            <tr>
                                                <td>76 and up</td>
                                                <td>1600~2000</td>
                                            </tr>
                                        </table>
                                        <Br />
                                        <Br />
                                        <p className="sectionTitle">Male:</p>
                                        <table className="calorieDataTable">
                                            <tr>
                                                <th>Years</th>
                                                <th>Calories</th>
                                            </tr>
                                            <tr>
                                                <td>19~25</td>
                                                <td>2600~3000</td>
                                            </tr>
                                            <tr>
                                                <td>26~30</td>
                                                <td>2400~3000</td>
                                            </tr>
                                            <tr>
                                                <td>31~35</td>
                                                <td>2400~3000</td>
                                            </tr>
                                            <tr>
                                                <td>36~40</td>
                                                <td>2400~2800</td>
                                            </tr>
                                            <tr>
                                                <td>41~45</td>
                                                <td>2200~2800</td>
                                            </tr>
                                            <tr>
                                                <td>46~50</td>
                                                <td>2200~2800</td>
                                            </tr>
                                            <tr>
                                                <td>51~55</td>
                                                <td>2200~2800</td>
                                            </tr>
                                            <tr>
                                                <td>56~60</td>
                                                <td>2200~2600</td>
                                            </tr>
                                            <tr>
                                                <td>61~65</td>
                                                <td>2000~2600</td>
                                            </tr>
                                            <tr>
                                                <td>66~70</td>
                                                <td>2000~2600</td>
                                            </tr>
                                            <tr>
                                                <td>71~75</td>
                                                <td>2000~2600</td>
                                            </tr>
                                            <tr>
                                                <td>76 and up</td>
                                                <td>2000~2400</td>
                                            </tr>
                                        </table>
                                        <Br />

                                        {/* <hr class="horizontalRuleGray"></hr> */}
                                        {/* <hr className="horizontalRuleBlue"></hr> */}
                                        <hr class="horizontalRuleYellow"></hr>

                                        <Br />

                                        <p className="mainContentTextBlack">Lower calorie figure is for a sedentary lifestyle. 
                                        <Br2 />
                                        Upper calorie figure is for an active lifestyle. 
                                        <Br />
                                        <Br />
                                        <Br />
                                        For example in 
                                        <Br2 />
                                        Female: 19~25 yrs: 2000~2400 cal, 
                                        <Br2 />
                                        2000 is for a sedentary lifestyle and 
                                        <Br2 />
                                        2400 is for an active lifestyle.
                                        <Br />
                                        <Br />
                                        <Br />
                                        Sedentary means a lifestyle that includes only light physical activity associated with typical day-to-day life.
                                        <Br />
                                        Active means a lifestyle that includes physical activity equivalent to walking more than 3 miles per day at 3 to 4 miles per hour, in addition to light physical activity associated with typical day-to-day life.
                                        </p>
                                        <Br />
                                        <Br />
                                        <a className="anchor1" href="https://health.gov/dietaryguidelines/2015/guidelines/appendix-2/" target="_blank">Recommended daily calorie intake source for above table</a>
                                        <Br />
                                        <a className="anchor1" href="https://www.webmd.com/diet/features/estimated-calorie-requirement" target="_blank">Sedentary and active lifestyle definition source</a>
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