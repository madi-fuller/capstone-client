import WasteItemsList from "../../components /WasteItemsList/WasteItemsList";
import AddWasteItem from "../../components /AddWasteItem/AddWasteItem";
import { useState } from "react";
import "./WasteLog.scss";

function WasteLog() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleButtonClick = (value) => {
    setModalOpen(false);
  };
  return (
    <section className="waste-page">
      <div className="waste-header">
        <div className="waste-header__container">
          <h1 className="waste-header__title">Wasted Food</h1>
          <p className="waste-header__subtitle">
            Keep track of the food items you throw away here
          </p>
        </div>
        <div className="waste-header__container">
          <button
            className="waste-header__button"
            onClick={() => setModalOpen(true)}
          >
            Add item
          </button>
        </div>
      </div>
      <WasteItemsList />
      {modalOpen && (
        <AddWasteItem
          onCancel={handleButtonClick}
          onClose={handleButtonClick}
        />
      )}

    </section>
  );
}

export default WasteLog;
