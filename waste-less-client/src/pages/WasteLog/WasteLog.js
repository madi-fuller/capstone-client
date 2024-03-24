
import WasteItemsList from "../../components /WasteItemsList/WasteItemsList";
import AddWasteItem from "../../components /AddWasteItem/AddWasteItem";
import { useState } from "react";

function WasteLog() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className="waste-header">
        <h1 className="waste-header__title">Wasted Food</h1>
        <p className="waste-header__subtitle">
          Keep track of the food items you throw away here
        </p>
        <button className="waste-header__button" onClick={() => setModalOpen(true)}>Add item</button>
      </div>
      <WasteItemsList />
      {modalOpen && <AddWasteItem />}
    </>
  );
}

export default WasteLog;
