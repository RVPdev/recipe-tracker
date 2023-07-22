import React from "react";

function RecipeList({recipes, deleteRecipe}) {
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparations</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map(recipe => <tr key={recipe.name} className="bgColor">
            <td className="content_td"><p>{recipe.name}</p></td>
            <td className="content_td"><p>{recipe.cuisine}</p></td>
            <td className="content_td"><img src={recipe.photo} /></td>
            <td className="content_td"><p>{recipe.ingredients}</p></td>
            <td className="content_td"><p>{recipe.preparation}</p></td>
            <td><button name="delete" onClick={()=>deleteRecipe(recipe.name)}>Delete</button></td>
          </tr>)}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
