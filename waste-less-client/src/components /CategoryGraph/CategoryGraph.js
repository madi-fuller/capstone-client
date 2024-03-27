import { useEffect, useState } from "react";
import axios from "axios";
import { Chart } from "react-google-charts";

function CategoryGraph() {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/add-waste/data"
        );
        setCategoryData(response.data);
      } catch (error) {
        console.error("Error getting category data", error);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <h2>Categories of Food Wasted</h2>
      <Chart
        width={"500px"}
        height={"300px"}
        chartType="PieChart"
        data={categoryData}
      />
    </div>
  );
}

export default CategoryGraph;
