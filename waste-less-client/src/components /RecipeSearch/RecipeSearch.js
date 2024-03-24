function RecipeSearch() {
  return (
    <section>
      <form>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search by Ingredient"
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button">
              Button
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default RecipeSearch;
