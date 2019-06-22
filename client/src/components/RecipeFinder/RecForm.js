import React from 'react'

const RecForm =(props)=>{
    return(
        <form  className="container" onSubmit={props.getRecipe}>
            <div className="form-group form-inline">
                 
                    <input  className= "form-control col-lg-4 col-md-12 col-sm-12 mr-4 mb-4"
                            type="text"
                            name= "recipeName"
                            placeholder="Recipe"
                            value={props.receipeName}
                            onChange={props.handleChange}
                            required autoFocus
                            />
                <input  className="form-control col-lg-4 col-md-12 col-sm-12 mb-4 mr-4"
                            type="text"
                            name= "calorie"
                            placeholder="Calorie"
                            value={props.calorie}
                            onChange={props.handleChange}
                            required autoFocus
                            />
                <button className="col-lg-2 col-md-12 col-sm-12 btn text-center mb-4"> Search</button>
            </div>  
        </form>
    )
}
export default RecForm;