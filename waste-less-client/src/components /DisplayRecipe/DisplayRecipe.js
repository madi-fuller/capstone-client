import './DisplayRecipe.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

function DisplayRecipe ({ searchResult }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getRecipe = async () => {
            try {
                const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchResult}&app_id=b23e228a&app_key=
                08189e92308af246c491688c4b1739be`);
                setData(response.data);
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
            {data.hits.slice(0, 1).map((item) => (
                <div key={item.recipe.uri}>
                    <p>{item.recipe.label}</p>
                    </div>
            ))}
        </div>
    )
}

export default DisplayRecipe;