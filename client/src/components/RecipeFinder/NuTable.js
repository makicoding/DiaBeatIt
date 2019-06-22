import React from 'react';
import { Card } from 'reactstrap'

const NuTable = ({ recipe }) => {
    // let fatQT=parseInt(recipe.totalNutrients.FAT.quantity)
    // let Qt = parseInt(recipe.yield);
    // let fat= fatQT/ Qt.toFixed(2)
    // let choleQT = parseInt(recipe.totalNutrients.CHOLE.quantity)
    // let newChole= choleQT/Qt.toFixed(2)
    // let sugarQT = parseInt(recipe.totalNutrients.SUGAR.quantity)
    // let newSugar=sugarQT/Qt.toFixed(2)
    // let procnt =parseInt(recipe.totalNutrients.PROCNT.quantity)
    // let newprocnt=procnt/Qt.toFixed(2)
    // let fibtg = parseInt(recipe.totalNutrients.FIBTG.quantity)
    // let newFibtg =fibtg/Qt.toFixed(2)

    return (

        <Card className="align-self-center col-lg-3 col-md-12 tableBorder">
            <h3 className="text-center"> Nutrition</h3>
            <table className="table table-bordered text-light">
                <tbody>
                    <tr>
                        <td>{recipe.totalNutrients.FAT.label}</td>
                        <td>{recipe.totalNutrients.FAT.quantity.toFixed(2)}{recipe.totalNutrients.FAT.unit}</td>
                    </tr>
                    <tr>
                        <td>Cholesterol</td>
                        <td>{recipe.totalNutrients.CHOLE.quantity.toFixed(2)}{recipe.totalNutrients.CHOLE.unit}</td>
                    </tr>
                    <tr>
                        <td>{recipe.totalNutrients.SUGAR.label}</td>
                        <td>{recipe.totalNutrients.SUGAR.quantity.toFixed(2)}{recipe.totalNutrients.SUGAR.unit}</td>
                    </tr>
                    <tr>
                        <td>{recipe.totalNutrients.PROCNT.label}</td>
                        <td>{recipe.totalNutrients.PROCNT.quantity.toFixed(2)}{recipe.totalNutrients.PROCNT.unit}</td>
                    </tr>
                    <tr>
                        <td>{recipe.totalNutrients.FIBTG.label}</td>
                        <td>{recipe.totalNutrients.FIBTG.quantity.toFixed(2)}{recipe.totalNutrients.FIBTG.unit}</td>
                    </tr>
                </tbody>
            </table>
        </Card>
    )
}
export default NuTable;