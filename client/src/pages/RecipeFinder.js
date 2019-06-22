import React, { Component } from 'react';
import './App.css';
import RecForm from './components/RecipeFinder/RecForm';
import Recipes from './components/RecipeFinder/Recipes'
require('dotenv').config();

const app_id =process.env.REACT_APP_FOOD_ID;
const app_key =process.env.REACT_APP_FOOD_KEY;

class App extends Component {
  constructor(){
    super()
    this.state={
      recipeName:'',
      calorie:'',
      recipes:[]
    }
    // this.handleChange=this.handleChange.bind(this)
  }
  handleChange =(event)=>{
    const {name, value} = event.target
    
    this.setState({ [name]: value.trim() })
}
   getRecipe = async(e) =>{
       e.preventDefault()
       const api_call= await fetch(`https://api.edamam.com/search?q=${this.state.recipeName}&app_id=${app_id}&app_key=${app_key}&from=0&to=10&calories=${this.state.calorie}`)
       const data=await api_call.json()

      this.setState({
        recipeName:'',
        calorie:'',
        recipes:data.hits.map(ele=>ele.recipe)
      })
       console.log(data.hits.map(ele=>ele.recipe))
   }
   componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes });
  }
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }
  render() {
    const {recipeName,calorie,recipes}=this.state
    return (
      <div>
        <header className="container-fluid">
           <h1 className="text-center">Recipes Finder</h1>
        </header>
        <RecForm className="" 
              recipeName={recipeName} 
              handleChange={this.handleChange} 
              getRecipe={this.getRecipe} 
              calorie={calorie}/>

        <Recipes className="container" recipes={recipes}/>
      </div>
    );
  }
}

export default App;
