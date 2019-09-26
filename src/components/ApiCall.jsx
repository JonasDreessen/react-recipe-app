import React from "react"
import {useState} from "react"
import {useEffect} from "react"


const ApiCall = (props) => {
    const [recipe, setRecipe] = useState([])

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${props.searchTerm}`)
        .then(response => response.json())
        .then(data => setRecipe(data))
      },[props.searchTerm]);

      console.log(recipe.meals)
      let searchedRecipe
      if(recipe.meals !== undefined){
          if(recipe.meals === null) {
             return <h2>Cannot find this recipe</h2>
          } else {
        searchedRecipe = recipe.meals.map(meal => 
            <h5 key={meal.idMeal}> {meal.strMeal} </h5>
            )
        return searchedRecipe
      }
    }


    return(
        <h3> {searchedRecipe}</h3>
    )

}

export default ApiCall