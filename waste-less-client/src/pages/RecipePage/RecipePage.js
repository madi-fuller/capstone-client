import './RecipePage.scss';
import RecipeSearch from '../../components /RecipeSearch/RecipeSearch';
function RecipePage () {
    return (
        <div>
           <h1>Recipe Finder</h1>
           <h5>Have an ingredient that is about to expire? Find a recipe to make to use it up!</h5>
           <RecipeSearch />
        </div>
    )
}

export default RecipePage;