import { useEffect, useState } from "react";
import axios from "axios";
import "./C02Emissions.scss";
import carbon from "../../assets/icons/c02.png";

function C02Emissions() {

    const [totalC02, setTotalC02] = useState("");

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/environmental-impact/carbon");
                setTotalC02(response.data);
            } catch(error) {
                console.error("Error getting total C02", error);
            }
        }

        getData();
    })
    
    return (
        <div className="carbon">
            <h2 className="carbon__title">Total C02Emissions of Wasted Food</h2>
            <div className="carbon__container">
            <p className="carbon__number"> <img className="carbon__icon"src={carbon} alt="cloud"/>{totalC02} kg </p>
            
            </div>
        </div>
    )
}

export default C02Emissions;