import "./RecipePage.scss";
import RecipeSearch from "../../components /RecipeSearch/RecipeSearch";
import DisplayRecipe from "../../components /DisplayRecipe/DisplayRecipe";
import { useState } from "react";

function RecipePage() {
    const [searchResult, setSearchResult] = useState('');
  return (
    <div>
      <h1>Recipe Finder</h1>
      <h5>
        Have an ingredient that is about to expire? Find a recipe to make to use
        it up!
      </h5>
      <RecipeSearch setSearchResult={setSearchResult}/>
      <DisplayRecipe searchResult={searchResult}/>
    </div>
  );
}

export default RecipePage;
