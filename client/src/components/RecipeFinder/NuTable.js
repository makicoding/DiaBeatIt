import React from 'react';
import { Card } from 'reactstrap'

const NuTable = ({ recipe }) => {
    return (
        <Card className="border-0 align-self-center col-lg-3 col-md-12 tableBorder">
            <h3 className="text-center sectionTitle"> Nutrition</h3>
            <table className="table table-bordered nuTable">
                <tbody>
                    <tr>
                        <td className="recipeFinderTd">Fat</td>
                        {recipe.totalNutrients.FAT === undefined ?
                            <td className="recipeFinderTd">Null</td> :
                            <td className="recipeFinderTd">{recipe.totalNutrients.FAT.quantity.toFixed(2)}g</td>
                        }
                        {/* <td className="recipeFinderTd">{recipe.totalNutrients.FAT.quantity.toFixed(2)}g</td> */}
                    </tr>
                    <tr>
                        <td className="recipeFinderTd">Cholesterol</td>
                        {recipe.totalNutrients.CHOLE === undefined ?
                            <td className="recipeFinderTd">Null</td> :
                            <td className="recipeFinderTd">{recipe.totalNutrients.CHOLE.quantity.toFixed(2)}mg</td>
                        }
                    </tr>
                    <tr>
                        <td className="recipeFinderTd">Sugar</td>
                        {recipe.totalNutrients.SUGAR === undefined ?
                            <td className="recipeFinderTd">Null</td> :
                            <td className="recipeFinderTd">{recipe.totalNutrients.SUGAR.quantity.toFixed(2)}g</td>
                        }
                    </tr>
                    <tr>
                        <td className="recipeFinderTd">Protein</td>
                        {recipe.totalNutrients.PROCNT === undefined ?
                            <td className="recipeFinderTd">Null</td> :
                            <td className="recipeFinderTd">{recipe.totalNutrients.PROCNT.quantity.toFixed(2)}g</td>
                        }
                    </tr>
                    <tr>
                        <td className="recipeFinderTd">Fiber</td>
                        {recipe.totalNutrients.FIBTG === undefined ?
                            null :
                            // <td className="recipeFinderTd">No data</td>: 
                            <td className="recipeFinderTd">{recipe.totalNutrients.FIBTG.quantity.toFixed(2)}g</td>
                        }
                    </tr>
                </tbody>
            </table>
        </Card>
    )
}
export default NuTable;