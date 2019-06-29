import React from 'react'
import NuTable from './NuTable'
import Br from "../CustomLineBreak";
import Br2 from "../CustomLineBreak2";


const Recipe = ({ recipe }) => {
    const calories = recipe.calories;
    const yeild = recipe.yield;
    const calCalories = calories / yeild;
    // console.log(calCalories)

    return (
       
            <div className="row" id="cardBg">
                <div className="align-self-center col-lg-3 col-md-12">
                    <img className="card-img recipeImg"  
                        src={recipe.image} 
                        alt={recipe.source}
                        />
                </div>
                <div className="col-lg-6 col-md-12 ml-0 mr-0" id="text-content">
                    <div className="card-body">
                        <h3 className="recipeCardTitle" >{recipe.label}</h3>
                        <Br />
                        <Br2 />
                        <Br2 />
                        <h3 className="text-left calories">Calories: {calCalories.toFixed(2)} cal per serving </h3>
                        <Br />
                        <h5 className="card-text servingSizeText">Servings: {yeild}</h5> 
                        <Br />
                        <Br />
                        <h5 className="card-text ingredientsTitle">Ingredients: </h5>
                        <Br />
                        {recipe.ingredientLines
                        .map((ingredient, i)=>{
                      
                            return<p className="d-inline-flex ingredients" key ={i}>{ingredient}</p>
                            })
                        }
                        


                        <Br />
                        <div className="d-flex justify-content-center">
                                <a href={recipe.url} target="_blank" className="card-link">More details...</a>
                        </div>
                        <Br />
                    </div>
                </div>
                    <NuTable recipe={recipe} />
            </div>
        // </div>
    )
}

export default Recipe