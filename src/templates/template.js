import React from "react"

const Recipe = ({ pageContext }) => {
  const { recipe } = pageContext;
  return (
    <div>
      <div>
        <h1>{recipe.title}</h1>
        <p>Cooking Time: {recipe.cookingTime}</p>
        <p>Prep Time: {recipe.preparationTime}</p>
        <p>Number of Servings: {recipe.numberOfServings}</p>
        <p>Ingredients: {recipe.ingredients}</p>
        <img src={recipe.mediaImage.mediaImage.url} alt='recipe'/>
      </div>
    </div>
  );
}

export default Recipe;