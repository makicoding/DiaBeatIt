import React from 'react'

const RecipeDetail=(props)=>{
    console.log(props.location.state.totalNutrients['PROCNT'].unit)
    return(
        <div className="container box1">
           <div className="recipe__img">
              <img src={props.location.state.image} alt={`${props.location.state.label}`} />
           </div>
           <div className="wrapper__description__recipe">
             <div className="description__title">
                 <h2>{props.location.state.label}</h2>
                 <h3>Source: </h3>
                 <h4>{props.location.state.source}</h4>
             </div>
             
            <div className="description_nutrition">
               <h3>Nutrition :</h3>
               <h4>calories/serving:<span>{Math.round(props.location.state.calories*100)/100}</span></h4>
               <h4>Protein({props.location.state.totalNutrients['PROCNT'].unit}): <span>{Math.round(props.location.state.totalNutrients.PROCNT.quantity*100)/100}</span></h4>
               <h4>Cholesterol({props.location.state.totalNutrients.CHOLE.unit}):<span>{Math.round(props.location.state.totalNutrients.CHOLE.quantity*100)/100}</span></h4>
               <h4>Sodium({props.location.state.totalNutrients.NA.unit}):<span>{Math.round(props.location.state.totalNutrients.NA.quantity*100)/100}</span></h4>
               <h4>Calcium({props.location.state.totalNutrients.CA.unit}):<span>{Math.round(props.location.state.totalNutrients.CA.quantity*100)/100}</span></h4>
           </div>
             <a href={props.location.state.url} target="_blank">Get Your Recipe</a>
             {/* <Link to="/" className="home_router">Go Home</Link> */}
            
           </div>

        </div>
       )
}

export default RecipeDetail;
