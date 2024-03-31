import "./DisplayRecipe.scss";
import axios from "axios";
import { useEffect, useState } from "react";

function DisplayRecipe({ searchResult }) {
  const [data, setData] = useState([]);
  const [randomIndex, setRandomIndex] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getRecipe = async () => {
      try {
        let response;
        if (searchResult) {
          response = await axios.get(
            `https://api.edamam.com/api/recipes/v2?type=public&q=${searchResult}&app_id=b23e228a&app_key=08189e92308af246c491688c4b1739be`
          );
          setMessage("");
        } else {
          const mostWastedItemResponse = await axios.get(
            "http://localhost:8080/api/add-waste/recipe"
          );
          const mostWastedItem = mostWastedItemResponse.data;

          if (mostWastedItem && mostWastedItem !=="") {
            response = await axios.get(
              `https://api.edamam.com/api/recipes/v2?type=public&q=${mostWastedItem}&app_id=b23e228a&app_key=08189e92308af246c491688c4b1739be`
            );
            setMessage(
              `You've wasted ${mostWastedItem} the most. Next time try this recipe out!`
            );
          } else {
            const wasteItemsResponse = await axios.get("http://localhost:8080/api/waste-items");
            const wasteItems = wasteItemsResponse.data;
            const randomIndex = Math.floor(Math.random() * wasteItems.length);
            const randomWasteItem = wasteItems[randomIndex];
            response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${randomWasteItem.name}&app_id=b23e228a&app_key=08189e92308af246c491688c4b1739be`);
            setMessage(`You recently threw away ${wasteItems}. Here is a recipe using that ingredient for next time!`);
          }
        }
        setData(response.data);
        setRandomIndex(Math.floor(Math.random() * response.data.hits.length));
      } catch (error) {
        console.error("error getting recipe", error);
      }
    };

    getRecipe();
  }, [searchResult]);

  return (
    <div>
      <p className="recipe__message">{message}</p>
      {data.hits && data.hits[randomIndex] && (
        <div key={data.hits[randomIndex].recipe.uri}>
          <div className="recipe__container">
            <div className="recipe__img-container">
              <img
                className="recipe__img"
                src={data.hits[randomIndex].recipe.image}
                alt="recipe preview"
              />
            </div>
            <div className="recipe__text-container">
              <p className="recipe__name">
                {data.hits[randomIndex].recipe.label}
              </p>
              <p className="recipe__ingredients">
                {data.hits[randomIndex].recipe.ingredientLines}
              </p>

              <p>For recipe instructions:</p>
              <a
                href={data.hits[randomIndex].recipe.url}
                target="_blank"
                rel="noreferrer"
              >
                Click me!
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DisplayRecipe;
