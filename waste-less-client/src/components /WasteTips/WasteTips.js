import "./WasteTips.scss";
import axios from "axios";
import lightbulb from "../../assets/icons/lightbulb.png";
import { useEffect, useState } from "react";

function WasteTips () {

    const [wasteTips, setWasteTips] = useState([]);

    useEffect(() => {
        const getTips = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/waste-tips/");
                setWasteTips(response.data);
            } catch(error) {
                console.error("Error getting tips", error);
            }
        }
        getTips();
    })

    return (
        <div className="tips">
            <h3 className="tips__title">Tips to Reduce Your Food Waste
                </h3>
                <div className="tips__container">
                    <div className="tips__tip">
                {wasteTips.slice(0, 3).map((tip) => (
                    <div key={tip.id}>
                        <p className="tips__tip"> <img className="tips__icon"src={lightbulb} alt="lightbulb"/>{tip.tip_text}</p>
    
                        </div>
                    
                   
                ))}
                   <button className="tips__btn">Show me More Tips!</button>
                </div>
              
                
                </div>
               
        </div>
    )
}

export default WasteTips;