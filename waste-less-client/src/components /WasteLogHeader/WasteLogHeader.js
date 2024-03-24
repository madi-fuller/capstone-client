import "./WasteLogHeader.scss";

function WasteLogHeader() {
  return (
    <div className="waste-header">
      <h1 className="waste-header__title">Wasted Food</h1>
      <p className="waste-header__subtitle">
        Keep track of the food items you throw away here
      </p>
      <button className="waste-header__button">Add item</button>
    </div>
  );
}

export default WasteLogHeader;
