import { useState, useEffect } from "react";
import axios from "axios";
import PieChartGraph from "../WasteDataPieChart/WasteDataPieChart";

function WasteItemData () {

    const [wasteData, setWasteData] = useState([]);

    useEffect(() => {
        const getWasteData = async () => {
            try {
                const response = await axios.get("https://localhost:8080/api/add-waste");
                setWasteData(response.data);
            } catch (error) {
                console.error("Error getting waste data", error);
            }
        };
        getWasteData();
    }, []);

    return (
        <div>
            <p> Waste Data </p>
            {wasteData && <PieChartGraph wasteData={wasteData}/>}
        </div>
    )
}

export default WasteItemData;