import axios from 'axios';
import { useEffect, useState } from 'react';

function WasteItemsList () {

    const [wasteItem, setWasteItem] = useState([]);
    useEffect(() => {
        const API_URL = "http://localhost:8080/api/add-waste";

        const getWasteItems = async () => {
            try {
                const response = await axios.get(API_URL);
                setWasteItem(response.data);
            } catch (error) {
                console.error("An error has ocurred loading waste items", error);
            }
        };
        getWasteItems();
    }, [wasteItem]);
    return (
        <>
        {wasteItem.map(item => (
            <div key={item.id}>
                <p>{item.name}</p>
            </div>
        ))}
        </>
    );
}

export default WasteItemsList;