import axios from "axios";
import { useEffect, useState } from "react";
import remove from "../../assets/icons/remove.png";
import "./WasteItemsList.scss";
import fruitIcon from "../../assets/icons/strawberry.png";
import vegetableIcon from "../../assets/icons/broccoli.png";
import grainIcon from "../../assets/icons/grain.png";
import dairyIcon from "../../assets/icons/milk.png";
import leftoversIcon from "../../assets/icons/meal.png";
import meatIcon from "../../assets/icons/meat.png";
import otherIcon from "../../assets/icons/cutlery.png";
import EnvironmentData from "../EnvironmentDataModal/EnvironmentData";

function WasteItemsList() {
  const [wasteItem, setWasteItem] = useState([]);
  const [environmentalImpact, setEnvironmentalImpact] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showEnvironmentData, setShowEnvironmentData] = useState(false);

  useEffect(() => {
    const API_URL = "http://localhost:8080/api/add-waste";
    const getWasteItems = async () => {
      try {
        const response = await axios.get(API_URL);
        setWasteItem(response.data);
      } catch (error) {
        console.error("An error has ocurred loading waste items", error);
      }
    };
    getWasteItems();
  }, []);

  const deleteItem = async (itemId) => {
    const API_URL = `http://localhost:8080/api/add-waste/${itemId}`;
    try {
      await axios.delete(API_URL);
      setWasteItem((prevItems) =>
        prevItems.filter((item) => item.id !== itemId)
      );
    } catch (error) {
      console.error("An error ocurred while deleting the item", error);
    }
  };

  const handleItemClick = async (itemId, itemName) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/environmental-impact/${itemId}`
      );
      setSelectedItem(itemName);
      setEnvironmentalImpact(response.data);
      setShowEnvironmentData(true);
      console.log(response.data);
    } catch (error) {
      console.error("Error getting environmental impact data", error);
    }
  };

  const handleCloseData = () => {
    setShowEnvironmentData(false);
  };

  const categoryIcons = {
    fruit: fruitIcon,
    vegetable: vegetableIcon,
    grain: grainIcon,
    meat: meatIcon,
    dairy: dairyIcon,
    leftovers: leftoversIcon,
    other: otherIcon,
  };

  const getCategoryIcon = (category) => {
    return categoryIcons[category.toLowerCase()] || "";
  };

  const changeToDate = (timestamp) => {
    const date = new Date(timestamp);
    const options = { weekday: "long", month: "long", day: "numeric" };
    return date.toLocaleString("en-US", options);
  };

  return (
    <section className="waste-log">
      <div className="container">
        <div className="row">
          {wasteItem.map((item) => (
            <div key={item.id} className="col-md-3 mb-4">
              <div className="waste-log__card card">
                <div className="card-body">
                  <div className="waste-log__container">
                    <h5
                      onClick={() => handleItemClick(item.id, item.name)}
                      className="waste-log__title card-title"
                    >
                      {" "}
                      {item.name}
                    </h5>

                    <img
                      className="waste-log__category-icon"
                      src={getCategoryIcon(item.category)}
                      alt="category icon"
                    />
                  </div>
                  <div className="waste-log__category-container">
                    <p className="waste-log__subtitle">Category:</p>
                    <p className="waste-log__category card-text">
                      {item.category}
                    </p>
                  </div>
                  <div className="waste-log__quantity-container">
                    <p className="waste-log__subtitle">Quantity:</p>
                    <p className="waste-log__quantity card-text">
                      {item.quantity} {item.unit}
                    </p>
                  </div>
                  <div className="waste-log__date-container">
                    <p className="waste-log__subtitle">Thrown out:</p>
                    <p className="waste-log__date">
                      {changeToDate(item.created_at)}
                    </p>
                  </div>
                  <div className="waste-log__icon-container">
                    <img
                      onClick={() => deleteItem(item.id)}
                      className="waste-log__icon card-text "
                      src={remove}
                      alt="x icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showEnvironmentData && environmentalImpact && (
        <EnvironmentData
          onClose={handleCloseData}
          selectedItem={selectedItem}
          environmentalImpact={environmentalImpact}
        />
      )}
    </section>
  );
}

export default WasteItemsList;
