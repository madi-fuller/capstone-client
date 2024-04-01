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
import DeleteModal from "../DeleteModal/DeleteModal";

function WasteItemsList() {
  const [wasteItem, setWasteItem] = useState([]);
  const [environmentalImpact, setEnvironmentalImpact] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showEnvironmentData, setShowEnvironmentData] = useState(false);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemIdToDelete, setItemIdToDelete] = useState(null);

  //show modal to confirm user wants to delete the item
  const openDeleteItem = async (itemId) => {
    setShowDeleteModal(true);
    setItemIdToDelete(itemId);
  };

  //delete the item from the database
  const deleteItem = async (itemId) => {
    const API_URL = `http://localhost:8080/api/add-waste/${itemId}`;
    try {
      await axios.delete(API_URL);
      setWasteItem((prevItems) =>
        prevItems.filter((item) => item.id !== itemIdToDelete)
      );

      setShowDeleteModal(false);
    } catch (error) {
      console.error("An error ocurred while deleting the item", error);
    }
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
    setItemIdToDelete(null);
  };

  //show waste log items to the user
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

  //display environmental impacts when the item name is clicked
  const handleItemClick = async (itemName) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/environmental-impact/${itemName}`
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

  //display the appropriate icon based on the category of the item
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

  //display the date to the user in day/month/date formate
  const changeToDate = (timestamp) => {
    const date = new Date(timestamp);
    const options = { weekday: "long", month: "long", day: "numeric" };
    return date.toLocaleString("en-US", options);
  };

  //show the items from newest to oldest

  const sortedWasteItems = [...wasteItem].sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at);
  });

  return (
    <section className="waste-log">
      <div className="container">
        <div className="row">
          {sortedWasteItems.map((item) => (
            <div key={item.id} className="col-md-3 mb-4">
              <div className="waste-log__card card">
                <div className="card-body">
                  <div className="waste-log__container">
                    <h5
                      onClick={() => handleItemClick(item.name)}
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
                      {item.quantity}
                    </p>
                    <p className="waste-log__quantity card-text">{item.unit}</p>
                  </div>
                  <div className="waste-log__date-container">
                    <p className="waste-log__subtitle">Thrown out:</p>
                    <p className="waste-log__date">
                      {changeToDate(item.created_at)}
                    </p>
                  </div>
                  <div className="waste-log__icon-container">
                    <img
                      onClick={() => openDeleteItem(item.id)}
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
      {showDeleteModal && (
        <DeleteModal
          onDelete={deleteItem}
          onCancel={handleDeleteCancel}
          itemIdToDelete={itemIdToDelete}
        />
      )}
    </section>
  );
}

export default WasteItemsList;
