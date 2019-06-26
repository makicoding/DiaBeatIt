import React from 'react'

const RecForm =(props)=>{
    let  maxLengthCheck = (object) => {
        if (object.target.value.length > object.target.maxLength) {
         object.target.value = object.target.value.slice(0, object.target.maxLength)
          }
        }
    return(
        <form  className="container" onSubmit={props.getRecipe}>
            <div className="form-group form-inline justify-content-between">
                    <input  className= "form-control col-lg-4 col-md-12 col-sm-12 mb-4"
                            type="text"
                            name= "recipeName"
                            placeholder="Ingredients e.g. onion, beef"
                            value={props.receipeName}
                            onChange={props.handleChange}
                            required autoFocus
                            autoComplete="off"
                            />
                <input  className="form-control col-lg-4 col-md-12 col-sm-12 mb-4"
                            type="text"
                            name= "calorie"
                            placeholder="Target calories"
                            maxLength="4"
                            onInput={maxLengthCheck}
                            value={props.calorie}
                            onChange={props.handleChange}
                            required autoFocus
                            autoComplete="off"
                            />
                
                <button className="col-lg-3 col-md-12 col-sm-12 text-center mb-4  search-button"> Search</button>
            </div>  
        </form>
    )
}
export default RecForm;