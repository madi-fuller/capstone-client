import "./WasteTips.scss";
import axios from "axios";
import lightbulb from "../../assets/icons/lightbulb.png";
import { useEffect, useState } from "react";

function WasteTips() {
  const [wasteTips, setWasteTips] = useState([]);

  //get tips from backend server
  const getTips = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/waste-tips/");
      setWasteTips(response.data);
    } catch (error) {
      console.error("Error getting tips", error);
    }
  };

  useEffect(() => {
    getTips();
  }, []);

  //load 3 new tips when button is clicked
  const handleClick = () => {
    getTips();
  };

  return (
    <div className="tips">
      <h3 className="tips__title">Tips to Reduce Your Food Waste</h3>
      <div className="tips__container">
        <div className="tips__tip">
          {wasteTips.slice(0, 3).map((tip) => (
            <div key={tip.id}>
              <p className="tips__tip">
                {" "}
                <img className="tips__icon" src={lightbulb} alt="lightbulb" />
                {tip.tip_text}
              </p>
            </div>
          ))}
          <div className="tips__btn-container">
            <button onClick={handleClick} className="tips__btn">
              Show me More Tips!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WasteTips;
