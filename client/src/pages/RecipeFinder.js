import React, { Component } from 'react';
import '../components/RecipeFinder/RecipeFinder.css';
import RecForm from '../components/RecipeFinder/RecForm';
import Recipes from '../components/RecipeFinder/Recipes'
import HamburgerMenu from "../components/HamburgerMenu";
import Br from "../components/CustomLineBreak";
import Br2 from "../components/CustomLineBreak2";
import "../components/Buttons/buttons.css";
import "../components/Text/text.css";
import HelloUserAndSignOut from "../components/HelloUserAndSignOut";
import "../components/PageWrapper/pageWrapper.css";
import "../components/MainContentContainer/mainContentContainer.css";
import "../components/InputAndSelectField/inputAndSelectField.css";

require('dotenv').config();

// Run "npm start" to start React app.
// Run "npm i" or "npm i [specific component name]" in the command line if there are any dependencies missing in the node modules folder.

const app_id = process.env.REACT_APP_FOOD_ID;
const app_key = process.env.REACT_APP_FOOD_KEY;

class RecipeFinder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipeName: '',
      calorie: '',
      recipes: [],
      message: ''
    }
  }
  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value.trim() })
  }


  getRecipe = async (e) => {
    e.preventDefault()
    const api_call = await fetch(`https://api.edamam.com/search?q=${this.state.recipeName}&app_id=${app_id}&app_key=${app_key}&from=0&to=20&calories=${this.state.calorie}`)
    let data = await api_call.json()
    data = data.hits.map(ele => ele.recipe);
    console.log('RAW DATA ', data)

    {
      !data.length ?
      (this.setState({
        message: "No matching recipes found.",
        recipeName: '',
        calorie: '',
        recipes: [],
      })) :
      (this.setState({
        recipeName: '',
        calorie: '',
        message: '',
        recipes: data
      }))

    }

  }
  //  componentDidMount = () => {
  //   const json = localStorage.getItem("recipes");
  //   const recipes = JSON.parse(json);
  //   this.setState({ recipes });
  //   // this.setState({
  //   //   recipeName:'',
  //   //   calorie:30
  //   // })
  // }
  // componentDidUpdate = () => {
  //   const recipes = JSON.stringify(this.state.recipes);
  //   localStorage.setItem("recipes", recipes);
  // }
  render() {
    const { recipeName, calorie, recipes, message } = this.state
    console.log('search ', this.state.recipes)
    return (
      <div>

        {/* ---------------------------------------- */}
        {/* MAIN CONTENT OF PAGE */}

        {/* Page Wrapper */}
        <div className="pageWrapper">

          {/* Hello user first name text and sign out anchor */}
          <HelloUserAndSignOut />

          {/* Page header */}
          <div className="pageHeader">Recipe Finder</div>

          {/* Main content container */}
          <div className="mainContentContainer">

            {/* <header className="container-fluid"> */}
            {/* <h1 className="text-center">Recipes Finder</h1> */}
            {/* </header> */}

            <RecForm className=""
              recipeName={recipeName}
              handleChange={this.handleChange}
              getRecipe={this.getRecipe}
              calorie={calorie} />

            {!this.state.recipes.length ?
              (<h1 className='text-center mainContentTextRed'>{message}</h1>) :
              (<Recipes className="container" recipes={recipes} />)
            }

            {/* /* Only single break needed hear, there is enough room underneath */}
            <Br />
            {/* <Br />
            <Br /> */}

          </div>

        </div>

        {/* ---------------------------------------- */}
        {/* HAMBURGER MENU */}

        <HamburgerMenu />

      </div>
    );
  }
}

export default RecipeFinder;
