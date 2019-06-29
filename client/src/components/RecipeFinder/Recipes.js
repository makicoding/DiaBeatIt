import React from 'react'
import Recipe from './Recipe'

const Recipes = ({ recipes }) => {
    return (
        <section className="container">
        
            <div className="row">
                {recipes.map((recipe, i) => 
                    <Recipe key={i} recipe={recipe}
                    className="container" />
                )}
            </div>
        </section>
    )
}


export default Recipes;