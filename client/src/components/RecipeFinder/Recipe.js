import React from 'react'
import NuTable from './NuTable'


const Recipe = ({ recipe }) => {
    const calories = recipe.calories;
    const yeild = recipe.yield;
    const calCalories = calories / yeild;
    // console.log(calCalories)

    return (
       
            <div className="row" id="cardBg">
                <div className="align-self-center col-lg-2 col-md-12">
                    <img className="card-img recipeImg"  
                        src={recipe.image} 
                        alt={recipe.source}
                        />
                </div>
                <div className="col-lg-7 col-md-12 ml-0 mr-0" id="text-content">
                    <div className="card-body">
                        <h3 className="cardTitle" >{recipe.label}</h3>
                        <h3 className="text-right calories">Calories: {calCalories.toFixed(2)}{recipe.totalNutrients.ENERC_KCAL.unit}/per </h3>
                        <h5 className="card-text">Ingredients: Serving for {yeild} person</h5> 
                        {recipe.ingredientLines.map((ingredient,i)=>{
                            return(
                                <p className="d-inline-flex" key ={i} >{ingredient},  </p>
                            )
                        })}
                        <div className="d-flex justify-content-center">
 
                                <a href={recipe.url} target="_blank" className="card-link">More details...</a>

                        </div>
                    </div>
                </div>
                    <NuTable recipe={recipe} />
            </div>
        // </div>
    )

}

export default Recipe