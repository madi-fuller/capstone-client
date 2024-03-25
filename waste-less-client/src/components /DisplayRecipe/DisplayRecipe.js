import './DisplayRecipe.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

function DisplayRecipe ({ searchResult }) {
    const [data, setData] = useState([]);
    const [randomIndex, setRandomIndex] = useState(null);

    useEffect(() => {
        const getRecipe = async () => {
            try {
                const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchResult}&app_id=b23e228a&app_key=
                08189e92308af246c491688c4b1739be`);
                setData(response.data);
                setRandomIndex(Math.floor(Math.random() * response.data.hits.length));
            } catch (error) {
                console.error('Could not load data', error);
            }
        };
        if (searchResult) {
            getRecipe();
        }
    }, [searchResult]);
    return (
        <div>
              {data.hits && data.hits[randomIndex] && (
                <div key={data.hits[randomIndex].recipe.uri}>
                    <p>{data.hits[randomIndex].recipe.label}</p>
                    <p>{data.hits[randomIndex].recipe.ingredientLines}</p>
                    <img src={data.hits[randomIndex].recipe.image} alt="recipe preview"/>
                    <p>For recipe instructions:</p>
                    <a href={data.hits[randomIndex].recipe.url} target="_blank" rel="noreferrer">Click me!</a>
                </div>
            )}
        </div>
    )
}

export default DisplayRecipe;