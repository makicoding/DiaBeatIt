import React, { Component } from "react";
import { Container, Row, Col } from "../components/Grid";
import HamburgerMenu from "../components/HamburgerMenu";
import Br from "../components/CustomLineBreak";
import Br2 from "../components/CustomLineBreak2";
import "../components/Buttons/buttons.css";
import "../components/Text/text.css";
import HelloUserAndSignOut from "../components/HelloUserAndSignOut";
import "../components/InputAndSelectField/inputAndSelectField.css";
import "../components/PageWrapper/pageWrapper.css";
import "../components/MainContentContainer/mainContentContainer.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../components/CustomReactDatepicker/customReactDatepicker.css";
import API from "../utils/API";

// Run "npm start" to start React app.
// Run "npm i" or "npm i [specific component name]" in the command line if there are any dependencies missing in the node modules folder.

class CalorieEntryEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          result: props.location.calorieInfo,
          startDate: new Date(),
          didSubmit: "No"
        };
        this.handleChange = this.handleChange.bind(this);
    }
     
    // For React Datepicker
    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    // populating the form with default values
    componentDidMount() {
        const userDateObj = new Date(this.state.result.date);
        const [month, date, year] = [ userDateObj.getMonth(), userDateObj.getDate(), userDateObj.getFullYear()]; 
        this.setState({
            startDate: new Date(year, month, date)
        })
        document.getElementById("calorieEntryPage-datepicker").value = this.state.startDate;
        document.getElementById("calorieEntryPage-mealCategory").value = this.state.result.mealtype;
        document.getElementById("calorieEntryPage-notes").value = this.state.result.comments;
        if (this.state.result.sectionno === "A") {
            document.getElementById("calorieEntryPage-mealNameCaloriesPerSingleQuantity").value = this.state.result.mealname;
            document.getElementById("calorieEntryPage-mealQuantity").value = this.state.result.qty;
        } else if (this.state.result.sectionno === "B") {
            document.getElementById("calorieEntryPage-drinkNameCaloriesPerGlass").value = this.state.result.mealname;
            document.getElementById("calorieEntryPage-drinkQuantity").value = this.state.result.qty;
        } else if (this.state.result.sectionno === "C") {
            document.getElementById("calorieEntryPage-ingredientNameCaloriesPerGram").value = this.state.result.mealname;
            document.getElementById("calorieEntryPage-ingredientGrams").value = this.state.result.qty;
        } else {
            document.getElementById("calorieEntryPage-manualEntryName").value = this.state.result.mealname;
            document.getElementById("calorieEntryPage-manualEntryCalories").value = this.state.result.unitcal;
        }
    }

    // Function to open Nutritionnix URL
    openNutritionnixURL = () => {
        window.open("https://www.nutritionix.com/uk/database/common-foods");
    }

    // This function will call the post route
    handleInfoEdit = event => {
        API.editInfo(event)
          .then(res => this.setState({didSubmit:"Yes"}))
          .catch(err => console.log(err));
      }

    // Function to extract numeric-calorie-amount inside the parenthesis () from the name of the food
    parseCalorie = (foodName) => {
        var str1 = foodName;
        var leftP = str1.indexOf( "(" )+1;
        var rightP = str1.indexOf( ")" );
        var part1 = str1.substr(leftP, rightP-leftP);
        rightP = part1.indexOf( "c" )-1;
        var part2 = part1.substr(0, rightP)

        return part2
    }

    // Function to validate form data
    validateFormData = () => {
        var dateInput = this.state.startDate;                                                        
        var mealCategory = document.getElementById("calorieEntryPage-mealCategory").value;
        var mealNameCaloriesPerSingleQuantity = document.getElementById("calorieEntryPage-mealNameCaloriesPerSingleQuantity").value;
        var mealQuantity = parseFloat(document.getElementById("calorieEntryPage-mealQuantity").value.trim());
        var drinkNameCaloriesPerGlass = document.getElementById("calorieEntryPage-drinkNameCaloriesPerGlass").value.trim();
        var drinkQuantity = parseFloat(document.getElementById("calorieEntryPage-drinkQuantity").value.trim());
        var ingredientNameCaloriesPerGram = document.getElementById("calorieEntryPage-ingredientNameCaloriesPerGram").value;
        var ingredientGrams = parseFloat(document.getElementById("calorieEntryPage-ingredientGrams").value.trim());
        var manualEntryName = document.getElementById("calorieEntryPage-manualEntryName").value.trim();
        var manualEntryCalories = parseFloat(document.getElementById("calorieEntryPage-manualEntryCalories").value.trim());
        var notesInput = document.getElementById("calorieEntryPage-notes").value.trim();
        
        // Validation - Section 2
        if (mealCategory === "0") {
        document.getElementById("calorieEntryPage-errorMessage").innerText = "Please select meal category.";
        return;
        }
        // --------------------
        // Validation - Section 3
        // Section 3 - checking to see that question 1 for Part A, B, C, D are not all empty
        else if ((mealNameCaloriesPerSingleQuantity === "0") && (drinkNameCaloriesPerGlass === "0") && (ingredientNameCaloriesPerGram === "0") && (manualEntryName === "")) {
        document.getElementById("calorieEntryPage-errorMessage").innerText = "Please fill out section 3.";
        return;
        }
        // Section 3 - checking to see if question 1 has been filled out for other parts besides Part A
        else if ((mealNameCaloriesPerSingleQuantity !== "0") && (drinkNameCaloriesPerGlass !== "0")) {
            document.getElementById("calorieEntryPage-errorMessage").innerText = "Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.";
            return;
        }
        else if ((mealNameCaloriesPerSingleQuantity !== "0") && (ingredientNameCaloriesPerGram !== "0")) {
            document.getElementById("calorieEntryPage-errorMessage").innerText = "Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.";
            return;
        }
        else if ((mealNameCaloriesPerSingleQuantity !== "0") && (manualEntryName !== "")) {
            document.getElementById("calorieEntryPage-errorMessage").innerText = "Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.";
            return;
        }
        // Section 3 - checking to see if question 1 has been filled out for other parts besides Part B  
        else if ((drinkNameCaloriesPerGlass !== "0") && (ingredientNameCaloriesPerGram !== "0")) {
        document.getElementById("calorieEntryPage-errorMessage").innerText = "Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.";
            return;
        }
        else if ((drinkNameCaloriesPerGlass !== "0") && (manualEntryName !== "")) {
        document.getElementById("calorieEntryPage-errorMessage").innerText = "Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.";
            return;
        }
        // Section 3 - checking to see if question 1 has been filled out for other parts besides Part C
        else if ((ingredientNameCaloriesPerGram !== "0") && (manualEntryName !== "")) {
        document.getElementById("calorieEntryPage-errorMessage").innerText = "Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.";
            return;
        }
        // --------------------
        // Validation - Section 3  
        // Section 3 - checking to see if Part A question 2 is a number
        else if ( 
                (mealNameCaloriesPerSingleQuantity !== "0") && 
                (drinkNameCaloriesPerGlass === "0") && (ingredientNameCaloriesPerGram === "0") && (manualEntryName === "") &&
                (isNaN(mealQuantity))
                ) {
                document.getElementById("calorieEntryPage-errorMessage").innerText = "Please fill out quantity for section 3 part A.";
                return;
        }
        // Section 3 - checking to see if Part B question 2 is a number
        else if ( 
                (drinkNameCaloriesPerGlass !== "0") && 
                (mealNameCaloriesPerSingleQuantity === "0") && (ingredientNameCaloriesPerGram === "0") && (manualEntryName === "") &&
                (isNaN(drinkQuantity))
                ) {
                document.getElementById("calorieEntryPage-errorMessage").innerText = "Please fill out quantity for section 3 part B.";
                return;
        }
        // Section 3 - checking to see if Part C question 2 is a number
        else if ( 
                (ingredientNameCaloriesPerGram !== "0") && 
                (mealNameCaloriesPerSingleQuantity === "0") && (drinkNameCaloriesPerGlass === "0") && (manualEntryName === "") &&
                (isNaN(ingredientGrams))
                ) {
                document.getElementById("calorieEntryPage-errorMessage").innerText = "Please fill out number of grams for section 3 part C.";
                return;
        }
        // Section 3 - checking to see if Part D question 2 is a number
        else if ( 
                (manualEntryName !== "") && 
                (mealNameCaloriesPerSingleQuantity === "0") && (drinkNameCaloriesPerGlass === "0") && (ingredientNameCaloriesPerGram === "0") &&
                (isNaN(manualEntryCalories))
                ) {
                document.getElementById("calorieEntryPage-errorMessage").innerText = "Please fill out number of calories for section 3 part D.";
                return;
        }
        // --------------------
        // Validation - Section 3  
        // Section 3 - checking to see if question 2 has been filled out for other parts besides Part A
        else if (((mealNameCaloriesPerSingleQuantity !== "0") && (mealQuantity > 0)) && drinkQuantity > 0) {
            document.getElementById("calorieEntryPage-errorMessage").innerText = "Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.";
            return;
        }
        else if (((mealNameCaloriesPerSingleQuantity !== "0") && (mealQuantity > 0)) && ingredientGrams > 0) {
            document.getElementById("calorieEntryPage-errorMessage").innerText = "Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.";
            return;
        }
        else if (((mealNameCaloriesPerSingleQuantity !== "0") && (mealQuantity > 0)) && manualEntryCalories > 0) {
            document.getElementById("calorieEntryPage-errorMessage").innerText = "Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.";
            return;
        }
        // Section 3 - checking to see if question 2 has been filled out for other parts besides Part B
        else if (((drinkNameCaloriesPerGlass !== "0") && (drinkQuantity > 0)) && mealQuantity > 0) {
            document.getElementById("calorieEntryPage-errorMessage").innerText = "Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.";
            return;
        }
        else if (((drinkNameCaloriesPerGlass !== "0") && (drinkQuantity > 0)) && ingredientGrams > 0) {
            document.getElementById("calorieEntryPage-errorMessage").innerText = "Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.";
            return;
        }
        else if (((drinkNameCaloriesPerGlass !== "0") && (drinkQuantity > 0)) && manualEntryCalories > 0) {
            document.getElementById("calorieEntryPage-errorMessage").innerText = "Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.";
            return;
        }
        // Section 3 - checking to see if question 2 has been filled out for other parts besides Part C
        else if (((ingredientNameCaloriesPerGram !== "0") && (ingredientGrams > 0)) && mealQuantity > 0) {
            document.getElementById("calorieEntryPage-errorMessage").innerText = "Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.";
            return;
        }
        else if (((ingredientNameCaloriesPerGram !== "0") && (ingredientGrams > 0)) && drinkQuantity > 0) {
            document.getElementById("calorieEntryPage-errorMessage").innerText = "Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.";
            return;
        }
        else if (((ingredientNameCaloriesPerGram !== "0") && (ingredientGrams > 0)) && manualEntryCalories > 0) {
            document.getElementById("calorieEntryPage-errorMessage").innerText = "Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.";
            return;
        }
        // Section 3 - checking to see if question 2 has been filled out for other parts besides Part D
        else if (((manualEntryName !== "0") && (manualEntryCalories > 0)) && mealQuantity > 0) {
            document.getElementById("calorieEntryPage-errorMessage").innerText = "Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.";
            return;
        }
        else if (((manualEntryName !== "0") && (manualEntryCalories > 0)) && drinkQuantity > 0) {
            document.getElementById("calorieEntryPage-errorMessage").innerText = "Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.";
            return;
        }
        else if (((manualEntryName !== "0") && (manualEntryCalories > 0)) && ingredientGrams > 0) {
            document.getElementById("calorieEntryPage-errorMessage").innerText = "Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.";
            return;
        }
        // The following else statement is creating a data object and empties the error-message field once it passes all validation
        else {
            //section #, mealname, qty, cal
            document.getElementById("calorieEntryPage-errorMessage").innerText = "";
            var strMealName;
            var strQty;
            var strCal;

            // Section A information
            if (mealNameCaloriesPerSingleQuantity.trim()!="" && mealNameCaloriesPerSingleQuantity.trim()!=0){
                var sectionNumber = "A";
                strMealName = mealNameCaloriesPerSingleQuantity;
                strQty = mealQuantity;
                strCal = this.parseCalorie(strMealName);
            // Section B information
            } else if (drinkNameCaloriesPerGlass.trim()!="" && drinkNameCaloriesPerGlass.trim()!=0){
                var sectionNumber = "B";
                strMealName = drinkNameCaloriesPerGlass;
                strQty = drinkQuantity;
                strCal = this.parseCalorie(strMealName);
            // Section C information
            } else if (ingredientNameCaloriesPerGram.trim()!="" && ingredientNameCaloriesPerGram.trim()!=0){
                var sectionNumber = "C";
                strMealName = ingredientNameCaloriesPerGram;
                strQty = ingredientGrams;
                strCal = this.parseCalorie(strMealName);
            // Section D information
            } else if (manualEntryName.trim()!=""){
                var sectionNumber = "D";
                strMealName = manualEntryName;
                strQty = 1;
                strCal = manualEntryCalories;
            }

            var data = {      
                id: this.state.result._id,
                username: this.state.result.username,
                date: dateInput,
                mealtype: mealCategory,
                sectionno: sectionNumber,
                mealname: strMealName,
                qty:parseFloat(strQty),
                unitcal: parseFloat(strCal),
                comments: notesInput
            };

            // Calling the post method
            this.handleInfoEdit(data);

            // Clear the form when submitting and show a success message
            document.getElementById("calorieEntryPage-mealCategory").value = "0";
            document.getElementById("calorieEntryPage-mealNameCaloriesPerSingleQuantity").value = "0";
            document.getElementById("calorieEntryPage-mealQuantity").value = "";
            document.getElementById("calorieEntryPage-drinkNameCaloriesPerGlass").value = "0";
            document.getElementById("calorieEntryPage-drinkQuantity").value = "";
            document.getElementById("calorieEntryPage-ingredientNameCaloriesPerGram").value = "0";
            document.getElementById("calorieEntryPage-ingredientGrams").value = "";
            document.getElementById("calorieEntryPage-manualEntryName").value = "";
            document.getElementById("calorieEntryPage-manualEntryCalories").value = "";
            document.getElementById("calorieEntryPage-notes").value = "";
            document.getElementById("calorieEntryPage-successMessage").innerText = "Data updated successfully!";

            // Go back to previous page
            this.props.history.push("/CalorieData");
            // Scroll back to top of page (of /CalorieData)
            window.scrollTo(0, 0);
            }
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
                <div className="pageHeader">Calorie Entry</div>
            
                {/* Main content container */}
                <div className="mainContentContainer">

                    {/* BOOTSTRAP GRID */}
                    {/* Max width 960px container */}
                    {/* Put any bootstrap elements into class="container" to set max width to 960px and have it centered on page */}
                    <Container>         
                        
                        {/* Calorie entry form */}
                        <Row>

                            <Col size="col-md-6 offset-md-3">           

                                {/* Subrow */}
                                <Row>
                                    <Col size="col-md-12">
                                        <p className="sectionTitle">Enter data:</p>
                                    </Col>
                                </Row> 

                                <Br />

                                {/* ------------------------------ */}
                                {/* Subrow (FORM SECTION 1) */}
                                <Row>
                                    <Col size="col-md-1">
                                        <p className="sectionTitle">1.</p>
                                    </Col>

                                    <Col size="col-md-10">
                                        <p className="mainContentTextBlack">Please select date:</p>                                   
                                        {/* Datepicker */}
                                        <div id="calorieEntryPage-datepicker">
                                            <DatePicker
                                            dateFormat="yyyy/MM/dd"
                                            selected={this.state.startDate}
                                            onChange={this.handleChange}
                                            />
                                        </div>
                                    </Col>
                                </Row>

                                <Br />

                                {/* <hr class="horizontalRuleGray"></hr> */}
                                <hr className="horizontalRuleBlue"></hr>
                                {/* <hr class="horizontalRuleYellow"></hr> */}
                                
                                {/* ------------------------------ */}
                                {/* Subrow (FORM SECTION 2) */}
                                <Row>
                                    <Col size="col-md-1">
                                        <p className="sectionTitle">2.</p>
                                    </Col>

                                    <Col size="col-md-10">
                                        <p className="mainContentTextBlack">Please select meal category:</p>
                                        <select className="chosen-select dropDownMenu1" id="calorieEntryPage-mealCategory">
                                            <option value="0"></option>
                                            <option value="01 Breakfast">Breakfast</option>
                                            <option value="02 Morning snack">Morning snack</option>
                                            <option value="03 Lunch">Lunch</option>
                                            <option value="04 Afternoon snack">Afternoon snack</option>
                                            <option value="05 Dinner">Dinner</option>
                                            <option value="06 Other snack">Other snack</option>
                                        </select>
                                    </Col>
                                </Row> 

                                <Br />
                                {/* <hr class="horizontalRuleGray"></hr> */}
                                <hr className="horizontalRuleBlue"></hr>
                                {/* <hr class="horizontalRuleYellow"></hr> */}

                                {/* ------------------------------ */}
                                {/* Subrow (FORM SECTION 3) */}
                                <Row>
                                    <Col size="col-md-1">
                                        <p className="sectionTitle">3.</p>
                                    </Col>

                                    <Col size="col-md-10">
                                        <p className="mainContentTextBlack">Please enter <span className="mainContentTextRed">ONE</span> of the following parts:</p>
                                        <p className="mainContentTextRed">(fill out either part A, B, C or D only)</p>
                                    </Col>
                                </Row> 

                                <Br />

                                {/* Subrow */}
                                <Row>
                                    <Col size="col-md-1">
                                        <p className="sectionTitle">A.</p>
                                    </Col>

                                    <Col size="col-md-10">
                                        <p className="mainContentTextBlack">Select from meal list:</p>
                                        <select className="chosen-select dropDownMenu1" id="calorieEntryPage-mealNameCaloriesPerSingleQuantity">
                                            {/* IN ALPHABETICAL ORDER */}
                                            {/* 
                                            For the value attribute, REMEMBER TO ONLY ENTER NUMERALS FOR THE CALORIE PART and not any other part. 
                                            For example a Chobani simply 100 yogurt should be entered as 
                                            "Chobani simply one hundred yogurt (100 cal)" and NOT: "Chobani simply 100 yogurt (100 cal)" 
                                            */}
                                            <option value="0"></option>
                                            <option value="Bagel - plain (277 cal)">Bagel - plain (277 cal)</option>
                                            <option value="Bagel w cream cheese (277 cal)">Bagel w cream cheese (277 cal)</option>
                                            <option value="Biryani - beef (311 cal)">Biryani - beef (311 cal)</option>
                                            <option value="Biryani - chicken (292 cal)">Biryani - chicken (292 cal)</option>
                                            <option value="Bread - whole wheat (81 cal)">Bread - whole wheat (81 cal)</option>
                                            <option value="Bread - white (98 cal)">Bread - white (98 cal)</option>
                                            <option value="Cake - cheese (401 cal)">Cake - cheese (401 cal)</option>
                                            <option value="Cake - chocolate (424 cal)">Cake - chocolate (424 cal)</option>
                                            <option value="Cake - fruit (366 cal)">Cake - fruit (366 cal)</option>
                                            <option value="Cake - strwbry short (485 cal)">Cake - strwbry short (485 cal)</option>
                                            <option value="Carbonara (1018 cal)">Carbonara (1018 cal)</option>
                                            <option value="Cereal (105 cal)">Cereal (105 cal)</option>
                                            <option value="Cheeseburger (535 cal)">Cheeseburger (535 cal)</option>
                                            <option value="Chkn parmigiana psta (862 cal)">Chkn parmigiana psta (862 cal)</option>
                                            <option value="Chkn teriyaki bowl (616 cal)">Chkn teriyaki bowl (616 cal)</option>
                                            <option value="Chips (149 cal)">Chips (149 cal)</option>
                                            <option value="Chocolate one pc (37 cal)">Chocolate one pc (37 cal)</option>
                                            <option value="Corned beef hash (387 cal)">Corned beef hash (387 cal)</option>
                                            <option value="Cookie (148 cal)">Cookie (148 cal)</option>
                                            <option value="Creme brulee (687 cal)">Creme brulee (687 cal)</option>
                                            <option value="Croque madame (721 cal)">Croque madame (721 cal)</option>
                                            <option value="Croque monsieur (650 cal)">Croque monsieur (650 cal)</option>
                                            <option value="Curry - chicken (243 cal)">Curry - chicken (243 cal)</option>
                                            <option value="Curry - lamb (381 cal)">Curry - lamb (381 cal)</option>
                                            <option value="Curry - chickpea (363 cal)">Curry - chickpea (363 cal)</option>
                                            <option value="Dumpling - pork (67 cal)">Dumpling - pork (67 cal)</option>
                                            <option value="Dumpling - prawn (36 cal)">Dumpling - prawn (36 cal)</option>
                                            <option value="Dumpling - vegetable (50 cal)">Dumpling - vegetable (50 cal)</option>
                                            <option value="Eggs and bacon (251 cal)">Eggs and bacon (251 cal)</option>
                                            <option value="Eggplant parmigiana (309 cal)">Eggplant parmigiana (309 cal)</option>
                                            <option value="Falafel (57 cal)">Falafel (57 cal)</option>
                                            <option value="Falafel sandwich (595 cal)">Falafel (595 cal)</option>
                                            <option value="French fries (365 cal)">French fries (365 cal)</option>
                                            <option value="Frnch tst w mpl syrp (271 cal)">Frnch tst w mpl syrp (271 cal)</option>
                                            <option value="Fried chicken (377 cal)">Fried chicken (377 cal)</option>
                                            <option value="Fried rice (238 cal)">Fried rice (238 cal)</option>
                                            <option value="Fetuccini alfredo (1186 cal)">Fetuccini alfredo (1186 cal)</option>
                                            <option value="Granola bar (117 cal)">Granola bar (117 cal)</option>
                                            <option value="Gyro sandwich (723 cal)">Gyro sandwich (723 cal)</option>
                                            <option value="Hamburger (540 cal)">Hamburger (540 cal)</option>
                                            <option value="Ice cream - choc (285 cal)">Ice cream - choc (285 cal)</option>
                                            <option value="Ice cream - strbry (253 cal)">Ice cream - strbry (253 cal)</option>
                                            <option value="Ice cream - vnla (273 cal)">Ice cream - vnla (273 cal)</option>
                                            <option value="Katsu - chicken (332 cal)">Katsu - chicken (332 cal)</option>
                                            <option value="Katsu - pork (482 cal)">Katsu - pork (482 cal)</option>
                                            <option value="Lasagna (602 cal)">Lasagna (602 cal)</option>
                                            <option value="Macaroon (104 cal)">Macaroon (104 cal)</option>
                                            <option value="Meatball - beef (45 cal)">Meatball - beef (45 cal)</option>
                                            <option value="Meatball - turkey (37 cal)">Meatball - turkey (37 cal)</option>
                                            <option value="Mochi ice cream (126 cal)">Mochi ice cream (126 cal)</option>
                                            <option value="Naan bread (262 cal)">Naan bread (262 cal)</option>
                                            <option value="Oatmeal (166 cal)">Oatmeal (166 cal)</option>
                                            <option value="Onion rings (1004 cal)">Onion rings (1004 cal)</option>
                                            <option value="Pad thai (838 cal)">Pad thai (838 cal)</option>
                                            <option value="Pad see ew (733 cal)">Pad see ew (733 cal)</option>
                                            <option value="Pancake w mpl syrp (143 cal)">Pancake w mpl syrp (143 cal)</option>
                                            <option value="Pizza w pepperoni (313 cal)">Pizza w pepperoni (313 cal)</option>
                                            <option value="Pita bread (165 cal)">Pita bread (165 cal)</option>
                                            <option value="Pork souvlaki (207 cal)">Pork souvlaki (207 cal)</option>
                                            <option value="Ramen w beef (976 cal)">Ramen w beef (976 cal)</option>
                                            <option value="Ramen w chicken (622 cal)">Ramen w chicken (622 cal)</option>
                                            <option value="Rice - white, bowl (616 cal)">Rice - white, bowl (616 cal)</option>
                                            <option value="Salad - caesar (481 cal)">Salad - caesar (481 cal)</option>
                                            <option value="Salad - chicken (253 cal)">Salad - chicken (253 cal)</option>
                                            <option value="Salad w dressing (148 cal)">Salad w dressing (148 cal)</option>
                                            <option value="Samosa - vegetable (262 cal)">Samosa - vegetable (262 cal)</option>
                                            <option value="Shawrma sdwch - chkn (528 cal)">Shawrma sdwch - chkn (528 cal)</option>
                                            <option value="Shawrma sdwch - lmb (683 cal)">Shawrma sdwch - lmb (683 cal)</option>
                                            <option value="Sorbet - lemon (234 cal)">Sorbet - lemon (234 cal)</option>
                                            <option value="Sorbet - mango (234 cal)">Sorbet - mango (234 cal)</option>
                                            <option value="Sorbet - strawberry (234 cal)">Sorbet - strawberry (234 cal)</option>
                                            <option value="Spaghetti bolognese (667 cal)">Spaghetti bolognese (667 cal)</option>
                                            <option value="Sweet n sour chkn (1765 cal)">Sweet n sour chkn (1765 cal)</option>
                                            <option value="Sweet n sour pork (1644 cal)">Sweet n sour pork (1644 cal)</option>
                                            <option value="Tart - strawberry (337 cal)">Tart - strawberry (337 cal)</option>
                                            <option value="Tart - mixed fruit (412 cal)">Tart - mixed fruit (412 cal)</option>
                                            <option value="Tiramisu (572 cal)">Tiramisu (572 cal)</option>
                                            <option value="Waffle w mpl syrp (270 cal)">Waffle w mpl syrp (270 cal)</option>
                                        </select>
                                        <Br />
                                        <input type="text" className="form-control" id="calorieEntryPage-mealQuantity" placeholder="Quantity" autoComplete="off"></input>  
                                        {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                    </Col>
                                </Row>
                                
                                <Br />
                                <Br />
                                <Br />

                                {/* Subrow */}
                                <Row>
                                    <Col size="col-md-1">
                                        <p className="sectionTitle">B.</p>
                                    </Col>

                                    <Col size="col-md-10">
                                        <p className="mainContentTextBlack">Select from drink list:</p>
                                        <select className="chosen-select dropDownMenu1" id="calorieEntryPage-drinkNameCaloriesPerGlass">
                                            {/* IN ALPHABETICAL ORDER */}
                                            {/*                                         
                                            For the value attribute, REMEMBER TO ONLY ENTER NUMERALS FOR THE CALORIE PART and not any other part. 
                                            For example a Chobani simply 100 yogurt should be entered as 
                                            "Chobani simply one hundred yogurt (100 cal)" and NOT: "Chobani simply 100 yogurt (100 cal)"
                                            */}
                                            <option value="0"></option>
                                            <option value="Beer - can (153 cal)">Beer - can (153 cal)</option>
                                            <option value="Wine - red, glass (125 cal)">Wine - red, glass (125 cal)</option>
                                            <option value="Wine - white, glass (121 cal)">Wine - white, glass (121 cal)</option>
                                            <option value="Soda - Cola, can (140 cal)">Soda - Cola, can (140 cal)</option>
                                        </select>
                                        <Br />
                                        <input type="text" className="form-control" id="calorieEntryPage-drinkQuantity" placeholder="Quantity" autoComplete="off"></input>   
                                        {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                    </Col>
                                </Row> 

                                <Br />
                                <Br />
                                <Br />

                                {/* Subrow */}
                                <Row>
                                    <Col size="col-md-1">
                                        <p className="sectionTitle">C.</p>
                                    </Col>

                                    <Col size="col-md-10">
                                        <p className="mainContentTextBlack">Select from ingredient list:</p>
                                        <select className="chosen-select dropDownMenu1" id="calorieEntryPage-ingredientNameCaloriesPerGram">
                                            {/* IN ALPHABETICAL ORDER */}
                                            {/*                                          
                                            For the value attribute, REMEMBER TO ONLY ENTER NUMERALS FOR THE CALORIE PART and not any other part. 
                                            For example a Chobani simply 100 yogurt should be entered as 
                                            "Chobani simply one hundred yogurt (100 cal)" and NOT: "Chobani simply 100 yogurt (100 cal)"
                                            */}
                                            <option value="0"></option>
                                            <option value="Carrot (0.3 cal/g)">Carrot (0.3 cal/g)</option>
                                            <option value="Onion (0.4 cal/g)">Onion (0.4 cal/g)</option>
                                            <option value="Spinach (0.2 cal/g)">Spinach (0.2 cal/g)</option>
                                        </select>
                                        <Br />
                                        <input type="text" className="form-control" id="calorieEntryPage-ingredientGrams" placeholder="Grams" autoComplete="off"></input>    
                                        {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                    </Col>
                                </Row> 

                                <Br />
                                <Br />
                                <Br />

                                {/* Subrow */}
                                <Row>
                                    <Col size="col-md-1">
                                        <p className="sectionTitle">D.</p>
                                    </Col>

                                    <Col size="col-md-10">
                                        <p className="mainContentTextBlack">Manual entry of meal / drink / ingredient:</p>
                                        <p className="anchor1" onClick={this.openNutritionnixURL}>Click here to look up calories</p>
                                        <Br2 />
                                    </Col>
                                </Row>
                                
                                <Row>
                                    <Col size="col-md-1"></Col>

                                    <Col size="col-md-10">
                                        <input type="text" className="form-control" id="calorieEntryPage-manualEntryName" placeholder="Name of meal / drink / ingredient" autcomplete="off"></input>   
                                        {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                        <Br />
                                        <input type="text" className="form-control" id="calorieEntryPage-manualEntryCalories" placeholder="Calories" autoComplete="off"></input>     
                                        {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                    </Col>
                                </Row> 

                                <Br />
                                {/* <hr class="horizontalRuleGray"></hr> */}
                                <hr className="horizontalRuleBlue"></hr>
                                {/* <hr class="horizontalRuleYellow"></hr> */}

                                {/* ------------------------------ */}
                                {/* Subrow (FORM SECTION 4) */}
                                <Row>
                                    <Col size="col-md-1">
                                        <p className="sectionTitle">4.</p>
                                    </Col>

                                    <Col size="col-md-10">
                                        <p className="mainContentTextBlack">Please enter any additional notes (optional):</p>
                                        <textarea className="form-control" id="calorieEntryPage-notes" placeholder="" rows="4" autoComplete="off"></textarea>       
                                        {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                    </Col>
                                </Row> 
                                
                                <Br />
                                {/* <hr class="horizontalRuleGray"></hr> */}
                                <hr className="horizontalRuleBlue"></hr>
                                {/* <hr class="horizontalRuleYellow"></hr> */}

                                {/* ------------------------------ */}
                                {/* Subrow (FORM SECTION 4) */}
                                <Row>
                                    <Col size="col-md-1"></Col>

                                    <Col size="col-md-10">
                                        <button className="button1" id="calorieEntryPageSubmitButton" onClick={this.validateFormData}>Update</button>
                                        <div className="mainContentTextRed" id="calorieEntryPage-errorMessage"></div>
                                        <div className="mainContentTextBlue" id="calorieEntryPage-successMessage"></div>
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

export default CalorieEntryEdit;