import { useEffect, useState } from "react";
import axios from "axios";
import { Chart } from "react-google-charts";
import "./WasteOverTime.scss"

function WasteOverTime() {
    const [dailyData, setDailyData] = useState([]);
    const [trendMessage, setTrendMessage] = useState("");

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8080/api/add-waste/line-data"
                );
                const rawData = response.data.slice(1);
                const aggregatedData = aggregateByDay(rawData);
                setDailyData(aggregatedData);

                const firstValue = aggregatedData[0][1];
                const lastValue = aggregatedData[aggregatedData.length -1][1];
                if (lastValue > firstValue) {
                    setTrendMessage("You are wasting more food than usual");
                } else if (lastValue < firstValue ) {
                    setTrendMessage("You have improved your food waste habits!");
                } else {
                    setTrendMessage("Your food waste habits have remained the same");
                }
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
            <p>{trendMessage}</p>
            <div className="graph__chart">
            <Chart
                width={"400px"}
                height={"200px"}
                chartType="LineChart"
                data={[["Date", "Number of Items Thrown Away"], ...dailyData]}
                options={{
                    backgroundColor: "#f9f9f9",
                    chartArea: { width: "80%", height: "70%" },
                    legend: { position: "top" },
                    colors: ["#187F5A"],
                }}
            />
            </div>
        </div>
    );
}

export default WasteOverTime;
