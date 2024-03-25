import "./RecipePage.scss";
import RecipeSearch from "../../components /RecipeSearch/RecipeSearch";
import DisplayRecipe from "../../components /DisplayRecipe/DisplayRecipe";
import { useState } from "react";

function RecipePage() {
    const [searchResult, setSearchResult] = useState('');
  return (
    <div className="recipe">
        <div className="recipe__header">
            <div className="recipe__header-container">
      <h1 className="recipe__title">Recipe Finder</h1>
      <p className="recipe__subtitle">
        Have an ingredient that is about to expire? Find a recipe to make to use
        it up!
      </p>
      </div>
      </div>
      <RecipeSearch setSearchResult={setSearchResult}/>
      <DisplayRecipe searchResult={searchResult}/>
    </div>
  );
}

export default RecipePage;
