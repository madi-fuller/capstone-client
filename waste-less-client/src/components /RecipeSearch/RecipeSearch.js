import { useState } from "react";
import "./RecipeSearch.scss";

function RecipeSearch({ setSearchResult }) {
  const [searchIngredient, setSearchIngredient] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchResult(searchIngredient);
  };

  return (
    <section className="recipe-search">
      <form onSubmit={handleSearch} className="recipe-search__form">
        <div class="recipe-search__container input-group mb-3">
          <input
            type="text"
            value={searchIngredient}
            onChange={(e) => setSearchIngredient(e.target.value)}
            class="recipe-search__input form-control"
            placeholder="Search by Ingredient"
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <div class="input-group-append">
            <button
              onClick={handleSearch}
              class="btn btn-outline-secondary"
              type="button"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default RecipeSearch;
