import axios from "axios";
import { useEffect, useState } from "react";

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
  }, [wasteItem]);
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
