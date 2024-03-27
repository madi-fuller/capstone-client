import { useEffect, useState } from "react";
import axios from "axios";
import { Chart } from "react-google-charts";
import "./WasteOverTime.scss"

function WasteOverTime() {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8080/api/add-waste/line-data"
                );
                const rawData = response.data.slice(1);
                const aggregatedData = aggregateByDay(rawData);
                setDailyData(aggregatedData);
            } catch (error) {
                console.error("Error getting data by date", error);
            }
        };
        getData();
    }, []);

    const aggregateByDay = rawData => {
        const aggregatedData = new Map();
        rawData.forEach(entry => {
            const date = new Date(entry[0]).toLocaleDateString();
            const count = entry[1];
            if (aggregatedData.has(date)) {
                aggregatedData.set(date, aggregatedData.get(date) + count);
            } else {
                aggregatedData.set(date, count);
            }
        });
        return Array.from(aggregatedData.entries()).map(([date, count]) => [date, count]);
    };

    return (
        <div className="graph">
            <h2 className="graph__title">Waste Over Time</h2>
            <div className="graph__chart">
            <Chart
                width={"400px"}
                height={"200px"}
                chartType="LineChart"
                data={[["Date", "Count"], ...dailyData]}
            />
            </div>
        </div>
    );
}

export default WasteOverTime;
