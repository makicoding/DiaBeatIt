import React from 'react';
import { Card } from 'reactstrap'

const NuTable = ({ recipe }) => {
    return (
        <Card className="border-0 align-self-center col-lg-3 col-md-12 tableBorder">
            <h3 className="text-center sectionTitle"> Nutrition</h3>
            <table className="table table-bordered nuTable">
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