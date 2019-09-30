import React from "react"
import {useState} from "react"
import {useEffect} from "react"
import Ingredients from "./ingredients"


const ApiCall = (props) => {
    const [recipe, setRecipe] = useState([])

        useEffect(() => {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${props.searchTerm}`)
            .then(response => response.json())
            .then(data => setRecipe(data))
        },[props.searchTerm]);

      let searchedRecipe
      if(recipe.meals !== undefined){

          if(recipe.meals === null) {
             return <h2>Cannot find this recipe</h2>
             
          } else {
                searchedRecipe = recipe.meals.map(meal => {

               return (
                <div className="recipe" key={meal.idMeal}>
                    <h3> {meal.strMeal} </h3>
                    <img src={meal.strMealThumb} alt={meal.strMeal + "picture"} className="recipe-picture"/>
                    <Ingredients ingredients={meal}/>
                </div>
               )
                }
            )
        
      }
    }


    return(
        <div className="searched-recipes-container">
                {searchedRecipe}
        </div>
    )

}

export default ApiCall