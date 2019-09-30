import React from "react"

const Ingredients = (props) => {

    var ingredientsArray =[]
    for (let i = 1; i <= 20; i++ ){

        var ingredientKey = "strIngredient" + i
        if (props.ingredients[ingredientKey] !== "" && props.ingredients[ingredientKey] !== null){
            ingredientsArray.push(props.ingredients[ingredientKey])
        }
    }

    var ingredients
    ingredients = ingredientsArray.map(singleIngredient => {
                return (
                    <li>{singleIngredient}</li>
                )
            }
        )

    return (
        <ul className="ingredient-list">
            {ingredients}
        </ul>
        
        
        )
    }

export default Ingredients