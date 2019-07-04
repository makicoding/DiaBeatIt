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

// grabbing username from cookies
localStorage.setItem("username", "Guest User");   // delete this line in production
var userName = localStorage.getItem("username");

class CalorieEntry extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
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

    // Function to open Nutritionnix URL
    openNutritionnixURL = () => {
        window.open("https://www.nutritionix.com/uk/database/common-foods");
    }

    // This function will call the post route
    handleInfoSave = event => {
        API.saveInfo(event)
          .then(res => this.setState({didSubmit:"Yes"}))
          .catch(err => console.log(err));
      }

    // Function to extract numeric-calorie-amount inside the parenthesis () from the name of the food
    parseCalorie = (foodName) => {
        var str1 = foodName;
        var leftP = str1.indexOf( "(" )+1;
        var rightP = str1.indexOf( ")" );
        var part1 = str1.substr(leftP, rightP-leftP);
        rightP = part1.indexOf( "C" )-1;
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
                username: userName,
                date: dateInput,
                mealtype: mealCategory,
                sectionno: sectionNumber,
                mealname: strMealName,
                qty:parseFloat(strQty),
                unitcal: parseFloat(strCal),
                comments: notesInput
            };

            // Calling the post method
            this.handleInfoSave(data);

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

            // Scroll back to top of page
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
                                            <option value="Apple pie (296 Cal)">Apple pie (296 Cal)</option>
                                            <option value="Bagel - plain (277 Cal)">Bagel - plain (277 Cal)</option>
                                            <option value="Bagel w cream cheese (277 Cal)">Bagel w cream cheese (277 Cal)</option>
                                            <option value="Biryani - beef (311 Cal)">Biryani - beef (311 Cal)</option>
                                            <option value="Biryani - chicken (292 Cal)">Biryani - chicken (292 Cal)</option>
                                            <option value="Blueberry pie (360 Cal)">Blueberry pie (360 Cal)</option>
                                            <option value="Bratwurst (283 Cal)">Bratwurst (283 Cal)</option>
                                            <option value="Bread - whole wheat (81 Cal)">Bread - whole wheat (81 Cal)</option>
                                            <option value="Bread - white (98 Cal)">Bread - white (98 Cal)</option>
                                            <option value="Burrito (434 Cal)">Burrito (434 Cal)</option>
                                            <option value="Burrito bowl (702 Cal)">Burrito bowl (702 Cal)</option>
                                            <option value="Cake - carrot (577 Cal)">Cake - carrot (577 Cal)</option>
                                            <option value="Cake - cheese (401 Cal)">Cake - cheese (401 Cal)</option>
                                            <option value="Cake - chocolate (424 Cal)">Cake - chocolate (424 Cal)</option>
                                            <option value="Cake - fruit (366 Cal)">Cake - fruit (366 Cal)</option>
                                            <option value="Cake - strwbry short (485 Cal)">Cake - strwbry short (485 Cal)</option>
                                            <option value="Carbonara (1018 Cal)">Carbonara (1018 Cal)</option>
                                            <option value="Cereal (105 Cal)">Cereal (105 Cal)</option>
                                            <option value="Cheeseburger (535 Cal)">Cheeseburger (535 Cal)</option>
                                            <option value="Cherry pie (486 Cal)">Cherry pie (486 Cal)</option>
                                            <option value="Chkn parmigiana psta (862 Cal)">Chkn parmigiana psta (862 Cal)</option>
                                            <option value="Chkn pot pie (851 Cal)">Chkn pot pie (851 Cal)</option>
                                            <option value="Chkn teriyaki bowl (616 Cal)">Chkn teriyaki bowl (616 Cal)</option>
                                            <option value="Chips (149 Cal)">Chips (149 Cal)</option>
                                            <option value="Chocolate one pc (37 Cal)">Chocolate one pc (37 Cal)</option>
                                            <option value="Clam chowder (201 Cal)">Clam chowder (201 Cal)</option>
                                            <option value="Corned beef hash (387 Cal)">Corned beef hash (387 Cal)</option>
                                            <option value="Cookie (148 Cal)">Cookie (148 Cal)</option>
                                            <option value="Cracker (20 Cal)">Cracker (20 Cal)</option>
                                            <option value="Cream puff (374 Cal)">Cream puff (374 Cal)</option>
                                            <option value="Creme brulee (687 Cal)">Creme brulee (687 Cal)</option>
                                            <option value="Creme caramel (222 Cal)">Creme caramel (222 Cal)</option>
                                            <option value="Croque madame (721 Cal)">Croque madame (721 Cal)</option>
                                            <option value="Croque monsieur (650 Cal)">Croque monsieur (650 Cal)</option>
                                            <option value="Cupcake (292 Cal)">Cupcake (292 Cal)</option>
                                            <option value="Curry - chicken (243 Cal)">Curry - chicken (243 Cal)</option>
                                            <option value="Curry - lamb (381 Cal)">Curry - lamb (381 Cal)</option>
                                            <option value="Curry - chickpea (363 Cal)">Curry - chickpea (363 Cal)</option>
                                            <option value="Dumpling - pork (67 Cal)">Dumpling - pork (67 Cal)</option>
                                            <option value="Dumpling - prawn (36 Cal)">Dumpling - prawn (36 Cal)</option>
                                            <option value="Dumpling - vegetable (50 Cal)">Dumpling - vegetable (50 Cal)</option>
                                            <option value="Eggs and bacon (251 Cal)">Eggs and bacon (251 Cal)</option>
                                            <option value="Eggplant parmigiana (309 Cal)">Eggplant parmigiana (309 Cal)</option>
                                            <option value="English muffin (134 Cal)">English muffin (134 Cal)</option>
                                            <option value="Fajita platter (1401 Cal)">Fajita platter (1401 Cal)</option>
                                            <option value="Falafel (57 Cal)">Falafel (57 Cal)</option>
                                            <option value="Falafel sandwich (595 Cal)">Falafel (595 Cal)</option>
                                            <option value="Fetuccini alfredo (1186 Cal)">Fetuccini alfredo (1186 Cal)</option>
                                            <option value="Fish and chips (688 Cal)">Fish and chips (688 Cal)</option>
                                            <option value="French fries (365 Cal)">French fries (365 Cal)</option>
                                            <option value="Frnch tst w mpl syrp (271 Cal)">Frnch tst w mpl syrp (271 Cal)</option>
                                            <option value="Fried chicken (377 Cal)">Fried chicken (377 Cal)</option>
                                            <option value="Fried rice (238 Cal)">Fried rice (238 Cal)</option>
                                            <option value="Granola bar (117 Cal)">Granola bar (117 Cal)</option>
                                            <option value="Guacamole (45 Cal)">Guacamole (45 Cal)</option>
                                            <option value="Gyro sandwich (723 Cal)">Gyro sandwich (723 Cal)</option>
                                            <option value="Hamburger (540 Cal)">Hamburger (540 Cal)</option>
                                            <option value="Hotdog (316 Cal)">Hotdog (316 Cal)</option>
                                            <option value="Ice cream - choc (285 Cal)">Ice cream - choc (285 Cal)</option>
                                            <option value="Ice cream - strbry (253 Cal)">Ice cream - strbry (253 Cal)</option>
                                            <option value="Ice cream - vnla (273 Cal)">Ice cream - vnla (273 Cal)</option>
                                            <option value="Jello (84 Cal)">Jello (84 Cal)</option>
                                            <option value="Katsu - chicken (332 Cal)">Katsu - chicken (332 Cal)</option>
                                            <option value="Katsu - pork (482 Cal)">Katsu - pork (482 Cal)</option>
                                            <option value="Lasagna (602 Cal)">Lasagna (602 Cal)</option>
                                            <option value="Macaroon (104 Cal)">Macaroon (104 Cal)</option>
                                            <option value="Meatball - beef (45 Cal)">Meatball - beef (45 Cal)</option>
                                            <option value="Meatball - turkey (37 Cal)">Meatball - turkey (37 Cal)</option>
                                            <option value="Mochi ice cream (126 Cal)">Mochi ice cream (126 Cal)</option>
                                            <option value="Muffin (424 Cal)">Muffin (424 Cal)</option>
                                            <option value="Naan bread (262 Cal)">Naan bread (262 Cal)</option>
                                            <option value="Oatmeal (166 Cal)">Oatmeal (166 Cal)</option>
                                            <option value="Onion rings (1004 Cal)">Onion rings (1004 Cal)</option>
                                            <option value="Pad thai (838 Cal)">Pad thai (838 Cal)</option>
                                            <option value="Pad see ew (733 Cal)">Pad see ew (733 Cal)</option>
                                            <option value="Pancake w mpl syrp (143 Cal)">Pancake w mpl syrp (143 Cal)</option>
                                            <option value="Pecan pie (503 Cal)">Pecan pie (503 Cal)</option>
                                            <option value="Pizza w pepperoni (313 Cal)">Pizza w pepperoni (313 Cal)</option>
                                            <option value="Pita bread (165 Cal)">Pita bread (165 Cal)</option>
                                            <option value="Pork bun (217 Cal)">Pork bun (217 Cal)</option>
                                            <option value="Pork souvlaki (207 Cal)">Pork souvlaki (207 Cal)</option>
                                            <option value="Pumpkin pie (323 Cal)">Pumpkin pie (323 Cal)</option>
                                            <option value="Quesadilla - beef (1192 Cal)">Quesadilla - beef (1192 Cal)</option>
                                            <option value="Quesadilla - chkn (1069 Cal)">Quesadilla - chkn (1069 Cal)</option>
                                            <option value="Quesadilla - pork (1207 Cal)">Quesadilla - pork (1207 Cal)</option>
                                            <option value="Ramen w beef (976 Cal)">Ramen w beef (976 Cal)</option>
                                            <option value="Ramen w chicken (622 Cal)">Ramen w chicken (622 Cal)</option>
                                            <option value="Rice - white, bowl (616 Cal)">Rice - white, bowl (616 Cal)</option>
                                            <option value="Salad - caesar (481 Cal)">Salad - caesar (481 Cal)</option>
                                            <option value="Salad - chicken (253 Cal)">Salad - chicken (253 Cal)</option>
                                            <option value="Salad w dressing (148 Cal)">Salad w dressing (148 Cal)</option>
                                            <option value="Samosa - vegetable (262 Cal)">Samosa - vegetable (262 Cal)</option>
                                            <option value="Shawrma sdwch - chkn (528 Cal)">Shawrma sdwch - chkn (528 Cal)</option>
                                            <option value="Shawrma sdwch - lmb (683 Cal)">Shawrma sdwch - lmb (683 Cal)</option>
                                            <option value="Shepherds pie (693 Cal)">Shepherds pie (693 Cal)</option>
                                            <option value="Sorbet - lemon (234 Cal)">Sorbet - lemon (234 Cal)</option>
                                            <option value="Sorbet - mango (234 Cal)">Sorbet - mango (234 Cal)</option>
                                            <option value="Sorbet - strawberry (234 Cal)">Sorbet - strawberry (234 Cal)</option>
                                            <option value="Soup - chicken (168 Cal)">Soup - chicken (168 Cal)</option>
                                            <option value="Soup - miso (59 Cal)">Soup - miso (59 Cal)</option>
                                            <option value="Soup - pumpkin (241 Cal)">Soup - pumpkin (241 Cal)</option>
                                            <option value="Soup - swt corn (245 Cal)">Soup - swt corn (245 Cal)</option>
                                            <option value="Soup - tomato (170 Cal)">Soup - tomato (170 Cal)</option>
                                            <option value="Soup - vegetable (159 Cal)">Soup - vegetable (159 Cal)</option>
                                            <option value="Spaghetti bolognese (667 Cal)">Spaghetti bolognese (667 Cal)</option>
                                            <option value="Spare ribs - hlf rak (762 Cal)">Spare ribs - hlf rak (762 Cal)</option>
                                            <option value="Sweet n sour chkn (1765 Cal)">Sweet n sour chkn (1765 Cal)</option>
                                            <option value="Sweet n sour pork (1644 Cal)">Sweet n sour pork (1644 Cal)</option>
                                            <option value="Taco - beef (293 Cal)">Taco - beef (293 Cal)</option>
                                            <option value="Taco - chicken (185 Cal)">Taco - chicken (185 Cal)</option>
                                            <option value="Taco - fish (244 Cal)">Taco - fish (244 Cal)</option>
                                            <option value="Taco - pork (283 Cal)">Taco - pork (283 Cal)</option>
                                            <option value="Tart - strawberry (337 Cal)">Tart - strawberry (337 Cal)</option>
                                            <option value="Tart - mixed fruit (412 Cal)">Tart - mixed fruit (412 Cal)</option>
                                            <option value="Tiramisu (572 Cal)">Tiramisu (572 Cal)</option>
                                            <option value="Turkey burger (554 Cal)">Turkey burger (554 Cal)</option>
                                            <option value="Veggie burger (365 Cal)">Veggie burger (365 Cal)</option>
                                            <option value="Waffle w mpl syrp (270 Cal)">Waffle w mpl syrp (270 Cal)</option>
                                            <option value="Wienerschnitzel (560 Cal)">Wienerschnitzel (560 Cal)</option>                                 
                                        </select>
                                        <Br />
                                        <input type="number" className="form-control" id="calorieEntryPage-mealQuantity" placeholder="Quantity" autoComplete="off"></input>  
                                        {/* In the above line, set input type to be "number" instead of "text". This will force the user
                                            to only be able to enter numbers into the input field on the front end. Note, that the numbers
                                            will still capture as a string, so this string still has to be parseFloat on the backend */}
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
                                            <option value="Apple cidr - one cup (114 Cal)">Apple cidr - one cup (114 Cal)</option>
                                            <option value="Beer - can or botl (153 Cal)">Beer - can or botl (153 Cal)</option>
                                            <option value="Bubble tea - two cup (278 Cal)">Bubble tea - two cup (278 Cal)</option>
                                            <option value="Coca cola - can (140 Cal)">Coca cola - can (140 Cal)</option>
                                            <option value="Cocont wtr - one cup (46 Cal)">Cocont wtr - one cup (46 Cal)</option>
                                            <option value="Coffee - caf, one cup (2 Cal)">Coffee - caf, one cup (2 Cal)</option>
                                            <option value="Coffee - dcaf, one cup (4 Cal)">Coffee - dcaf, one cup (4 Cal)</option>
                                            <option value="Cappuccino - two cup (120 Cal)">Cappuccino - two cup (120 Cal)</option>
                                            <option value="Champagne - one cup (192 Cal)">Champagne - one cup (192 Cal)</option>
                                            <option value="Fanta - can (238 Cal)">Fanta - can (238 Cal)</option>
                                            <option value="Ginger ale - can (124 Cal)">Ginger ale - can (124 Cal)</option>
                                            <option value="Jus - apl, one cup (114 Cal)">Jus - apl, one cup (114 Cal)</option>
                                            <option value="Jus - grape, one cup (152 Cal)">Jus - grape, one cup (152 Cal)</option>
                                            <option value="Jus - grpfrt, one cup (96 Cal)">Jus - grpfrt, one cup (96 Cal)</option>
                                            <option value="Jus - mngo, one cup (128 Cal)">Jus - mngo, one cup (128 Cal)</option>
                                            <option value="Jus - orng, one cup (117 Cal)">Jus - orng, one cup (117 Cal)</option>
                                            <option value="Jus - pnapl, one cup (133 Cal)">Jus - pnapl, one cup (133 Cal)</option>
                                            <option value="Latte - two cup (189 Cal)">Latte - two cup (189 Cal)</option>
                                            <option value="Lemonade - one cup (99 Cal)">Lemonade - one cup (99 Cal)</option>
                                            <option value="Mlk - lofat, one cup (102 Cal)">Mlk - lofat, one cup (102 Cal)</option>
                                            <option value="Mlk - nonfat, one cup (83 Cal)">Mlk - nonfat, one cup (83 Cal)</option>
                                            <option value="Mlk - whole, one cup (149 Cal)">Mlk - whole, one cup (149 Cal)</option>
                                            <option value="Mlk - almond, one cup (56 Cal)">Mlk - almond, one cup (56 Cal)</option>
                                            <option value="Mlk - rice, one cup (113 Cal)">Mlk - rice, one cup (113 Cal)</option>
                                            <option value="Mlk - soy, one cup (100 Cal)">Mlk - soy, one cup (100 Cal)</option>
                                            <option value="Mtn Dew - can (170 Cal)">Mtn Dew - can (170 Cal)</option>
                                            <option value="Pepsi - can (150 Cal)">Pepsi - can (150 Cal)</option>
                                            <option value="Sake - one cup (308 Cal)">Sake - one cup (308 Cal)</option>
                                            <option value="Seven up - one cup (151 Cal)">Seven up - one cup (151 Cal)</option>
                                            <option value="Sprite - can (140 Cal)">Sprite - can (140 Cal)</option>
                                            <option value="Tea - caf, one cup (2.4 Cal)">Tea - caf, one cup (2.4 Cal)</option>
                                            <option value="Tea - dcaf, one cup (2.4 Cal)">Tea - dcaf, one cup (2.4 Cal)</option>
                                            <option value="Water - one cup (0 Cal)">Water - one cup (0 Cal)</option>
                                            <option value="Wine - red, one cup (199 Cal)">Wine - red, one cup (199 Cal)</option>
                                            <option value="Wine - wht, one cup (192 Cal)">Wine - wht, one cup (192 Cal)</option>
                                        </select>
                                        <Br />
                                        <input type="number" className="form-control" id="calorieEntryPage-drinkQuantity" placeholder="Quantity" autoComplete="off"></input>   
                                        {/* In the above line, set input type to be "number" instead of "text". This will force the user
                                            to only be able to enter numbers into the input field on the front end. Note, that the numbers
                                            will still capture as a string, so this string still has to be parseFloat on the backend */}
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
                                            <option value="Almond (6 Cal/g)">Almond (6 Cal/g)</option>
                                            <option value="Almond butter (6.6 Cal/g)">Almond butter (6.6 Cal/g)</option>
                                            <option value="Apple (0.5 Cal/g)">Apple (0.5 Cal/g)</option>
                                            <option value="Apricot (0.5 Cal/g)">Apricot (0.5 Cal/g)</option>
                                            <option value="Arugula (0.3 Cal/g)">Arugula (0.3 Cal/g)</option>
                                            <option value="Avocado (1.6 Cal/g)">Avocado (1.6 Cal/g)</option>
                                            <option value="Bacon (1.7 Cal/g)">Bacon (1.7 Cal/g)</option>
                                            <option value="Baking powder (0.5 Cal/g)">Baking powder (0.5 Cal/g)</option>
                                            <option value="Baking soda (0.4 Cal/g)">Baking soda (0.4 Cal/g)</option>
                                            <option value="Banana (0.9 Cal/g)">Banana (0.9 Cal/g)</option>
                                            <option value="Beef - minced (2.9 Cal/g)">Beef - minced (2.9 Cal/g)</option>
                                            <option value="Beef - steak (2.7 Cal/g)">Beef - steak (2.7 Cal/g)</option>
                                            <option value="Beans - black (0.9 Cal/g)">Beans - black (0.9 Cal/g)</option>
                                            <option value="Beans - garbanzo (0.9 Cal/g)">Beans - garbanzo (0.9 Cal/g)</option>
                                            <option value="Beans - red (0.9 Cal/g)">Beans - red (0.9 Cal/g)</option>
                                            <option value="Beans - soy (0.9 Cal/g)">Beans - soy (0.9 Cal/g)</option>
                                            <option value="Beans - white (1.4 Cal/g)">Beans - white (1.4 Cal/g)</option>
                                            <option value="Beets (0.4 Cal/g)">Beets (0.4 Cal/g)</option>
                                            <option value="Blackberry (0.4 Cal/g)">Blackberry (0.4 Cal/g)</option>
                                            <option value="Black pepper (2.5 Cal/g)">Black pepper (2.5 Cal/g)</option>
                                            <option value="Blueberry (0.6 Cal/g)">Blueberry (0.6 Cal/g)</option>
                                            <option value="Broccoli (0.4 Cal/g)">Broccoli (0.4 Cal/g)</option>
                                            <option value="Brussel sprouts (0.4 Cal/g)">Brussel sprouts (0.4 Cal/g)</option>
                                            <option value="Butter (7.2 Cal/g)">Butter (7.2 Cal/g)</option>
                                            <option value="Cabbage (0.2 Cal/g)">Cabbage (0.2 Cal/g)</option>
                                            <option value="Cacao (4.1 Cal/g)">Cacao (4.1 Cal/g)</option>
                                            <option value="Canola oil (8.9 Cal/g)">Canola oil (8.9 Cal/g)</option>
                                            <option value="Capers (0.2 Cal/g)">Capers (0.2 Cal/g)</option>
                                            <option value="Carrot (0.3 Cal/g)">Carrot (0.3 Cal/g)</option>
                                            <option value="Cashew nuts (5.5 Cal/g)">Cashew nuts (5.5 Cal/g)</option>
                                            <option value="Cauliflower (0.2 Cal/g)">Cauliflower (0.2 Cal/g)</option>
                                            <option value="Cheese (4 Cal/g)">Cheese (4 Cal/g)</option>
                                            <option value="Cherry (0.6 Cal/g)">Cherry (0.6 Cal/g)</option>
                                            <option value="Chicken (2.2 Cal/g)">Chicken (2.2 Cal/g)</option>
                                            <option value="Chili pepper (2.5 Cal/g)">Chili pepper (2.5 Cal/g)</option>
                                            <option value="Chili powder (2.8 Cal/g)">Chili powder (2.8 Cal/g)</option>
                                            <option value="Chocolate - dark (5.3 Cal/g)">Chocolate - dark (5.3 Cal/g)</option>
                                            <option value="Chocolate - milk (5.1 Cal/g)">Chocolate - milk (5.1 Cal/g)</option>
                                            <option value="Coconut oil (8.2 Cal/g)">Coconut oil (8.2 Cal/g)</option>
                                            <option value="Cod (1.1 Cal/g)">Cod (1.1 Cal/g)</option>
                                            <option value="Corn (1 Cal/g)">Corn (1 Cal/g)</option>
                                            <option value="Corn oil (8.3 Cal/g)">Corn oil (8.3 Cal/g)</option>
                                            <option value="Corn syrup (4.2 Cal/g)">Corn syrup (4.2 Cal/g)</option>
                                            <option value="Cream cheese - ful (3.4 Cal/g)">Cream cheese - ful (3.4 Cal/g)</option>
                                            <option value="Cream cheese - light (2 Cal/g)">Cream cheese - light (2 Cal/g)</option>
                                            <option value="Dressing - caesar (5.4 Cal/g)">Dressing - caesar (5.4 Cal/g)</option>
                                            <option value="Dressing - french (4.6 Cal/g)">Dressing - french (4.6 Cal/g)</option>
                                            <option value="Dressing - italian (2.4 Cal/g)">Dressing - italian (2.4 Cal/g)</option>
                                            <option value="Dressing - ranch (4.3 Cal/g)">Dressing - ranch (4.3 Cal/g)</option>
                                            <option value="Egg (1.4 Cal/g)">Egg (1.4 Cal/g)</option>
                                            <option value="Eggplant (0.3 Cal/g)">Eggplant (0.3 Cal/g)</option>
                                            <option value="Flour - rice (2.4 Cal/g)">Flour - rice (2.4 Cal/g)</option>
                                            <option value="Flour - tapioca (3.6 Cal/g)">Flour - tapioca (3.6 Cal/g)</option>
                                            <option value="Flour - white (3.6 Cal/g)">Flour - white (3.6 Cal/g)</option>
                                            <option value="Garlic (1.5 Cal/g)">Garlic (1.5 Cal/g)</option>
                                            <option value="Garlic powder (1.5 Cal/g)">Garlic powder (1.5 Cal/g)</option>
                                            <option value="Ginger (0.8 Cal/g)">Ginger (0.8 Cal/g)</option>
                                            <option value="Grouper (1.2 Cal/g)">Grouper (1.2 Cal/g)</option>
                                            <option value="Ham - pork (1.4 Cal/g)">Ham - pork (1.4 Cal/g)</option>
                                            <option value="Ham - turkey (1.9 Cal/g)">Ham - turkey (1.9 Cal/g)</option>
                                            <option value="Herring (2 Cal/g)">Herring (2 Cal/g)</option>
                                            <option value="Honey (3 Cal/g)">Honey (3 Cal/g)</option>
                                            <option value="Jam - blackberry (3.8 Cal/g)">Jam - blackberry (3.8 Cal/g)</option>
                                            <option value="Jam - blueberry (3.8 Cal/g)">Jam - blueberry (3.8 Cal/g)</option>
                                            <option value="Jam - raspberry (3.8 Cal/g)">Jam - raspberry (3.8 Cal/g)</option>
                                            <option value="Jam - strawberry (3.8 Cal/g)">Jam - strawberry (3.8 Cal/g)</option>
                                            <option value="Kale (0.3 Cal/g)">Kale (0.3 Cal/g)</option>
                                            <option value="Ketchup (1 Cal/g)">Ketchup (1 Cal/g)</option>
                                            <option value="Kiwi (0.6 Cal/g)">Kiwi (0.6 Cal/g)</option>
                                            <option value="Lemon (0.3 Cal/g)">Lemon (0.3 Cal/g)</option>
                                            <option value="Lettuce (0.2 Cal/g)">Lettuce (0.2 Cal/g)</option>
                                            <option value="Lime (0.3 Cal/g)">Lime (0.3 Cal/g)</option>
                                            <option value="Lychee (0.7 Cal/g)">Lychee (0.7 Cal/g)</option>
                                            <option value="Macadamia nuts (7.2 Cal/g)">Macadamia nuts (7.2 Cal/g)</option>
                                            <option value="Mackerel (2.6 Cal/g)">Mackerel (2.6 Cal/g)</option>
                                            <option value="Mango (0.6 Cal/g)">Mango (0.6 Cal/g)</option>
                                            <option value="Maple Syrup (2.6 Cal/g)">Maple Syrup (2.6 Cal/g)</option>
                                            <option value="Marmite (1.8 Cal/g)">Marmite (1.8 Cal/g)</option>
                                            <option value="Mayonnaise (6.8 Cal/g)">Mayonnaise (6.8 Cal/g)</option>
                                            <option value="Melon (0.3 Cal/g)">Melon (0.3 Cal/g)</option>
                                            <option value="Mustard (0.6 Cal/g)">Mustard (0.6 Cal/g)</option>
                                            <option value="Octopus (1.6 Cal/g)">Octopus (1.6 Cal/g)</option>
                                            <option value="Okra (0.2 Cal/g)">Okra (0.2 Cal/g)</option>
                                            <option value="Olive oil (8 Cal/g)">Olive oil (8 Cal/g)</option>
                                            <option value="Onion - red (0.4 Cal/g)">Onion - red (0.4 Cal/g)</option>
                                            <option value="Onion - yellow (0.4 Cal/g)">Onion - yellow (0.4 Cal/g)</option>
                                            <option value="Orange (0.5 Cal/g)">Orange (0.5 Cal/g)</option>
                                            <option value="Oyster (1.6 Cal/g)">Oyster (1.6 Cal/g)</option>
                                            <option value="Papaya (0.4 Cal/g)">Papaya (0.4 Cal/g)</option>
                                            <option value="Peach (0.4 Cal/g)">Peach (0.4 Cal/g)</option>
                                            <option value="Peanut (5.9 Cal/g)">Peanut (5.9 Cal/g)</option>
                                            <option value="Peanut butter (6.4 Cal/g)">Peanut butter (6.4 Cal/g)</option>
                                            <option value="Peas (0.8 Cal/g)">Peas (0.8 Cal/g)</option>
                                            <option value="Pepper - green (2.5 Cal/g)">Pepper - green (2.5 Cal/g)</option>
                                            <option value="Pepper - red (2.5 Cal/g)">Pepper - red (2.5 Cal/g)</option>
                                            <option value="Pepper - yellow (2.5 Cal/g)">Pepper - yellow (2.5 Cal/g)</option>
                                            <option value="Pineapple (0.5 Cal/g)">Pineapple (0.5 Cal/g)</option>
                                            <option value="Plum (0.5 Cal/g)">Plum (0.5 Cal/g)</option>
                                            <option value="Pork - minced (3.9 Cal/g)">Pork - minced (3.9 Cal/g)</option>
                                            <option value="Pork - steak (2.5 Cal/g)">Pork - steak (2.5 Cal/g)</option>
                                            <option value="Prune (2.4 Cal/g)">Prune (2.4 Cal/g)</option>
                                            <option value="Raisin (3 Cal/g)">Raisin (3 Cal/g)</option>
                                            <option value="Raspberry (0.5 Cal/g)">Raspberry (0.5 Cal/g)</option>
                                            <option value="Rice - black (1.3 Cal/g)">Rice - black (1.3 Cal/g)</option>
                                            <option value="Rice - brown (1.3 Cal/g)">Rice - brown (1.3 Cal/g)</option>
                                            <option value="Rice - red (1.1 Cal/g)">Rice - red (1.1 Cal/g)</option>
                                            <option value="Rice - white (1.3 Cal/g)">Rice - white (1.3 Cal/g)</option>
                                            <option value="Romaine lettuce (0.2 Cal/g)">Romaine lettuce (0.2 Cal/g)</option>
                                            <option value="Salmon - smoked (1.2 Cal/g)">Salmon - smoked (1.2 Cal/g)</option>
                                            <option value="Salmon - steak (2.1 Cal/g)">Salmon - steak (2.1 Cal/g)</option>
                                            <option value="Salt (0 Cal/g)">Salt (0 Cal/g)</option>
                                            <option value="Sardine (2.1 Cal/g)">Sardine (2.1 Cal/g)</option>
                                            <option value="Sausage - beef (3.3 Cal/g)">Sausage - beef (3.3 Cal/g)</option>
                                            <option value="Sausage - chicken (1.2 Cal/g)">Sausage - chicken (1.2 Cal/g)</option>
                                            <option value="Sausage - pork (3.1 Cal/g)">Sausage - pork (3.1 Cal/g)</option>
                                            <option value="Sausage - veggie (3.3 Cal/g)">Sausage - veggie (3.3 Cal/g)</option>
                                            <option value="Snap peas (0.8 Cal/g)">Snap peas (0.8 Cal/g)</option>
                                            <option value="Snapper (1.3 Cal/g)">Snapper (1.3 Cal/g)</option>
                                            <option value="Soy sauce (0.6 Cal/g)">Soy sauce (0.6 Cal/g)</option>
                                            <option value="Spinach (0.2 Cal/g)">Spinach (0.2 Cal/g)</option>
                                            <option value="Squid (0.9 Cal/g)">Squid (0.9 Cal/g)</option>
                                            <option value="Strawberry (0.3 Cal/g)">Strawberry (0.3 Cal/g)</option>
                                            <option value="String beans (0.9 Cal/g)">String beans (0.9 Cal/g)</option>
                                            <option value="Sugar - brown (3.8 Cal/g)">Sugar - brown (3.8 Cal/g)</option>
                                            <option value="Sugar - cane (3.8 Cal/g)">Sugar - cane (3.8 Cal/g)</option>
                                            <option value="Sugar - powdered (3.9 Cal/g)">Sugar - powdered (3.9 Cal/g)</option>
                                            <option value="Sugar - white (3.8 Cal/g)">Sugar - white (3.8 Cal/g)</option>
                                            <option value="Sugar peas (3.2 Cal/g)">Sugar peas (3.2 Cal/g)</option>
                                            <option value="Swordfish (1.7 Cal/g)">Swordfish (1.7 Cal/g)</option>
                                            <option value="Tangerine (0.5 Cal/g)">Tangerine (0.5 Cal/g)</option>
                                            <option value="Tofu (0.8 Cal/g)">Tofu (0.8 Cal/g)</option>
                                            <option value="Tomato (0.2 Cal/g)">Tomato (0.2 Cal/g)</option>
                                            <option value="Tomato - mini (0.2 Cal/g)">Tomato - mini (0.2 Cal/g)</option>
                                            <option value="Tuna (1.3 Cal/g)">Tuna (1.3 Cal/g)</option>
                                            <option value="Turkey (1.9 Cal/g)">Turkey (1.9 Cal/g)</option>
                                            <option value="Vinegar (0.2 Cal/g)">Vinegar (0.2 Cal/g)</option>
                                            <option value="Walnut (6.4 Cal/g)">Walnut (6.4 Cal/g)</option>
                                            <option value="Watermelon (0.3 Cal/g)">Watermelon (0.3 Cal/g)</option>
                                            <option value="Worcestrshre sauce (0.8 Cal/g)">Worcestrshre sauce (0.8 Cal/g)</option>
                                            <option value="Yellowtail (1.5 Cal/g)">Yellowtail (1.5 Cal/g)</option>
                                            <option value="Yogurt - lofat (0.6 Cal/g)">Yogurt - lofat (0.6 Cal/g)</option>
                                            <option value="Yogurt - nonfat (0.6 Cal/g)">Yogurt - nonfat (0.6 Cal/g)</option>
                                            <option value="Yogurt - full fat (0.6 Cal/g)">Yogurt - full fat (0.6 Cal/g)</option>
                                            <option value="Yogurt - fl ft grk (0.6 Cal/g)">Yogurt - fl ft grk (0.6 Cal/g)</option>
                                            <option value="Zucchini (0.2 Cal/g)">Zucchini (0.2 Cal/g)</option>
                                        </select>
                                        <Br />
                                        <input type="number" className="form-control" id="calorieEntryPage-ingredientGrams" placeholder="Grams" autoComplete="off"></input>    
                                        {/* In the above line, set input type to be "number" instead of "text". This will force the user
                                            to only be able to enter numbers into the input field on the front end. Note, that the numbers
                                            will still capture as a string, so this string still has to be parseFloat on the backend */}
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
                                        <p className="anchor1" onClick={this.openNutritionnixURL}>Click here to look up Calories</p>
                                        <Br2 />
                                    </Col>
                                </Row>
                                
                                <Row>
                                    <Col size="col-md-1"></Col>

                                    <Col size="col-md-10">
                                        <input type="text" className="form-control" id="calorieEntryPage-manualEntryName" placeholder="Name of meal / drink / ingredient" autcomplete="off"></input>   
                                        {/* autoComplete="off" is used to turn off the autoComplete of input field */}
                                        <Br />
                                        <input type="number" className="form-control" id="calorieEntryPage-manualEntryCalories" placeholder="Calories" autoComplete="off"></input>     
                                        {/* In the above line, set input type to be "number" instead of "text". This will force the user
                                            to only be able to enter numbers into the input field on the front end. Note, that the numbers
                                            will still capture as a string, so this string still has to be parseFloat on the backend */}
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
                                        <button className="button1" id="calorieEntryPageSubmitButton" onClick={this.validateFormData}>Submit</button>
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

export default CalorieEntry;