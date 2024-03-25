import { useState } from "react";

function RecipeSearch({ setSearchResult }) {
    const[searchIngredient, setSearchIngredient] = useState("");
    
    const handleSearch = () => {
        setSearchResult(searchIngredient);
    }
  return (
    <section>
      <form>
        <div class="input-group mb-3">
          <input
            type="text"
            value={searchIngredient}
            onChange={(e) => setSearchIngredient(e.target.value)}
            class="form-control"
            placeholder="Search by Ingredient"
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <div class="input-group-append">
            <button onClick={handleSearch} class="btn btn-outline-secondary" type="button">
              Button
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default RecipeSearch;
