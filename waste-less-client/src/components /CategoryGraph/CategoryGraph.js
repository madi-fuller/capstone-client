import { useEffect, useState } from "react";
import axios from "axios";
import { Chart } from "react-google-charts";
import "./CategoryGraph.scss";

function CategoryGraph() {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/add-waste/pie-data"
        );
        setCategoryData(response.data);
      } catch (error) {
        console.error("Error getting category data", error);
      }
    };
    getData();
  }, []);
  return (
    <div className="pie-chart">
      <h2 className="pie-chart__title">Categories of Food Wasted</h2>
      <div className="pie-chart__graph">
      <Chart
        width={"400px"}
        height={"200px"}
        chartType="PieChart"
        data={categoryData}
      />
      </div>
    </div>
  );
}

export default CategoryGraph;
