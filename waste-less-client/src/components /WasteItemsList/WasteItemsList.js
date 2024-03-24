import axios from "axios";
import { useEffect, useState } from "react";
import remove from "../../assets/icons/remove.png";
import "./WasteItemsList.scss";

function WasteItemsList() {
  const [wasteItem, setWasteItem] = useState([]);

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
      setWasteItem(prevItems => prevItems.filter(item => item.id !== itemId));
    } catch(error) {
      console.error("An error ocurred while deleting the item", error);
    }
  }

  return (
    <section className="waste-log">
      <div className="container">
        <div className="row">
          {wasteItem.map((item) => (
            <div key={item.id} className="col-md-3 mb-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title"> {item.name}</h5>
                        <p className="card-text">{item.category}</p>
                        <p className="card-text">{item.quantity}</p>
                        <img onClick={() => deleteItem(item.id)} className="waste-log__icon card-text " src={remove} alt="x icon" />

                        </div>
                    </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WasteItemsList;
