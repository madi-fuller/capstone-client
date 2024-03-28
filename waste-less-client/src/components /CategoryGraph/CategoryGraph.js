import { useEffect, useState } from "react";
import axios from "axios";
import { Chart } from "react-google-charts";
import "./CategoryGraph.scss";

function CategoryGraph() {
  const [categoryData, setCategoryData] = useState([]);
  const [maxWasteCategory, setMaxWasteCategory] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/add-waste/pie-data"
        );
        setCategoryData(response.data);
        const categoryTotals = response.data.reduce((totals, category) => {
          totals[category[0]] = category[1];
          return totals;
        }, {});
        const maxWaste = Object.entries(categoryTotals).reduce((max, [category, quantity]) => {
          return quantity > max.quantity ? { category, quantity } : max;
        }, { category: '', quantity: -1 });
        setMaxWasteCategory(maxWaste.category);
      } catch (error) {
        console.error("Error getting category data", error);
      }
    };
    getData();
  }, []);
  return (
    <div className="pie-chart">
      <h2 className="pie-chart__title">Categories of Food Wasted</h2>
      <p>You waste {maxWasteCategory} the most.</p>
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
