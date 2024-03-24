import "./AddWasteItem.scss";

function AddWasteItem() {

  return (
    <section className="add-item">
        <h2 className="add-item__title">Add Wasted Food Item</h2>
        <p className="add-item__subtitle">Fill out all fields to add an item to your log</p>
      <div class="add-item__container container mt-5">
        <form>
          <div class="mb-3">
            <label className="form-label"> Item Name</label>
            <input type="text" class="add-item__input form-control" placeholder="Item Name" />
          </div>
          <div class="mb-3">
            <label className="form-label"> Category</label>
            <select class="add-item__input form-select" aria-label="Category">
              <option selected> Select One</option>
              <option value="1">Dairy</option>
              <option value="2">Meat / Meat Alternative 2</option>
              <option value="3">Fruit </option>
              <option value="4">Vegetable</option>
              <option value="5">Grain</option>
              <option value="6">Other</option>
            </select>
          </div>
          <div class="mb-3">
            <label className="form-label"> Quantity</label>
            <select class="add-item__input form-select" aria-label="Unit of Measurement">
              <option selected>Measured In</option>
              <option value="items">Number of Items</option>
              <option value="pounds">Pounds</option>
              <option value="cups">Cups</option>
            </select>
          </div>
          <div class="mb-3">
            <input
              type="number"
              class="add-item__input form-control"
              placeholder="Quantity ..."
            />
          </div>
          <div class="mb-3">
            <label for="datePicker" class="form-label">
              Date of Disposal
            </label>
            <input type="date" class="add-item__input form-control" id="datePicker" />
          </div>
          <button type="submit" class="add-item__btn btn btn-primary">
            Add Item
          </button>
        </form>
      </div>
    </section>
  );
}

export default AddWasteItem;
